import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKyungsuh.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isValue, setIsValue] = useState({
    id: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputValue = e => {
    const { name, value } = e.target;
    setIsValue({ ...isValue, [name]: value });
  };

  const isValid = isValue.id.includes('@') && isValue.password.length > 4;

  const goToMain = () => {
    fetch('http://10.58.2.11:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: isValue.id,
        password: isValue.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('wrw-token', result.token);
          navigate('/suh/main');
        }
      });
  };

  const goToJoin = () => {
    fetch('http://10.58.2.11:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: isValue.id,
        password: isValue.password,
        name: '찰거머리',
        phone: '01085224967',
        date_of_birth: '1998-12-21',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('wrw-token', result.token);
          navigate('/suh/main');
        }
      });
  };

  return (
    <section className="section">
      <h1 className="title">westagram</h1>
      <div>
        <form className="formLogin">
          <input
            name="id"
            type="text"
            value={isValue.id}
            placeholder="이메일"
            className="inpID"
            onChange={handleInputValue}
          />
          <p className="inputAlert" />
          <input
            name="password"
            type="password"
            value={isValue.password}
            placeholder="비밀번호"
            className="inpPass"
            onChange={handleInputValue}
          />
          <p className="inputPassAlert" />

          <button
            type="button"
            className={isValid ? 'btnLogin on' : 'btnLogin off'}
            disabled={!isValid}
            onClick={goToMain}
          >
            로그인
          </button>

          <button
            type="button"
            className={isValid ? 'btnLogin on' : 'btnLogin off'}
            disabled={!isValid}
            onClick={goToJoin}
          >
            회원가입
          </button>

          <Link to="/suh/main" className="goToLink" href="#none">
            비밀번호를 잊으셨나요?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
