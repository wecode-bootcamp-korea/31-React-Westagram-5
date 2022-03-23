import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

function Feed() {
  let [input, setInput] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [isCommentBtn, setIsCommentBtn] = useState(true);
  let [color, setColor] = useState('#B2DFFC');

  const hasInputValue = () => {
    inputValue.length === -1 ? setIsCommentBtn(true) : colorChange();
  };

  const colorChange = () => {
    setColor('#0095f6');
    setIsCommentBtn(false);
  };

  const handleInputList = e => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    } else {
      let arrayCopy = [...input];
      arrayCopy.push(inputValue);
      setInput(arrayCopy);
      setInputValue('');
    }
  };

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/kyungsuh/feedData.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  });

  return (
    <div className="feed">
      {feed.map(data => {
        return (
          <article className="article">
            <header>
              <div className="head">
                <img
                  src="/images/kyungsuh/basic-profile-img.png"
                  alt="프로필 사진"
                />
                <span>{data.userName}</span>
              </div>
            </header>
            <div className="imgBox">
              <img
                src={data.thumbnail}
                alt="사용자 게시물 이미지"
                className="userImg"
              />
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
              <p>좋아요 {data.likesCount}개</p>
              <p> {data.userName}</p>
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
                <CommentList
                  input={input}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  hasInputValue={hasInputValue}
                  color={color}
                  handleInputList={handleInputList}
                  isCommentBtn={isCommentBtn}
                />
                {input.map((value, index) => {
                  return <Comment value={value} key={index} />;
                })}
              </div>
            </div>

            <div className="commentInpBox">
              <form className="innerBox">
                <input
                  className="inpComment"
                  value={inputValue}
                  type="text"
                  placeholder="댓글달기..."
                  onChange={e => {
                    setInputValue(e.target.value);
                    hasInputValue();
                  }}
                />
                <button
                  style={{ color: color }}
                  className="btnSave off"
                  onClick={handleInputList}
                  disabled={isCommentBtn}
                >
                  게시
                </button>
              </form>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Feed;
