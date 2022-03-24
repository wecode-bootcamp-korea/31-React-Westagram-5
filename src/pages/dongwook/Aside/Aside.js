import React from 'react';
import './Aside.scss';

import { FaRegUserCircle } from 'react-icons/fa';

function Aside() {
  return (
    <aside className="aside">
      <div className="client">
        <i className="fa-solid fa-circle-user" />
        <FaRegUserCircle className="faCircleUser" />
        <p>DongWook</p>
      </div>
      <div className="storyForm">
        <div className="storyTitle">
          <div className="storyLetter">스토리</div>
          <div className="storyAll">모두 보기</div>
        </div>

        <div className="friends">
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Curry</p>
          </div>
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Derozan</p>
          </div>
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Doncic</p>
          </div>
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Harden</p>
          </div>
        </div>
      </div>

      <div className="recommendForm">
        <div className="recommendTitle">
          <div className="forClient">회원님을 위한 추천</div>
          <div className="viewOur">모두 보기</div>
        </div>
        <div className="recommendPeople">
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Bill</p>
          </div>
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Green</p>
          </div>
          <div className="friendsName">
            <FaRegUserCircle className="faCircleUser" />
            <p>Thompson</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
