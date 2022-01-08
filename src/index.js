import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'
import AppRedux from "./containers/AppRedux";

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root')
);
