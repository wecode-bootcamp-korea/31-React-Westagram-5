import React, { useEffect } from 'react';
import InputComment from './Comments/InputComment';

const Feeds = ({ id, userImg, userName, userComment }) => {
  return (
    <div>
      <div className="blank"></div>
      <div className="feeds">
        <div className="feeds-profile">
          <div className="main-feeds">
            <div className="main-profile-box">
              <img
                alt=""
                className="profile-pic-1"
                src="/images/Jaehyuk/jh-images/profiles/main-profile.jpeg"
              />
              <p className="user-nickname">{userName}</p>
            </div>
            <img alt="" id="picture" src={userImg} />

            <div className="comment">
              <div className="feeds-footer">
                <div className="comment-icon">
                  <div className="comment-left-icon">
                    <img
                      alt=""
                      className="icon"
                      src="/images/Jaehyuk/jh-images/icon-image/heart.png"
                    />
                    <img
                      alt=""
                      className="icon"
                      src="/images/Jaehyuk/jh-images/icon-image/comment.png"
                    />
                    <img
                      alt=""
                      className="icon"
                      src="/images/Jaehyuk/jh-images/icon-image/direct-massage.png"
                    />
                  </div>
                  <div className="comment-right-icon">
                    <img
                      alt=""
                      className="icon"
                      src="/images/Jaehyuk/jh-images/icon-image/mark.png"
                    />
                  </div>
                </div>
                <div className="comment">
                  <div>
                    <div className="likes-profile">
                      <div className="comment-profile">
                        <img
                          alt=""
                          className="comment-profile-pic"
                          src="/images/Jaehyuk/jh-images/profiles/comment-pic.jpeg"
                        />
                      </div>
                      <div className="likes">
                        <span className="font">
                          mong_dory님 외 100명이 좋아합니다
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="submit-form">
                    <div id="input-comment">
                      <div id="input-comment-view"></div>
                      <div className="input-comment-text">
                        <InputComment
                          mockComment={userComment}
                          inputName="댓글달기"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
