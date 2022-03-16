function Nav() {
  return (
    <nav className="nav">
      <div className="navBox">
        <div className="title">
          <img src="/images/kyungsuh/insta.svg" className="imgLogo" />
          <span className="logo">Westagram</span>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="검색" className="inpSearch" />
          <div>
            <div className="resultBox">
              <div className="speechBubble"></div>
              <div className="innerBox">
                <header>
                  <div>
                    <h4>최근 검색 항목</h4>
                    <button>모두 지우기</button>
                  </div>
                </header>
                <ul className="searchList"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="iconBox">
          <img src="/images/kyungsuh/explore.png" alt="탐색하기" />
          <img src="/images/kyungsuh/heart.png" alt="좋아요 버튼" />
          <img
            src="/images/kyungsuh/profile.png"
            alt="프로필 버튼"
            id="btnModal"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
