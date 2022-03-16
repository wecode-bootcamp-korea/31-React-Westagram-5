import React from 'react';
import RecommendItem from '../RecommendItem/RecommendItem';

function Recommend() {
  return (
    <div className="recomBox">
      <div className="header">
        <span>회원님을 위한 추천</span>
        <button className="btn">모두 보기</button>
      </div>
      <div className="storyList">
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
      </div>
    </div>
  );
}

export default Recommend;
