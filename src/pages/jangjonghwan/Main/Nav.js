import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="navBox">
        <div className="title">
          <img
            src="/images/common/insta.svg"
            className="imgLogo"
            alt="위스타 로고 이미지"
          />
          <h1 className="logo">Westagram</h1>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="검색" className="inpSearch" />
        </div>

        <div className="iconBox">
          <img src="/images/common/explore.png" alt="탐색하기" />
          <img src="/images/common/heart.png" alt="좋아요" />
          <img src="/images/common/profile.png" alt="프로필" id="btnModal" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
