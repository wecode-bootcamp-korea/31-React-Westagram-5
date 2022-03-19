import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHwan.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/hwan/main');
  };

  const [userId, setUserId] = useState('');
  const handleIdInput = e => {
    setUserId(e.target.value);
  };
  const [userPassword, setUserPassword] = useState('');
  const handlePwInput = e => {
    setUserPassword(e.target.value);
  };

  const [activation, setActivation] = useState(false);
  const isPassedLogin = () => {
    return userId.includes('@') && userPassword.length > 4
      ? setActivation(true)
      : setActivation(false);
  };

  return (
    <div className="container">
      <div className="box" />
      <div className="insideBox">
        <header className="title">westagram</header>

        <section className="loginButton">
          <input
            onKeyUp={isPassedLogin}
            onChange={handleIdInput}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="loginId"
            value={userId}
          />
          <input
            onKeyUp={isPassedLogin}
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호"
            className="loginPassword"
            value={userPassword}
          />

          <div className="pwButton">
            <button
              className={activation ? 'activationBtn' : 'disabledBtn'}
              type="button"
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
        </section>

        <footer>
          <a href="##">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </div>
  );
}
export default Login;
