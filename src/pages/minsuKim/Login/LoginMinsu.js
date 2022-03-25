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
      <div className="loginMinsu">
        <div className="loginBox">
          <p className="loginBoxLogo">weeestagram</p>
          <LoginFormMinsu />
          <p className="loginBoxForgot">Forgot password?</p>
        </div>
        <div id="showingIconScreen">
          <img
            className="showingIconScreenIcon"
            alt="Instagram Logo"
            src="/images/minsuKim/instagram.png"
          />
          <a
            className="showingIconScreenAnchor"
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
