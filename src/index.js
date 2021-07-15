import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from "redux";
import App from './App';

import './styles/styles.scss'
import './index.scss'
import 'macro-css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import rootReducer from './store/reducers/rootReducer'



ReactDOM.render(

        <Router>
            <App />
        </Router>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

