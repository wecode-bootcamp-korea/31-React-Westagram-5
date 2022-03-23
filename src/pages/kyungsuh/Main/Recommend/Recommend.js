import React, { useState, useEffect } from 'react';

function Recommend() {
  const [Recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch('/data/kyungsuh/asideData.json')
      .then(res => res.json())
      .then(data => setRecommend(data));
  }, []);

  return (
    <div className="recomBox">
      <div className="header">
        <span>회원님을 위한 추천</span>
        <button className="btn">모두 보기</button>
      </div>
      <div className="storyList">
        {Recommend.map(list => {
          return (
            <div className="storyItem" key={list.id}>
              <div>
                <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
              </div>
              <div className="right">
                <span>{list.name}</span>
                <span>{list.time}</span>
              </div>
              <button className="follow">팔로우</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
