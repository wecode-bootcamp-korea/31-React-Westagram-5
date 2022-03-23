import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKyungsuh.scss';

import Input from './Input.js';

function Login() {
  let [input, setInput] = useState('');
  let [inputPw, setInputPw] = useState('');
  let [isDisable, setIsDisable] = useState(true);
  let [color, setColor] = useState('#B2DFFC');

  const navigate = useNavigate();

  const goMain = () => {
    navigate('/suh/main');
  };

  const handleInput = e => {
    setInput(e.target.value);
    checkInput();
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
    checkInput();
  };

  const checkInput = () => {
    input.indexOf('@') > 1 && inputPw.length > 3
      ? setColor('#0095f6')
      : deActivateBtn();
  };

  const deActivateBtn = () => {
    setIsDisable(false);
  };

  return (
    <section className="section">
      <h1 className="title">westagram</h1>
      <div>
        <form className="formLogin">
          <Input
            type="text"
            placeholder="이메일"
            className="inpID"
            handleInput={handleInput}
          />
          <p className="inputAlert" />

          <Input
            type="password"
            placeholder="비밀번호"
            className="inpPass"
            handleInput={handlePwInput}
          />
          <p className="inputPassAlert" />

          <button
            style={{ background: color }}
            type="button"
            className="btnLogin off"
            onClick={goMain}
            disabled={isDisable}
          >
            로그인
          </button>
          <a className="goToLink" href="#none">
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>
    </section>
  );
}

export default Login;
