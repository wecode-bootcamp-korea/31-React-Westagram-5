import React, { useState } from 'react';

function Feed() {
  let [input, setInput] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [isCommentBtn, setIsCommentBtn] = useState(true);
  let [color, setColor] = useState('#B2DFFC');

  const hasInputValue = () => {
    inputValue.length == -1 ? setIsCommentBtn(true) : colorChange();
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

  return (
    <div className="feed">
      <article className="article">
        <header>
          <div className="head">
            <img
              src="/images/kyungsuh/basic-profile-img.png"
              alt="프로필 사진"
            />
            <span>a.orazy_sudnics</span>
          </div>
        </header>
        <div className="imgBox">
          <img
            src="/images/kyungsuh/userimg.webp"
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
          <p>좋아요 2,798,294개</p>
          <p>a.orazy_sudnics 🍀</p>
        </div>

        <div className="timeBox">
          <span>10분전</span>
        </div>

        {/* <!-- 댓글 창 --> */}
        <div className="commentBox">
          <div className="moreIconBox">
            <img
              src="/images/kyungsuh/moreicon.svg"
              alt="더보기"
              className="iconMore"
            />
            {input.map(function Comment(a, i) {
              return (
                <div className="innerBox" key={i}>
                  <div className="comment">{a}</div>
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
          </div>
        </div>

        {/* <!-- 댓글 기능 구현 --> */}
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
    </div>
  );
}

export default Feed;
