import React, { useState, useEffect } from 'react';
import Feeds from './Feed/Feeds';
import Aside from './Aside/Aside';

function MainPage() {
  const [feedArr, setFeedArr] = useState([]);

  const fetchData = () => {
    async function fetchAndSetFeed() {
      const dataResponse = await fetch('/data/kyungsuh/feedData.json');
      const dataJson = await dataResponse.json();
      setFeedArr(dataJson);
    }
    fetchAndSetFeed();
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <main className="contMain">
      <section className="mainBox">
        <div>
          {feedArr.map(list => {
            return <Feeds key={list.id} {...list} />;
          })}
        </div>
        <Aside />
      </section>
    </main>
  );
}

export default MainPage;
