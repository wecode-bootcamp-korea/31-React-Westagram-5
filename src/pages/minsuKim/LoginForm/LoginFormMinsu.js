import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginFormMinsu.scss';
// import { Link } from 'react-router-dom';

function LoginFormMinsu() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/minsu/main');
  };
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [btnColor, setBtnColor] = useState('black');
  const [btndisabled, setBtnDisabled] = useState(true);

  const handleIdInput = event => {
    setIdValue(event.target.value);
  };

  const handlePasswordInput = event => {
    setPasswordValue(event.target.value);
    checkValidation();
  };

  const checkValidation = () => {
    const emainCheck =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isValidId = emainCheck.test(idValue);
    console.log('이메일 유효성 검사 :: ', isValidId);

    const isValidPassword = passwordValue.length >= 7;
    console.log(passwordValue.length, isValidPassword);

    isValidId && isValidPassword
      ? setBtnColor('#0095f6')
      : setBtnColor('black');

    isValidId && isValidPassword ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  // 로그인하는 함수
  const Login = event => {
    event.preventDefault();
    console.log(idValue);
    console.log(passwordValue);
    fetch('http://10.58.3.10:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kimminsu',
        email: idValue,
        password: passwordValue,
        phone_number: '010-8732-3762',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  // 회원가입하는 함수
  const signUp = event => {
    event.preventDefault();
    console.log(idValue);
    console.log(passwordValue);
    fetch('http://10.58.3.10:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kimminsu',
        email: idValue,
        password: passwordValue,
        phone_number: '010-8732-3762',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.message);
        if (result.message === 'SUCCESS') {
          alert('회원가입에 성공하셨습니다.');
        } else if (result.message === 'EMAIL_ALREADY_EXISTS') {
          alert('존재하는 계정입니다.');
        }
      });
  };

  return (
    <>
      <form className="LoginForm">
        <div>
          <input
            onChange={handleIdInput}
            placeholder="Phone number, User name or Email"
          />
        </div>
        <div>
          <input
            onChange={handlePasswordInput}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: btnColor }}
          disabled={btndisabled}
          onClick={Login}
        >
          로그인
        </button>
        <button
          type="submit"
          style={{ backgroundColor: btnColor }}
          disabled={btndisabled}
          onClick={signUp}
        >
          회원가입
        </button>
      </form>
    </>
  );
}

export default LoginFormMinsu;
