import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//종환
import LoginHwan from './pages/jangjonghwan/Login/LoginHwan';
import MainHwan from './pages/jangjonghwan/Main/MainHwan';

//민수
import LoginMinsu from './pages/minsuKim/Login/LoginMinsu';
import MainMinsu from './pages/minsuKim/Main/MainMinsu';

//재혁
import LoginJaehyuk from './pages/jaehyuk/Login/LoginJaehyuk';
import MainJaehyuk from './pages/jaehyuk/Main/MainJaehyuk';

//경서
import LoginKyungsuh from './pages/kyungsuh/Login/LoginKyungsuh';
import MainKyungsuh from './pages/kyungsuh/Main/MainKyungsuh';

//동욱
import LoginDongwook from './pages/dongwook/Login/LoginDongwook';
import MainDongwook from './pages/dongwook/Main/MainDongwook';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hwan" element={<LoginHwan />} />
        <Route path="/Main-hwan" element={<MainHwan />} />

        <Route path="/login-hwan" element={<LoginMinsu />} />
        <Route path="/Main-hwan" element={<MainMinsu />} />

        <Route path="/login-hwan" element={<LoginJaehyuk />} />
        <Route path="/Main-hwan" element={<MainJaehyuk />} />

        <Route path="/login-hwan" element={<LoginKyungsuh />} />
        <Route path="/Main-hwan" element={<MainKyungsuh />} />

        <Route path="/login-hwan" element={<LoginDongwook />} />
        <Route path="/Main-hwan" element={<MainDongwook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
