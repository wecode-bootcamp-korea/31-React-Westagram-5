import React from 'react';
import Storyitem from '../Storyitem/Storyitem';

function StoryForm() {
  return (
    <div className="storyForm">
      <div className="header">
        <span>스토리</span>
        <button>모두 보기</button>
      </div>
      <div className="storyList">
        <Storyitem />
        <Storyitem />
        <Storyitem />
        <Storyitem />
        <Storyitem />
        <Storyitem />
        <Storyitem />
      </div>
    </div>
  );
}

export default StoryForm;
