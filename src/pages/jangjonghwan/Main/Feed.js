/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Comment from './Comment';
import './Feed.scss';
function Feed(props) {
  const [comment, setComment] = useState('');

  const [commentList, setCommentList] = useState([]);

  const commentAdd = event => {
    event.preventDefault();
    setCommentList(commentArr => [...commentArr, comment]);
  };

  const getValue = e => {
    setComment(e.target.value);
  };

  const addCommEnter = e => {
    if (e.key === 'Enter') {
      setCommentList(commentArr => [...commentArr, comment]);
    }
  };

  return (
    <div className="feeds">
      <img
        className="feedProfile"
        alt="profile"
        src="/images/jangjonghwan/profile3.png"
      />
      <span className="feedId">vaekheezung</span>
      <br />
      <img
        className="feedImage"
        alt="feed"
        src="/images/jangjonghwan/feeds.jpg"
      />
      <div />
      <div className="likebutton">
        <img
          className="fa-thumbs-up"
          alt="thumsUp"
          src="/images/jangjonghwan/fa-regular fa-thumbs-up.png"
        />
        <img
          className="fa-comment"
          alt="commnet"
          src="/images/jangjonghwan/fa-regular fa-comment.png"
        />
        <img
          className="arrow"
          alt="arrow"
          src="/images/jangjonghwan/fa-solid fa-arrow-up-from-bracket.png"
        />
        <img
          className="bookMark"
          alt="bookMark"
          src="/images/jangjonghwan/fa-regular fa-bookmark.png"
        />
      </div>
      <div className="input">
        <ul className="commentBox">
          <span className="clickLike">aineworld님 외 10명이 좋아합니다.</span>
          <li className="commentList">
            {props.comment.map(data => {
              return (
                <li key={data.id}>
                  {data.userName}
                  {data.content}
                </li>
              );
            })}
            {commentList.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </li>
        </ul>

        <input
          onKeyPress={addCommEnter}
          onChange={getValue}
          className="comment"
          type="text"
          placeholder="댓글달기..."
        />
        <button onClick={commentAdd} className="click">
          게시
        </button>
      </div>
    </div>
  );
}

export default Feed;
