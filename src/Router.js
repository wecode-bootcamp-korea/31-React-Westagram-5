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
        <Route path="/hwan/login" element={<LoginHwan />} />
        <Route path="/hwan/main" element={<MainHwan />} />

        <Route path="/minsu/login" element={<LoginMinsu />} />
        <Route path="/minsu/main" element={<MainMinsu />} />

        <Route path="/jaehyuk/login" element={<LoginJaehyuk />} />
        <Route path="/jaehyuk/main" element={<MainJaehyuk />} />

        <Route path="/suh/login" element={<LoginKyungsuh />} />
        <Route path="/suh/main" element={<MainKyungsuh />} />

        <Route path="/dong/login" element={<LoginDongwook />} />
        <Route path="/dong/main" element={<MainDongwook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
