import React, { useState, useEffect } from 'react';
import FeedMinsu from '../feed/FeedMinsu';

const FeedsMinsu = props => {
  return (
    <>
      {props.feedInputArray.map(feedInfo => (
        <FeedMinsu
          feedInfo={feedInfo}
          commentInputArray={props.commentInputArray}
          submitComment={props.submitComment}
          addInput={props.addInput}
          commentInputRef={props.commentInputRef}
        />
      ))}
    </>
  );
};

export default FeedsMinsu;
