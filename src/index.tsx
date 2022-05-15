import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css'
import './styles/global.scss'

import { Provider } from 'react-redux'
import { store } from './store';
//import { store } from "./store/index"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>



);

