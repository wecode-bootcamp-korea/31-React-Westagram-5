import React, { useState } from 'react';
import Comment from './Comment/Comment';

const Feed = props => {
  const { userName, thumbnail, likesCount, commentList } = props;
  const [comment, setComment] = useState({
    id: '',
    userName: 'a.orazy_sudnics',
    content: '',
    isLiked: false,
  });

  const [commentsNewArray, setcommentsNewArray] = useState(commentList);

  const handleChange = event => {
    const { value } = event.target;
    setComment(pre => ({ ...pre, content: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (comment.length < 1) {
      return;
    }
    let idNumber = commentsNewArray.length + 1;
    const newComment = { ...comment, id: idNumber++ };
    setcommentsNewArray(pre => [...pre, newComment]);
    setComment(pre => ({ ...pre, content: '' }));
  };

  return (
    <div className="feed">
      <article className="article">
        <header>
          <div className="head">
            <img
              src="/images/kyungsuh/basic-profile-img.png"
              alt="프로필 사진"
            />
            <span>{userName}</span>
          </div>
        </header>
        <div className="imgBox">
          <img src={thumbnail} alt="사용자 게시물 이미지" className="userImg" />
        </div>
        <div className="iconBox">
          <div className="icon">
            <img src="/images/kyungsuh/heart.png" alt="좋아요 누르기" />
            <img src="/images/kyungsuh/comment.svg" alt="댓글 달기" />
            <img
              src="/images/kyungsuh/message-solid.svg"
              alt="메세지 전송"
              className="messIcon"
            />
          </div>
          <div className="save">
            <img
              src="/images/kyungsuh/bookmark-solid.svg"
              alt="저장"
              className="saveIcon"
            />
          </div>
        </div>
        <div className="likeBox">
          <p>좋아요 {likesCount}개</p>
          <p> {userName}</p>
        </div>

        <div className="timeBox">
          <span>10분전</span>
        </div>

        <div className="commentBox">
          <div className="moreIconBox">
            <img
              src="/images/kyungsuh/moreicon.svg"
              alt="더보기"
              className="iconMore"
            />
            {commentsNewArray.map(list => {
              return (
                <Comment
                  key={list.id}
                  content={list.content}
                  userName={list.userName}
                />
              );
            })}
          </div>
        </div>

        <div className="commentInpBox">
          <form className="innerBox">
            <input
              className="inpComment"
              value={comment.content}
              type="text"
              placeholder="댓글달기..."
              onChange={handleChange}
            />
            <button className="btnSave off" onClick={handleSubmit}>
              게시
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Feed;
