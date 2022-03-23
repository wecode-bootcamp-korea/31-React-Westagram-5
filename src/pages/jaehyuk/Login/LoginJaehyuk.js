import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJaehyuk.scss';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('deactive');
  const [isDisable, setIsDisable] = useState(true);
  const [color, setColor] = useState('#1d84c9');
  console.log(email);
  console.log(password);
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
  //   setColor('blue')
  //   setIsActive('active')
  //   setIsDisable(true)
  // }
  const deActivateBtn = () => {
    setIsActive('deactive');
    setIsDisable(false);
  };
  // const navigate = useNavigate()
  // const goToLogin = () => {
  //   navigate('/jaehyuk/main')
  // }
  const onHandleSubmit = () => {
    if (color === 'blue') {
      navigate('/jaehyuk/main');
    }

    fetch('http://10.58.2.19:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: '임재혁',
        password: password,
        email: email,
        phone_number: '010-8949-4632',
        address: '송파구',
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="wrap-1">
      <div className="container-1">
        <div className="main-box-1">
          <div className="logo-box-1">
            <p className="main-font">Westagram</p>
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
          <button className="signIn">회원가입</button>
        </div>
        <div className="find-password-1">
          <span className="find-password-2">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;

// onClick = { () => {
//   fetch("http://10.58.2.19/users/signin", {
//     method: "POST",
//     body: JSON.stringify({
//       name:'임재혁',
//       password:'영문 소문자 영문 대문자 특수문자',
//       email:'ljh95310@naver.com',
//       phone_number:'010-8949-4632',
//       address:'송파구'
//     }),
//   }
//   .then((response) => response.json())
//   .then((result) => console.log("결과: ", result))
// }
