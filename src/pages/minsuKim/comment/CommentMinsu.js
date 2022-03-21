import React from 'react';
import './CommentMinsu.scss';

function CommentMinsu(props) {
  let commentInputArray = props.commentInputArray;
  return (
    <>
      <ul className="commentList">
        {/* comment가 나타나는 부분 */}
        {commentInputArray.map((value, index) => (
          <li key={index} className="commentText">
            <div className="commentMargin">
              <span className="commentWritter">Minsu Kim</span>
              {value}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentMinsu;
