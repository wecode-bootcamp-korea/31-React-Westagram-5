import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
// fontawesome 추가
import '@fortawesome/fontawesome-free/js/all.js';
// scss추가
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(<Router />, document.getElementById('root'));
