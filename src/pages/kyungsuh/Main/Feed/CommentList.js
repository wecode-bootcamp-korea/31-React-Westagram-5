import React, { useEffect, useState } from 'react';

function CommentList(data) {
  console.log(data);
  const { commentList } = data.data;
  const [comment, setComment] = useState([...commentList]);

  console.log(comment);

  // useEffect(() => {
  //   fetch('/data/kyungsuh/feedData.json')
  //     .then(res => res.json())
  //     .then(data => setComment(data));
  // }, []);

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
              {/* <div className="comment">{value}</div> */}
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
