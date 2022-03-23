import React from 'react';

const Comment = props => {
  const { value } = props;
  return (
    <div className="innerBox">
      <div className="profileImgNameBox">
        <img
          className="imgProfile"
          src="/images/kyungsuh/basic-profile-img.png"
          alt="프로필 사진"
        />
        <div className="comment"> a.orazy_sudnics </div>
      </div>
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
};

export default Comment;
