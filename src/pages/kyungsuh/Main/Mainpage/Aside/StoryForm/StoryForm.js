import React, { useState, useEffect } from 'react';
import Storylist from './Storylist';

function StoryForm() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch('/data/kyungsuh/asideData.json')
      .then(res => res.json())
      .then(data => setStory(data));
  }, []);

  return (
    <div className="storyForm">
      <div className="header">
        <span>스토리</span>
        <button>모두 보기</button>
      </div>
      <div className="storyList">
        {story &&
          story.map(list => {
            return (
              <Storylist key={list.id} name={list.name} time={list.time} />
            );
          })}
      </div>
    </div>
  );
}

export default StoryForm;
