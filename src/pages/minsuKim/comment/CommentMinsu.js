import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './CommentMinsu.scss';

function CommentMinsu() {
  const [commnetInput, setCommentInput] = useState('');

  const addInput = event => {
    setCommentInput(event.target.value);
    console.log(commnetInput);
  };

  const checkInput = event => {
    // preventDefault로 새로고침 방지
    event.preventDefault();
    if (commnetInput.length === 0) {
      alert('Please Enter Commnet');
    } else {
      uploadInput(commnetInput);
    }
  };

  const uploadInput = comment => {
    const comments = [];
    comments.push(comment);
  };

  return (
    <>
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
            <span className="userName">Runner.jay</span>님 외 20명이 좋아합니다.
          </p>
        </div>

        <ul className="commentList">
          <li></li>
        </ul>
      </div>

      <form className="comment">
        <input
          id="commentInput"
          onChange={addInput}
          type="text"
          placeholder="댓글달기..."
        />
        <button id="submit" onClick={checkInput} style={{ color: 'skyblue' }}>
          게시
        </button>
      </form>
    </>
  );
}

export default CommentMinsu;
