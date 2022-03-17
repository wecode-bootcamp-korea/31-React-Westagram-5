import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function NavMinsu() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/minsu/login');
  };
  return (
    <>
      <nav className="navBar">
        <div className="navInner">
          <div className="titleWrapper">
            <i className="fa-brands fa-instagram"></i>
            <span>|</span>
            <h1 onClick={goToLogin}>weeestagram</h1>
          </div>

          <div className="searchWrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="searchBar" placeholder="검색" />
          </div>

          <div className="status">
            <div>
              <i className="fa-solid fa-compass"></i>
            </div>
            <div>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMinsu;
