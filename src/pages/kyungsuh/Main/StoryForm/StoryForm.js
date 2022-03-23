import React, { useState, useEffect } from 'react';

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
              <div className="storyItem" key={list.id}>
                <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
                <div className="right">
                  <span>{list.name}</span>
                  <span>{list.time}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default StoryForm;
