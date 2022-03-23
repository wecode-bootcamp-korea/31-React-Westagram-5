import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Feed from '../Main/Feed';
import MainRight from './MainRight';
import './MainHwan.scss';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/jangjonghwan/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <div className="mainWindow">
          {feed.map(feedData => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Feed comment={feedData.comment} />
            );
          })}
          <MainRight />
        </div>
      </main>
    </div>
  );
}
export default Main;
