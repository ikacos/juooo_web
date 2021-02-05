import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { get, post } from './utils/http';
import api from './utils/api';

// 注意：Vue 框架是在Vue.prototype原型上绑定，而react不是在React.prototype原型上绑定，而是在Component上绑定

Component.prototype.get = get;
Component.prototype.post = post;
Component.prototype.api = api;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

