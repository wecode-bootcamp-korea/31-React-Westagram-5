import NavMinsu from '../../../components/Nav/Nav';
import CommentMinsu from '../comment/CommentMinsu';
import './MainMinsu.scss';
// import { useNavigate } from 'react-router-dom';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

function MainMinsu() {
  return (
    <>
      <NavMinsu />
      <body className="Main">
        <main className="mainContainer">
          <article>
            <section className="feed">
              <div className="feedHeader">
                <div>
                  <img
                    alt="profile_image"
                    src="/images/minsuKim/baby-shiba-inu.jpeg"
                  />
                  <div className="feedHeaderName">
                    <p>Shiba_Inu</p>
                    <span>반포한강공원</span>
                  </div>
                </div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="feedImage">
                <img alt="feedImage" src="/images/minsuKim/han-river.jpg" />
              </div>
              <CommentMinsu />
            </section>
          </article>

          <aside>
            <section className="sectionWrapper">
              <div className="circledImage">
                <img alt="profile-pic" src="/images/minsuKim/shiba.png" />
                <img
                  className="liveCircle"
                  alt="story-circle"
                  src="/images/minsuKim/live-circle.png"
                />
              </div>
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
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/jjangu.jpg" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>
                <div className="sectionInner">
                  <p>짱구</p>
                  <p>짱구는 못말려</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/chulsoo.jpeg" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>
                <div className="sectionInner">
                  <p>철수</p>
                  <p>학원가기 싫다</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/hoon.jpeg" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>

                <div className="sectionInner">
                  <p>훈이</p>
                  <p>나는 주먹밥머리</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/maenggu.png" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>
                <div className="sectionInner">
                  <p>맹구</p>
                  <p>나는 돌이 좋아</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/yuri.jpeg" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>
                <div className="sectionInner">
                  <p>유리</p>
                  <p>나는 토끼인형이 좋아</p>
                </div>
              </section>
              <section className="sectionWrapper">
                <div className="circledImage">
                  <img alt="profile-pic" src="/images/minsuKim/wonjang.jpeg" />
                  <img
                    className="liveCircle"
                    alt="story-circle"
                    src="/images/minsuKim/live-circle.png"
                  />
                </div>
                <div className="sectionInner">
                  <p>원장쌤</p>
                  <p>떡잎마을 유치원 화이팅</p>
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
