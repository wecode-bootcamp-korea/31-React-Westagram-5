import { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideMinsu from '../aside/AsideMinsu';
import FeedsMinsu from '../feeds/FeedsMinsu';
import './MainMinsu.scss';

function MainMinsu() {
  const [commentInput, setCommentInput] = useState({});
  const [commentInputArray, setCommentInputArray] = useState([]);
  const [feedInputArray, setFeedInputArray] = useState([]);
  const commentInputRef = useRef();

  const addInput = event => {
    setCommentInput({
      id: Date(),
      name: 'minsu',
      comment: event.target.value,
      commentTime: '20분전',
    });
  };
  const submitComment = event => {
    event.preventDefault();
    if (commentInput.length === 0) {
      alert('Please Enter Commnet');
      return;
    }
    setCommentInputArray(commentValueList => [
      commentInput,
      ...commentValueList,
    ]);
    commentInputRef.current.value = '';
  };

  useEffect(() => {
    fetch('/data/mockDataMinsu/mockComment.json')
      .then(comment => comment.json())
      .then(comment => setCommentInputArray(comment));
  }, []);

  useEffect(() => {
    fetch('/data/mockDataMinsu/mockFeed.json')
      .then(feed => feed.json())
      .then(feed => setFeedInputArray(feed));
  }, []);

  return (
    <>
      <Nav />
      <main className="mainContainer">
        <div>
          <FeedsMinsu
            feedInputArray={feedInputArray}
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
