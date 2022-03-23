import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComment from '../Components/Comments/InputComment';
import './MainJaehyuk.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../jaehyuk/Components/Feeds';

/**
 * 1. wrtie comments
 * 2. validation comments
 * 3. pass -> array.push(comments)
 * 4. array.map() -> comments
 */

/**
 * 1. get mockdata
 * 2. inject feeds data
 * 3. feed -> comment inject -> inputComponent
 */

function Main() {
  const [mockArray, setMockArray] = useState();

  useEffect(() => {
    fetch('/data/feedsData.json')
      .then(res => res.json())
      .then(res => setMockArray(res));
  }, []);

  return (
    <div className="root-container">
      <Nav />
      <Feeds />
      {/* {mockArray && mockArray.map((mock, index) => {})} */}
      <div className="main-right">
        <div className="right-profile">
          <div className="right-profile-id">
            <div className="child-id">
              <img
                alt=""
                className="right-profile-pic"
                src="/images/Jaehyuk/jh-images/profiles/child.jpg"
              />
              <span className="user-nickname">mong_dory</span>
              <br />
            </div>
          </div>
        </div>
        <div className="story-box">
          <div className="story-box-header">
            <div className="story-add-box">
              <div className="story-title">
                <span className="story-title">스토리</span>
              </div>
              <div className="see-more-button">
                <button className="add-more-button">모두 보기</button>
              </div>
            </div>
            <div className="story-profile-box">
              <div className="story-profile">
                <img
                  alt=""
                  className="story-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/story-pic-1.jpeg"
                />
                <p>
                  <span className="user-nickname">Jaehyukss</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="story-profile">
                <img
                  alt=""
                  className="story-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/story-pic-2.jpeg"
                />
                <p>
                  <span className="user-nickname">yeony95</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="story-profile">
                <img
                  alt=""
                  className="story-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/story-pic-3.jpeg"
                />
                <p>
                  <span className="user-nickname">doraangs000</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="story-profile">
                <img
                  alt=""
                  className="story-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/story-pic-4.jpeg"
                />
                <p>
                  <span className="user-nickname">seeeni</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="recommand-box">
          <div className="recommand-box-header">
            <div className="recommand-add-box">
              <div className="recommand-title">
                <span className="recommand-title">회원님을 위한 추천</span>
              </div>
              <div className="see-more-button">
                <button className="add-more-button">모두 보기</button>
              </div>
            </div>
            <div className="recommand-profile-box">
              <div className="recommand-profile">
                <img
                  alt=""
                  className="recommand-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/recommand-1.jpeg"
                />
                <p>
                  <span className="user-nickname">Jaehyuksssss</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="recommand-profile">
                <img
                  alt=""
                  className="recommand-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/recommand-2.jpeg"
                />
                <p>
                  <span className="user-nickname">yeony95</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="recommand-profile">
                <img
                  alt=""
                  className="recommand-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/recommand-3.jpeg"
                />
                <p>
                  <span className="user-nickname">doraangs000</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
              <div className="recommand-profile">
                <img
                  alt=""
                  className="story-profile-pic"
                  src="/images/Jaehyuk/jh-images/profiles/recommand-4.jpeg"
                />
                <p>
                  <span className="user-nickname">seeeni</span>
                  <span className="recommand-user">회원님을 위한 추천</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
