import React, { useState, useEffect } from 'react';
import FeedMinsu from '../feed/FeedMinsu';

const FeedsMinsu = props => {
  const [feedInputArray, setFeedInputArray] = useState([]);

  useEffect(() => {
    fetch('/data/mockDataMinsu/mockFeed.json')
      .then(feed => feed.json())
      .then(feed => setFeedInputArray(feed));
  }, []);

  return (
    <>
      {feedInputArray.map(feedInfo => (
        <FeedMinsu
          feedInfo={feedInfo}
          commentInputArray={props.commentInputArray}
          submitComment={props.submitComment}
          addInput={props.addInput}
          commentInputRef={props.commentInputRef}
        />
      ))}
    </>

    // {setFeedInputArray.map(feedList => (
    //   <FeedMinsu
    //     feedInfo={feedList}
    //     commentInputArray={props.commentInputArray}
    //     submitComment={props.submitComment}
    //     addInput={props.addInput}
    //     commentInputRef={props.commentInputRef}
    //   />
    // ))}
  );
};

export default FeedsMinsu;
