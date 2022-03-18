import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginKyungsuh.scss';
// import common from '../../../styles/common.scss';

import Input from './Input.js';

function Login() {
  let [input, setInput] = useState('');
  let [inputPw, setInputPw] = useState('');

  const navigate = useNavigate();

  const goMain = () => {
    navigate('/suh/main');
  };

  const handleInput = e => {
    console.log(setInput(e.target.value));
  };

  const handlePwInput = e => {
    console.log(setInputPw(e.target.value));
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
            함수={handleInput}
            입력값={input}
          />

          <div>{input}</div>
          <p className="inputAlert" />

          <Input
            type="password"
            placeholder="비밀번호"
            className="inpPass"
            함수={handlePwInput}
            입력값={inputPw}
          />
          <div>{inputPw}</div>
          <p className="inputPassAlert" />

          <button
            style={{ backgroundColor: '#B2DFFC' }}
            type="button"
            className="btnLogin off"
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
