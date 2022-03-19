import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormMinsu from '../LoginForm/LoginFormMinsu';
import './LoginMinsu.scss';
// import { Link } from 'react-router-dom';

function LoginMinsu() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/minsu/main');
  };

  return (
    <>
      <div className="login">
        <div className="loginBox">
          <p>weeestagram</p>
          <LoginFormMinsu />
          <p>Forgot password?</p>
        </div>
        <div id="showing-icon-screen">
          <img alt="Instagram Logo" src="/images/minsuKim/instagram.png" />
          <a
            href="https://www.flaticon.com/free-icons/instagram"
            title="instagram icons"
          >
            Instagram icons created by Freepik - Flaticon
          </a>
        </div>
        <script src="js/login.js"></script>
      </div>
    </>
  );
}

export default LoginMinsu;
