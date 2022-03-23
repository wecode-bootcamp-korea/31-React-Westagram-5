import React, { useState } from 'react';
import './InputComment.scss';

function InputComment(props) {
  const [comment, setComment] = useState('');
  const [commentArr, setcommentArr] = useState([]);
  const onChange = event => setComment(event.target.value);
  const onHandleSubmit = () => {
    if (comment.length > 0) {
      if (commentArr.length === 0) {
        setcommentArr([comment]);
      } else {
        setcommentArr([...commentArr, comment]);
      }
    }
  };

  let mockCommentArray = props.mockComment;
  return (
    <>
      <div className="commentBox">
        <input
          id="input-text"
          name={props.inputName}
          placeholder={`${props.inputName}`.concat('..')}
          value={comment}
          onChange={onChange}
        />

        <button id="btn-submit" onClick={onHandleSubmit}>
          게시
        </button>
      </div>
      <div>
        {mockCommentArray.map(list => (
          <li key={list.id}>
            <span>{list.name}</span>
            <span>{list.contents}</span>
          </li>
        ))}
      </div>
    </>
  );
}

export default InputComment;
