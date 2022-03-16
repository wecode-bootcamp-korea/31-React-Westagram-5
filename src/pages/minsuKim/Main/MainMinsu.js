import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MainMinsu.scss';

function MainMinsu() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
      <body className="Main">
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

        <main className="mainContainer">
          <article>
            <section className="feed">
              <div className="feedHeader">
                <div>
                  <img alt="profile_image" src="images/baby-shiba-inu.jpeg" />
                  <div className="feedHeaderName">
                    <p>Shiba_Inu</p>
                    <span>반포한강공원</span>
                  </div>
                </div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="feedImage">
                <img alt="feedImage" src="images/han-river.jpg" />
              </div>
              <div className="commentWrapper">
                <div className="commentIcon">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-comment"></i>
                    <i className="fa-solid fa-envelope-open"></i>
                  </div>
                  <i className="fa-solid fa-bookmark"></i>
                </div>

                <div className="commentLike">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>
                    <span className="userName">Runner.jay</span>님 외 20명이
                    좋아합니다.
                  </p>
                </div>

                <ul className="commentList">
                  <li>
                    <span className="userName">Shiba_Inu</span>
                    <span>오랜만에 조깅하니까 기분이 좋다.</span>
                  </li>
                  <li>2시간 전</li>
                </ul>
              </div>

              <form className="comment">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글달기..."
                />
                <button id="submit">게시</button>
              </form>
            </section>
          </article>

          <aside>
            <section className="sectionWrapper">
              <i className="fa-solid fa-circle-user"></i>
              <div className="sectionInner">
                <p>Minsu_Kim</p>
                <p>하루하루 최선을...</p>
              </div>
            </section>
            <div className="contentWrapper">
              <div className="contentHeader">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <i className="fa-solid fa-circle-user"></i>
                <div className="sectionInner">
                  <p>sectionTest</p>
                  <p>sectionTest2</p>
                </div>
              </section>
            </div>
            <section className="recommendationWrapper"></section>
          </aside>
        </main>

        <script
          src="https://kit.fontawesome.com/d33ee304fc.js"
          crossorigin="anonymous"
        ></script>

        <script src="js/main.js"></script>
      </body>
    </>
  );
}

export default MainMinsu;
