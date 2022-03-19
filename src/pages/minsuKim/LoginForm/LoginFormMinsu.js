import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginFormMinsu.scss';
// import { Link } from 'react-router-dom';

function LoginFormMinsu() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/minsu/main');
  };
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [btnColor, setBtnColor] = useState('black');
  const [btndisabled, setBtnDisabled] = useState(true);

  const handleIdInput = event => {
    setIdValue({ id: event.target.value });

    checkValidation();
  };

  const handlePasswordInput = event => {
    setPasswordValue({ password: event.target.value });

    checkValidation();
  };

  const checkValidation = () => {
    const emainCheck =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isValidId = emainCheck.test(idValue.id);
    console.log('이메일 유효성 검사 :: ', isValidId);

    const isValidPassword = passwordValue.password.length >= 8;
    console.log(passwordValue.password.length, isValidPassword);

    isValidId && isValidPassword
      ? setBtnColor('#0095f6')
      : setBtnColor('black');

    isValidId && isValidPassword ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  return (
    <>
      <form>
        <div>
          <input
            onChange={handleIdInput}
            placeholder="Phone number, User name or Email"
          />
        </div>
        <div>
          <input
            onChange={handlePasswordInput}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: btnColor }}
          disabled={btndisabled}
        >
          로그인
        </button>
      </form>
    </>
  );
}

export default LoginFormMinsu;
