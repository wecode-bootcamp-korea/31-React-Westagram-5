/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './MainHwan.scss';
import Child from './Child';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList: [],
    };
  }

  getValue = event => {
    this.setState({
      value: event.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: '',
    });
  };

  addCommEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  render() {
    return (
      <>
        <div className="nav">
          <a
            className="instagramIcon"
            href="https://www.flaticon.com/free-icons/instagram"
          >
            <img
              className="left-img"
              alt="instagram"
              src="/images/jangjonghwan/instagram.png"
            />
          </a>
          <p className="instagram">instagram</p>
          <div className="search">
            <input type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="right-img">
            <a href="###">
              <img
                className="explore"
                alt="explore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </a>
            <a href="###">
              <img
                alt="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </a>
            <a href="###">
              <img
                className="profile"
                alt="profile"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </a>
          </div>
        </div>

        <div className="main-backgroundcolr">
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
                    <li className="commentList" />
                  </ul>
                  <Child comment={this.state.commentList} />
                  <input
                    onChange={this.getValue}
                    onKeyPress={this.addCommEnter}
                    className="comment"
                    type="text"
                    placeholder="댓글달기..."
                  />
                  <button className="click" onClick={this.addComment}>
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
      </>
    );
  }
}
export default Main;
