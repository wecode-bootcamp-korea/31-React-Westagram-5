import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginJaehyuk.scss';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('deactive');
  const [isDisable, setIsDisable] = useState(true);
  const [color, setColor] = useState('#B2DFFC');

  const isPassedLogin = () => {};
  const isPassLogin = () => {};

  const onHandleIdInput = e => {
    // setEmail {e.target.value}
    setEmail(e.target.value);
    checkInput();
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
    checkInput();
  };

  const checkInput = () => {
    setColor(email.indexOf('@') && password.length > 4 ? 'blue' : '#B2DFFC');
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
  // const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/jaehyuk/main');
  // };
  const onHandleSubmit = () => {
    if (color === 'blue') {
      navigate('/jaehyuk/main');
    }
  };

  // email += inputStr; x
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
            value={email}
            onChange={onHandleIdInput}
          />
          <input
            id="password-input-1"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordInput}
          />
          <button
            id="login"
            style={{ backgroundColor: `${color}` }}
            type="button"
            className="btnLogin"
            onClick={onHandleSubmit}
          >
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
