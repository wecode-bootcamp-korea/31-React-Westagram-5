import React from 'react';
import CommentMinsu from '../comment/CommentMinsu';
import './FeedMinsu.scss';

const FeedMinsu = props => {
  return (
    <li className="feedMinsu" key={props.feedInfo.id}>
      <article className="feedMinsuArticle">
        <section className="feed">
          <div className="feedHeader">
            <div className="feedAccountInfo">
              <img
                className="feedAvatarImage"
                alt="profile_image"
                src={props.feedInfo.profileImage}
              />
              <div className="feedHeaderName">
                <p>{props.feedInfo.accountID}</p>
                <span>{props.feedInfo.feedInformation}</span>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="feedImage">
            <img src={props.feedInfo.feedImage} />
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
              <span>좋아요 {props.feedInfo.likeNumber}개</span>
            </div>

            <div className="feedTime">
              <span>{props.feedInfo.feedTime}</span>
            </div>

            <div className="feedText">
              <span>{props.feedInfo.accountID}</span>
              <p>{props.feedInfo.feedText}</p>
            </div>

            <div className="commentLike">
              <i className="fa-solid fa-circle-user fa-lg"></i>
              <p>
                <span className="userName">{props.feedInfo.likeId}</span>님 외
                {props.feedInfo.likeNumber}명이 좋아합니다.
              </p>
            </div>
            <CommentMinsu commentInputArray={props.commentInputArray} />
          </div>

          <form className="comment" onSubmit={props.submitComment}>
            <input
              id="commentInput"
              onChange={props.addInput}
              type="text"
              placeholder="댓글달기..."
              ref={props.commentInputRef}
            />
            <button id="submit">게시</button>
          </form>
        </section>
      </article>
    </li>
  );
};

export default FeedMinsu;
