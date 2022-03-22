import React from 'react';
import Comment from './Comment';
import COMMENT_LIST from './CommentData';

function CommentList() {
  return (
    <div className="commentList">
      <p style={{ padding: '10px' }}>Comment</p>
      <ul>
        {COMMENT_LIST.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
