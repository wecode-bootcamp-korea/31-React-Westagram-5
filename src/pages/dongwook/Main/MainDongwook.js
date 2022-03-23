import React, { useEffect, useState } from 'react';
import './MainDongwook.scss';
import Nav from '../../../components/Nav/Nav';

import {
  FaSearch,
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaShareSquare,
  FaRegUserCircle,
  FaBookmark,
} from 'react-icons/fa';

function MainDongwook() {
  const [userComment, setUserComment] = useState(' ');
  const [userCommentArr, setUserCommentArr] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch('/data/mockDataDongWook/mockComment.json')
      .then(comment => comment.json())
      .then(comment => setComment(comment));
  }, []);

  console.log(comment);

  const handleComment = e => {
    console.log(e);
    setUserComment(e.target.value);
  };
  const commentData = e => {
    setUserCommentArr(e.target.value);
  };
  const sendComment = e => {
    setUserCommentArr(userCommentArr => [...userCommentArr, userComment]);
  };

  return (
    <div className="main">
      <Nav />
      <div className="mainCont">
        <div className="contBox">
          <div className="contHeader">
            <div className="contHeaderImg">
              <div className="userInfo">
                <img
                  src="/images/dongwook/jokic.png"
                  className="userPhoto"
                  alt="userPhoto"
                />
                <div className="userId">jokic</div>
              </div>
              <FaEllipsisH className="faEllipsis" />
            </div>
          </div>

          <div className="mainFeed">
            <img
              src="/images/dongwook/feedphoto.jpg"
              className="mainPhoto"
              alt="mainPhoto"
            />
          </div>

          <div className="reactionBox">
            <div className="likeIconBox">
              <div className="miniIconBox">
                <FaHeart className="faHeart" />
                <FaComment className="faComment" />
                <FaShareSquare className="faShareSquare" />
              </div>
              <span className="bookmark">
                <FaBookmark className="bookmark" />
              </span>
            </div>

            <div className="likeNumberBox">
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p className="friends">Lebron님이 외 10명이 좋아합니다.</p>
              </div>
            </div>

            <div className="commentBox">
              <div className="friendComment">
                {userCommentArr.map((userComment, index) => (
                  <li key={index}>
                    <span>{userComment}</span>
                  </li>
                ))}{' '}
                {comment.map(list => {
                  return <li key={list.id}>{list.name}</li>;
                })}{' '}
                {/*여기서 list명은 내가 지정할 수 있는 값 . 헷갈리지 말기 */}
              </div>
            </div>

            <div className="putinBox">
              <input
                type="text"
                placeholder=" 댓글달기..."
                className="writeBox"
                onChange={handleComment}
              />
              <button onClick={sendComment}>게시</button>
            </div>
          </div>
        </div>

        <div className="aside">
          <div className="client">
            <i className="fa-solid fa-circle-user" />
            <FaRegUserCircle className="faCircleUser" />
            <p>DongWook</p>
          </div>
          <div className="storyForm">
            <div className="storyTitle">
              <div className="storyLetter">스토리</div>
              <div className="storyAll">모두 보기</div>
            </div>

            <div className="friends">
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Curry</p>
              </div>
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Derozan</p>
              </div>
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Doncic</p>
              </div>
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Harden</p>
              </div>
            </div>
          </div>

          <div className="recommendForm">
            <div className="recommendTitle">
              <div className="forClient">회원님을 위한 추천</div>
              <div className="viewOur">모두 보기</div>
            </div>
            <div className="recommendPeople">
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Bill</p>
              </div>
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Green</p>
              </div>
              <div className="friendsName">
                <FaRegUserCircle className="faCircleUser" />
                <p>Thompson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//.
export default MainDongwook;
