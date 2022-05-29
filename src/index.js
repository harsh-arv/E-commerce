import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/Store'
import App from './App';
// npm i popper.js
// C:\Users\Harsh kartik\my-app\node_modules\popper.js\dist\popper.min.js
//  import '../node_modules/popper.js/dist/popper.min.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
   
    <Provider store={store}>
    <App />
    </Provider>

);

