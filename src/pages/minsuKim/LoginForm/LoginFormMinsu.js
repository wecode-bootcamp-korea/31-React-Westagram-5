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

  const handleIdInput = event => {
    setIdValue({ id: event.target.value });
  };

  const handlePasswordInput = event => {
    setPasswordValue({ password: event.target.value });
  };

  return (
    <>
      <form>
        <div>
          <input
            onChange={handleIdInput}
            type="text"
            required={true}
            minLength={1}
            placeholder="Phone number, User name or Email"
          />
        </div>
        <div>
          <input
            onChange={handlePasswordInput}
            required={true}
            minLength={1}
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={goToMain}>
          로그인
        </button>
      </form>
    </>
  );
}

export default LoginFormMinsu;
