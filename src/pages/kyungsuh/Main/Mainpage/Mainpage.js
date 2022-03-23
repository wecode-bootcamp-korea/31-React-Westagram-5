import React from 'react';
import Feed from '../Feed/Feed';
import Aside from '../Aside/Aside';
import FeedList from '../Feed/FeedList';

function MainPage() {
  return (
    <main className="contMain">
      <section className="mainBox">
        <div>
          <Feed />
        </div>
        <Aside />
      </section>
    </main>
  );
}

export default MainPage;
