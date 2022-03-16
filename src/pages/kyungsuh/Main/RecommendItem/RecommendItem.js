import React from 'react';

function RecommendItem() {
  return (
    <div className="storyItem">
      <div>
        <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
      </div>
      <div className="right">
        <span>a.orzy</span>
        <span>10분전</span>
      </div>
      <button className="follow">팔로우</button>
    </div>
  );
}

export default RecommendItem;
