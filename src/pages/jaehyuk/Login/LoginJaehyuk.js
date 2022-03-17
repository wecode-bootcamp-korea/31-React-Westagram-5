import React from 'react';
import { Link } from 'react-router-dom';
import './LoginJaehyuk.scss';

function Login() {
  return (
    <div className="wrap-1">
      <div className="container-1">
        <div className="main-box-1">
          <div className="logo-box-1">
            <p className="main-font">
              <Link to="/Jaehyuk/main">Westagram</Link>
            </p>
          </div>
        </div>
        <div className="input-form-1">
          <input
            id="id-input-1"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input id="password-input-1" type="text" placeholder="비밀번호" />
          <button id="login">
            <span className="login-alphabet">로그인</span>
          </button>
        </div>
        <div className="find-password-1">
          <span className="find-password-2">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
