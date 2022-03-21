import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginDongwook.scss';
import { Link } from 'react-router-dom';

function LoginDongwook() {
  const [userId, setUserId] = useState(' ');
  const [userPassword, setUserPassword] = useState(' ');
  const btn = document.querySelector('.button');

  const navigate = useNavigate();
  const onClickImg = () => {
    navigate('/dong/main');
  };

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePwInput = e => {
    setUserPassword(e.target.value);
  };
  const handleBtn = e => {
    userId.includes('@') === true && userPassword.length > 5
      ? (btn.style.backgroundColor = 'black')
      : (btn.style.backgroundColor = 'white');
  };

  return (
    <div className="finalBox">
      <div className="fontBox">westagram</div>

      <div className="loginBox">
        <input
          type="text"
          className="idBox"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          type="password"
          className="passBox"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onInput={handleBtn}
        />

        <button className="button" onClick={onClickImg}>
          로그인
        </button>
      </div>

      <div className="forgotBox">비밀번호를 잊으셨나요?</div>
    </div>
  );
}
export default LoginDongwook;
