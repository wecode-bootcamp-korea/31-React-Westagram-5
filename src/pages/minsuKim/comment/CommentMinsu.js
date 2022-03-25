import React from 'react';
import './CommentMinsu.scss';

function CommentMinsu(props) {
  return (
    <>
      <ul className="commentList">
        {props.commentInputArray.map(list => (
          <li key={list.id} className="commentText">
            <div className="commentMargin">
              <span className="commentWritter">{list.name}</span>
              <span className="commentText">{list.comment}</span>
              <span className="commentTime">{list.commentTime}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentMinsu;
