import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useNavigate,
} from 'react-router-dom';

import styles from './LoginKyungsuh.scss';
import common from '../../../styles/common.scss';

function Login() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/suh/main');
  };

  return (
    <section className="section">
      <h1 className="title">westagram</h1>
      <div>
        <form className="formLogin">
          <input className="inpID" placeholder="이메일" />
          <p className="inputAlert" />
          <input className="inpPass" type="password" placeholder="비밀번호" />
          <p className="inputPassAlert" />

          <button type="button" className="btnLogin off" onClick={goMain}>
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
