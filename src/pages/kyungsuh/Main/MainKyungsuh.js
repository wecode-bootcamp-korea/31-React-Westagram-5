import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// component
import MainPage from './Mainpage/Mainpage';
import Nav from '../../../components/Nav/Nav';
import styles from './MainKyungsuh.scss';

function Main() {
  return (
    <section className="cont">
      <Nav />
      <MainPage />
    </section>
  );
}

export default Main;
