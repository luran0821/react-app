import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from 'react-redux';
import './index.css';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



import store from './store'
import Router from './router'


ReactDOM.render(
    
    <Provider store ={store}>
        <Router />       
    </Provider> 
    
    , document.getElementById('root'));


