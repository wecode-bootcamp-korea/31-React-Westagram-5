import React from 'react';
import './CommentMinsu.scss';

function CommentMinsu(props) {
  console.log(props.commentInputArray);
  let commentInputArray = props.commentInputArray;
  return (
    <>
      <ul className="commentList">
        {commentInputArray.map(list => (
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
