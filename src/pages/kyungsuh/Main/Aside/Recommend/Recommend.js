import React, { useState, useEffect } from 'react';
import RecommendList from './RecommendList';

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
            <RecommendList key={list.id} name={list.name} time={list.time} />
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
