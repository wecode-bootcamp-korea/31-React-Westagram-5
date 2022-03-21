import React from 'react';
import './LoginDongwook.scss';
import { Link } from 'react-router-dom';

function LoginDongwook() {
  return (
    <div className="finalBox">
      <div className="fontBox">westagram</div>

      <div className="loginBox">
        <input
          type="text"
          className="idBox"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" className="passBox" placeholder="비밀번호" />
        <Link to="/Main">
          <button className="button">로그인</button>
        </Link>
      </div>

      <div className="forgotBox">비밀번호를 잊으셨나요?</div>
    </div>
  );
}
export default LoginDongwook;
