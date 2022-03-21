/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import './MainHwan.scss';
import Comment from './Comment';
import Nav from './Nav';

function Main() {
  const [comment, setComment] = useState('');

  const [commentList, setCommentList] = useState([]);

  const commentAdd = event => {
    event.preventDefault();
    setCommentList(commentArr => [...commentArr, comment]);
  };

  const getValue = e => {
    setComment(e.target.value);
  };

  const addCommEnter = e => {
    if (e.key === 'Enter') {
      setCommentList(commentArr => [...commentArr, comment]);
    }
  };

  return (
    <div className="main-backgroundcolr">
      <Nav />
      <main>
        <div className="main2">
          <div className="feeds">
            <img
              className="feedProfile"
              alt="profile"
              src="/images/jangjonghwan/profile3.png"
            />
            <span className="feedId">vaekheezung</span>
            <br />
            <img
              className="feedImage"
              alt="feed"
              src="/images/jangjonghwan/feeds.jpg"
            />
            <div className="likebutton">
              <img
                className="fa-thumbs-up"
                alt="thumsUp"
                src="/images/jangjonghwan/fa-regular fa-thumbs-up.png"
              />
              <img
                className="fa-comment"
                alt="commnet"
                src="/images/jangjonghwan/fa-regular fa-comment.png"
              />
              <img
                className="arrow"
                alt="arrow"
                src="/images/jangjonghwan/fa-solid fa-arrow-up-from-bracket.png"
              />
              <img
                className="bookMark"
                alt="bookMark"
                src="/images/jangjonghwan/fa-regular fa-bookmark.png"
              />
            </div>
            <div className="input">
              <ul className="commentBox">
                <span className="clickLike">
                  aineworld님 외 10명이 좋아합니다.
                </span>
                <li className="commentList">
                  {commentList.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                  ))}
                </li>
              </ul>
              <input
                onKeyPress={addCommEnter}
                onChange={getValue}
                className="comment"
                type="text"
                placeholder="댓글달기..."
              />
              <button onClick={commentAdd} className="click">
                게시
              </button>
            </div>
          </div>
          <div className="main-right">
            <div className="profile">
              <img alt="profile" src="/images/jangjonghwan/profile.png" />
              <p className="myprofile">wkdwhdghks</p>
              <p className="myname">장종환</p>
            </div>
            <div className="story">
              <table className="story-table">
                <th colspan="2" className="story-text">
                  스토리
                </th>
                <th />
                <th>
                  <p className="everyone">모두보기</p>
                </th>
                <tr>
                  <td width="20px">
                    <img
                      className="profile2"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="profileId">
                    no.1boy_<p>16분전</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <img
                      className="profile2"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="profileId">
                    _dear__u<p>3시간전</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <img
                      className="profile2"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="profileId">
                    3itter_day<p>20시간전</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <img
                      className="profile2"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="profileId">
                    ch__jae<p>10시간전</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <img
                      className="profile2"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="profileId">
                    k_eun97<p>23분전</p>
                  </td>
                  <td />
                </tr>
              </table>
            </div>

            <div className="recommend">
              <table className="recommend-table">
                <th width="100px" colspan="2">
                  <p className="member">회원님을 위한 추천</p>
                </th>
                <th width="100px">
                  <p className="everyone">모두 보기</p>
                </th>
                <tr>
                  <td>
                    <img
                      className="recommendProfile"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="recommendId">
                    js_______jeju22
                    <br />
                    <p>no.1boy_님 외 1명이 팔로우합니다</p>
                  </td>
                  <td className="follow">팔로우</td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="recommendProfile"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="recommendId">
                    s_d_0327
                    <br />
                    <p>seok2_님 외 8명이 팔로우합니다</p>
                  </td>
                  <td className="follow">팔로우</td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="recommendProfile"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="recommendId">
                    pocha.kim
                    <br />
                    <p>회원님을 위한 추천</p>
                  </td>
                  <td className="follow">팔로우</td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="recommendProfile"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="recommendId">
                    m1ng_goo
                    <br />
                    <p>jjeon9_ss님 외 12명이 팔로우합니다</p>
                  </td>
                  <td className="follow">팔로우</td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="recommendProfile"
                      alt="profile"
                      src="/images/jangjonghwan/profile2.png"
                    />
                  </td>
                  <td className="recommendId">
                    mxxz__oow
                    <br />
                    <p>회원님을 위한 추천</p>
                  </td>
                  <td className="follow">팔로우</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
