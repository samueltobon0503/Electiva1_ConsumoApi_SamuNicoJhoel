import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HomeComponent } from './components/Home.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeComponent></HomeComponent>
  </React.StrictMode>
);

