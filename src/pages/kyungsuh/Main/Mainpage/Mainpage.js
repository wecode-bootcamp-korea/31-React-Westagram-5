import React from 'react';
import Feed from '../Feed/Feed';
import Aside from '../Aside/Aside';

function MainPage() {
  return (
    <main className="contMain">
      <section className="mainBox">
        <Feed />
        <Aside />
      </section>
    </main>
  );
}

export default MainPage;
