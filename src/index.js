import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Home />
   
  </BrowserRouter>
);


