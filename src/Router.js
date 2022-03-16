import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav"

//종환 
import LoginHwan from "./pages/jangjonghwan/Login/Login";
import MainHwan from "./pages/jangjonghwan/Main/Main";

//민수
import LoginMinsu from "./pages/minsuKim/Login/Login";
import MainMinsu from "./pages/minsuKim/Main/Main";

//재혁
import LoginJaehyuk from "./pages/jaehyuk/Login/Login";
import MainJaehyuk from "./pages/jaehyuk/Main/Main";

//경서
import LoginKyungsuh from "./pages/kyungsuh/Login/Login";
import MainKyungsuh from "./pages/kyungsuh/Main/Main";

//동욱
import LoginDongwook from "./pages/dongwook/Login/Login";
import MainDongwook from "./pages/dongwook/Main/Main";


function Router() {
    return (
        <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path='/login-hwan' element={<LoginHwan />}/>
        <Route path='/Main-hwan' element={<MainHwan />}/>

        <Route path='/login-hwan' element={<LoginMinsu />}/>
        <Route path='/Main-hwan' element={<MainMinsu />}/>

        <Route path='/login-hwan' element={<LoginJaehyuk />}/>
        <Route path='/Main-hwan' element={<MainJaehyuk />}/>

        <Route path='/login-hwan' element={<LoginKyungsuh />}/>
        <Route path='/Main-hwan' element={<MainKyungsuh />}/>

        <Route path='/login-hwan' element={<LoginDongwook />}/>
        <Route path='/Main-hwan' element={<MainDongwook />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;




