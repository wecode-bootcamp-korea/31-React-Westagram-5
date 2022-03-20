import React, { useState } from 'react';
import './input.comment.scss';
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
        {commentArr.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </>
  );
}

export default InputComment;
