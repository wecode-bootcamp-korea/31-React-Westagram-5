import React from 'react';

function Comment({ value }) {
  return (
    <div className="innerBox">
      <div className="comment">{value}</div>
      <div className="iconBox">
        <button className="deleteBtn">
          <img src="/images/kyungsuh/xmark-solid.svg" alt="삭제" />
          <img
            className="heartIcon"
            src="/images/kyungsuh/heart.png"
            alt="댓글 좋아요"
          />
        </button>
      </div>
    </div>
  );
}

export default Comment;
