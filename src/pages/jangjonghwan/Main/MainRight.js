import React from 'react';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main-right">
      <div className="profile">
        <img alt="profile" src="/images/jangjonghwan/profile.png" />
        <p className="myprofile">wkdwhdghks</p>
        <p className="myname">장종환</p>
      </div>
      <div className="story">
        <table className="story-table">
          <th colspan="2" className="story-user">
            스토리
          </th>
          <th />
          <th>
            <p className="everyone">모두보기</p>
          </th>
          <tr>
            <td className="uploadedTime">
              <img
                className="storyProfile"
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
                className="storyProfile"
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
                className="storyProfile"
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
                className="storyProfile"
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
                className="storyProfile"
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
  );
}
export default MainRight;
