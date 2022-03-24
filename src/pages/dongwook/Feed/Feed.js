import React, { useState } from 'react';

import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaShareSquare,
  FaRegUserCircle,
  FaBookmark,
} from 'react-icons/fa';

function Feed() {
  const [userComment, setUserComment] = useState(' ');
  const [userCommentArr, setUserCommentArr] = useState([]);
  //const [comment, setComment] = useState([]);

  const handleComment = e => {
    console.log(e);
    setUserComment(e.target.value);
  };

  const sendComment = e => {
    setUserCommentArr(userCommentArr => [...userCommentArr, userComment]);
  };

  return (
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
            {/*
                {comment.map(list => {
                  return <li key={list.id}>{list.name}</li>;
                })}{' '}*/}
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
  );
}
export default Feed;
