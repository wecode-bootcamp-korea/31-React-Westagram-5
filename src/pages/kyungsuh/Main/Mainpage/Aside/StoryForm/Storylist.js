import React from 'react';

function Storylist(props) {
  const { name, time } = props;
  return (
    <div className="storyItem">
      <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
      <div className="right">
        <span>{name}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Storylist;
