import React from 'react';
import ReactDOM from 'react-dom/client';
import { SITE } from './data.js';
import App from './App.jsx';
import './index.css';

// 테마·스타일 변형·강조색은 data.js의 SITE 한 곳에서 결정
document.body.dataset.theme = SITE.theme;
document.body.dataset.variant = SITE.variant;
document.documentElement.style.setProperty('--accent', SITE.accent);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
