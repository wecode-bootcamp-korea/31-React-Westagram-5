import { useState } from 'react';
import React from 'react';
import './CommentMinsu.scss';

function CommentMinsu() {
  // 댓글을 저장할 state를 생성한다.
  const [commentInput, setCommentInput] = useState('');

  //댓글이 저장되는 array state를 생성한다.
  const [commentInputArray, setCommentInputArray] = useState([]);

  //input에 onChange Event가 발생할 때 마다 value를 commnetInput에 저장해준다.
  const addInput = event => {
    setCommentInput(event.target.value);
  };

  //form이 submit하면 실행되는 함수
  const submitComment = event => {
    // preventDefault로 새로고침 방지
    event.preventDefault();
    if (commentInput.length === 0) {
      alert('Please Enter Commnet');
      return;
    }
    setCommentInputArray(commentValueList => [
      commentInput,
      ...commentValueList,
    ]);
    //댓글창 빈칸으로
    setCommentInput('');
  };

  const uploadInput = comment => {
    const comments = [];
    comments.push(comment);
  };

  return (
    <>
      <div className="commentWrapper">
        <div className="commentIcon">
          <div>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-comment"></i>
            <i className="fa-solid fa-envelope-open"></i>
          </div>
          <i className="fa-solid fa-bookmark"></i>
        </div>

        <div className="commentLike">
          <i className="fa-solid fa-circle-user"></i>
          <p>
            <span className="userName">Runner.jay</span>님 외 20명이 좋아합니다.
          </p>
        </div>

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
      </div>

      <form className="comment" onSubmit={submitComment}>
        <input
          id="commentInput"
          onChange={addInput}
          type="text"
          value={commentInput}
          placeholder="댓글달기..."
        />
        <button id="submit">게시</button>
      </form>
    </>
  );
}

export default CommentMinsu;
