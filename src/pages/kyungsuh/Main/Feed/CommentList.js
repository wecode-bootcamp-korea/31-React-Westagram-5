import React, { useState } from 'react';

function CommentList(feedItem) {
  // console.log(feedItem);
  const { commentList } = feedItem.feedItem;
  // console.log(commentList);
  // eslint 해결 못함
  const [comment, setComment] = useState([...commentList]);

  return (
    <div className="commentList">
      <ul>
        {comment.map(data => {
          return (
            <div className="innerBox" key={data.id}>
              <div className="profileImgNameBox">
                <img
                  className="imgProfile"
                  src="/images/kyungsuh/basic-profile-img.png"
                  alt="프로필 사진"
                />
                <div className="comment"> {data.userName}</div>
              </div>
              <div className="comment">{data.content}</div>
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
        })}
      </ul>
    </div>
  );
}

export default CommentList;
