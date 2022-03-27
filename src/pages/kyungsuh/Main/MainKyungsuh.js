import React from 'react';
// component
import MainPage from './Mainpage/Mainpage';
import Nav from '../../../components/Nav/Nav';
import './MainKyungsuh.scss';

function Main() {
  return (
    <section className="cont">
      <Nav />
      <MainPage />
    </section>
  );
}

export default Main;
