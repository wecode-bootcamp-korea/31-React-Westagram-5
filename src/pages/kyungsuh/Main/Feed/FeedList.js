import React from 'react';
import FEED_LIST from './FeedData';
import Feed from './Feed';

function FeedList() {
  return (
    <>
      {FEED_LIST.map((i, a) => {
        return <Feed key={a} />;
      })}
    </>
  );
}

export default FeedList;
