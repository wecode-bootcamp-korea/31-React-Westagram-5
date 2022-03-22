import React from 'react';
import Comment from './Comment';
import COMMENT_LIST from './CommentData';

function CommentList(props) {
  return (
    <div className="commentList">
      <ul>
        {COMMENT_LIST.map(commentItem => {
          return (
            <Comment
              key={commentItem.id}
              name={commentItem.userName}
              comment={commentItem.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
