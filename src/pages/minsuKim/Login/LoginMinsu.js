import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginMinsu.scss';

function LoginMinsu() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <>
      <body className="login">
        <div className="loginBox">
          <p>weeestagram</p>
          <form>
            <div>
              <input
                type="text"
                required
                minlength="1"
                placeholder="Phone number, User name or Email"
              />
            </div>
            <div>
              <input
                required
                minlength="1"
                type="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" onClick={goToMain}>
              로그인
            </button>
          </form>
          <p>Forgot password?</p>
        </div>
        <div id="showing-icon-screen">
          <img alt="Instagram Logo" src="images/instagram.png" />
          <a
            href="https://www.flaticon.com/free-icons/instagram"
            title="instagram icons"
          >
            Instagram icons created by Freepik - Flaticon
          </a>
        </div>
        <script src="js/login.js"></script>
      </body>
    </>
  );
}

export default LoginMinsu;
