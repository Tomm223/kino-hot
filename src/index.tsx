import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css'
import './styles/global.scss'

import { Provider } from 'react-redux'
import { store } from './store';

import './firebase'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>



);

/*
https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA878BD8jF8W3wfmGdMQekVbSw81yOQwfc",
  authDomain: "kinohotreact.firebaseapp.com",
  projectId: "kinohotreact",
  storageBucket: "kinohotreact.appspot.com",
  messagingSenderId: "996898930847",
  appId: "1:996898930847:web:cefec943095278bff6a2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}


*/