import React from 'react';
import StoryForm from './StoryForm/StoryForm';
import Recommend from './Recommend/Recommend';
import Footer from './Footer/Footer';

function Aside() {
  return (
    <aside className="aside">
      <div className="myProfile">
        <img src="/images/kyungsuh/basic-profile-img.png" alt="" />
        <span>a.orazy_sudnics</span>
      </div>
      <StoryForm />
      <Recommend />
      <Footer />
    </aside>
  );
}

export default Aside;
