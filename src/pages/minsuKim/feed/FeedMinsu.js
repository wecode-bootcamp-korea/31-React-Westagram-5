import React from 'react';
import CommentMinsu from '../comment/CommentMinsu';
import './FeedMinsu.scss';

const FeedMinsu = props => {
  return (
    <article>
      <section className="feed">
        <div className="feedHeader">
          <div>
            <img
              alt="profile_image"
              src="/images/minsuKim/baby-shiba-inu.jpeg"
            />
            <div className="feedHeaderName">
              <p>Shiba_Inu</p>
              <span>반포한강공원</span>
            </div>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="feedImage">
          <img src="/images/minsuKim/han-river.jpg" />
        </div>
        <div className="commentWrapper">
          <div className="commentIcon">
            <div>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-envelope-open"></i>
            </div>
            <i className="fa-solid fa-bookmark"></i>
          </div>

          <div className="commentLikeCount">
            <span>좋아요 25개</span>
          </div>

          <div className="commentLike">
            <i className="fa-solid fa-circle-user fa-lg"></i>
            <p>
              <span className="userName">jjangu.luv</span>님 외 20명이
              좋아합니다.
            </p>
          </div>
          <CommentMinsu commentInputArray={props.commentInputArray} />
        </div>

        <form className="comment" onSubmit={props.submitComment}>
          <input
            id="commentInput"
            onChange={props.addInput}
            type="text"
            // value={commentInput}
            placeholder="댓글달기..."
            ref={props.commentInputRef}
          />
          <button id="submit">게시</button>
        </form>
      </section>
    </article>
  );
};

export default FeedMinsu;
