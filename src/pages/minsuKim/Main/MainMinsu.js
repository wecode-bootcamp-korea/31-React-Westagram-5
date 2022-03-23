import { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import CommentMinsu from '../comment/CommentMinsu';
import './MainMinsu.scss';

function MainMinsu() {
  // 댓글을 저장할 state를 생성한다.
  const [commentInput, setCommentInput] = useState({});

  //댓글이 저장되는 array state를 생성한다.
  const [commentInputArray, setCommentInputArray] = useState([]);
  const commentInputRef = useRef();
  //input에 onChange Event가 발생할 때 마다 value를 commnetInput에 저장해준다.
  const addInput = event => {
    setCommentInput({
      id: Date(),
      name: 'minsu',
      comment: event.target.value,
      commentTime: '20분전',
    });
  };

  //form이 submit하면 실행되는 함수
  const submitComment = event => {
    // preventDefault로 새로고침 방지
    event.preventDefault();
    if (commentInput.length === 0) {
      alert('Please Enter Commnet');
      return;
    }
    setCommentInputArray(commentValueList => [
      commentInput,
      ...commentValueList,
    ]);
    //댓글창 빈칸으로
    commentInputRef.current.value = '';
  };

  useEffect(() => {
    fetch('/data/mockDataMinsu/mockComment.json')
      .then(comment => comment.json())
      .then(comment => setCommentInputArray(comment));
  }, []);

  return (
    <>
      <Nav />
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
              <img src="/images/minsuKim/han-river.jpg" />
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

              <div className="commentLikeCount">
                <span>좋아요 25개</span>
              </div>

              <div className="commentLike">
                <i className="fa-solid fa-circle-user fa-lg"></i>
                <p>
                  <span className="userName">jjangu.luv</span>님 외 20명이
                  좋아합니다.
                </p>
              </div>
              <CommentMinsu commentInputArray={commentInputArray} />
            </div>

            <form className="comment" onSubmit={submitComment}>
              <input
                id="commentInput"
                onChange={addInput}
                type="text"
                // value={commentInput}
                placeholder="댓글달기..."
                ref={commentInputRef}
              />
              <button id="submit">게시</button>
            </form>
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
              <p>lifelog_msms</p>
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

      {/* <script
        src="https://kit.fontawesome.com/d33ee304fc.js"
        crossOrigin="anonymous"
      ></script> */}

      <script src="js/main.js"></script>
    </>
  );
}

export default MainMinsu;
