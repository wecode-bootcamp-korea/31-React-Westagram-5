import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHwan.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/hwan/main');
  };

  return (
    <div className="container">
      <div className="box" />
      <div className="insideBox">
        <header className="title">westagram</header>

        <section className="loginButton">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="loginPassword"
            type="password"
            placeholder="비밀번호"
          />
          <div className="pwButton">
            <button className="connect" type="button" onClick={goToMain}>
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
