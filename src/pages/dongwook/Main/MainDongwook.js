import React /*useEffect, useState*/ from 'react';
import './MainDongwook.scss';
import Nav from '../../../components/Nav/Nav';
import Aside from '../Aside/Aside';
import Feed from '../Feed/Feed';

function MainDongwook() {
  /*  useEffect(() => {
    fetch('/data/mockDataDongWook/mockComment.json')
      .then(comment => comment.json())
      .then(comment => setComment(comment));
  }, []);*/

  //console.log(comment);

  return (
    <div className="main">
      <Nav />
      <div className="mainCont">
        <Feed />
        <Aside />
      </div>
    </div>
  );
}

export default MainDongwook;
