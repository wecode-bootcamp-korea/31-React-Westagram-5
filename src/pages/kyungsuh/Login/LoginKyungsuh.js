import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginKyungsuh.scss';

import Input from './Input.js';

function Login() {
  let [input, setInput] = useState('');
  let [inputPw, setInputPw] = useState('');
  let [isActive, setIsActive] = useState('deactive');
  let [isDisable, setIsDisable] = useState(true);
  let [color, setColor] = useState('#B2DFFC');

  const navigate = useNavigate();

  const goMain = () => {
    navigate('/suh/main');
  };

  const handleInput = e => {
    console.log(setInput(e.target.value));
    checkInput();
  };

  const handlePwInput = e => {
    console.log(setInputPw(e.target.value));
    checkInput();
  };

  // checkInput으로 유효성검사 후, 조건 통과하면 로그인버튼 활성화 아니면 로그인 버튼 비활성화
  const checkInput = () => {
    input.indexOf('@') > 1 && inputPw.length > 3
      ? setColor('#0095f6')
      : deActivateBtn();
  };

  // const activateBtn = () => {
  //   setColor('blue');
  //   setIsActive('active');
  //   setIsDisable(true);
  // };

  const deActivateBtn = () => {
    setIsActive('deactive');
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
            // 유효성검사={checkInput}
          />
          {/* <input
            type="text"
            placeholder="이메일"
            className="inpID"
            onChange={e => {
              handleInput(e);
              checkInput();
            }}
          /> */}
          {/* <div>{input}</div> */}
          <p className="inputAlert" />

          <Input
            type="password"
            placeholder="비밀번호"
            className="inpPass"
            handleInput={handlePwInput}
            // 유효성검사={checkInput}
          />
          {/* <input
            type="password"
            placeholder="비밀번호"
            className="inpPass"
            onChange={e => {
              handlePwInput(e);
              checkInput();
            }}
          /> */}
          {/* <div>{inputPw}</div> */}
          <p className="inputPassAlert" />
          <button
            style={{ background: color }}
            type="button"
            className="btnLogin off"
            onClick={goMain}
            disabled={isDisable} //disable의 디폴트 상태값 false => true
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
