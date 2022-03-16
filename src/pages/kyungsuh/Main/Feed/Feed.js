import React from 'react';

function Feed() {
  return (
    <>
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
              alt=""
              className="userImg"
            />
          </div>
          <div className="iconBox">
            <div className="icon">
              <img src="/images/kyungsuh/heart.png" alt="" />
              <img src="/images/kyungsuh/comment.svg" alt="" />
              <img
                src="/images/kyungsuh/message-solid.svg"
                alt=""
                className="messIcon"
              />
            </div>
            <div className="save">
              <img
                src="/images/kyungsuh/bookmark-solid.svg"
                alt=""
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
              <img src="/images/kyungsuh/moreicon.svg" alt="더보기" />
            </div>
          </div>
          {/* <!-- 댓글 기능 구현 --> */}
          <div className="commentInpBox">
            <form className="innerBox">
              <input
                className="inpComment"
                type="text"
                placeholder="댓글달기..."
              />
              <button className="btnSave off">게시</button>
            </form>
          </div>
        </article>
      </div>
    </>
  );
}

export default Feed;
