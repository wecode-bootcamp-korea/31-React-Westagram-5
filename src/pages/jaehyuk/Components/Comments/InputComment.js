import React, { useState, useEffect } from 'react';
import './InputComment.scss';

/**
 * const props = {
 *  mockComment : ...,
 *  inputName : ...
 * }
 *
 * const {mockComment, inputName} = porps
 */

function InputComment({ mockComment, inputName }) {
  const [comment, setComment] = useState('');
  const [commentArr, setcommentArr] = useState([]);
  const [mockCommentArray, setMockCommentArray] = useState();

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

  useEffect(() => {
    setMockCommentArray(mockComment);
  }, []);
  return (
    <>
      <div className="commentBox">
        <input
          id="input-text"
          name={inputName}
          placeholder={`${inputName}`.concat('..')}
          value={comment}
          onChange={onChange}
        />

        <button id="btn-submit" onClick={onHandleSubmit}>
          게시
        </button>
      </div>
      <div>
        {mockCommentArray &&
          mockCommentArray.map(list => (
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
