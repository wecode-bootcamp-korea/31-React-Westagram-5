import { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideMinsu from '../aside/AsideMinsu';
import CommentMinsu from '../comment/CommentMinsu';
import FeedMinsu from '../feed/FeedMinsu';
import FeedsMinsu from '../feeds/FeedsMinsu';
import './MainMinsu.scss';

function MainMinsu() {
  // 댓글을 저장할 state를 생성한다.
  const [commentInput, setCommentInput] = useState({});

  //댓글이 저장되는 array state를 생성한다.
  const [commentInputArray, setCommentInputArray] = useState([]);
  const commentInputRef = useRef();
  //input에 onChange Event가 발생할 때 마다 value를 commnetInput에 저장해준다.
  const addInput = event => {
    setCommentInput({
      id: Date(),
      name: 'minsu',
      comment: event.target.value,
      commentTime: '20분전',
    });
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
    commentInputRef.current.value = '';
  };

  useEffect(() => {
    fetch('/data/mockDataMinsu/mockComment.json')
      .then(comment => comment.json())
      .then(comment => setCommentInputArray(comment));
  }, []);

  return (
    <>
      <Nav />
      <main className="mainContainer">
        <div>
          <FeedsMinsu
            commentInputArray={commentInputArray}
            submitComment={submitComment}
            addInput={addInput}
            commentInputRef={commentInputRef}
          />
        </div>
        <AsideMinsu />
      </main>

      <script src="js/main.js"></script>
    </>
  );
}

export default MainMinsu;
