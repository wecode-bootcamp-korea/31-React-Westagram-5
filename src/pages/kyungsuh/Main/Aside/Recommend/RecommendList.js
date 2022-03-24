import React from 'react';

const RecommendList = props => {
  const { name, time } = props;
  return (
    <div className="storyItem">
      <div>
        <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
      </div>
      <div className="right">
        <span>{name}</span>
        <span>{time}</span>
      </div>
      <button className="follow">팔로우</button>
    </div>
  );
};

export default RecommendList;
