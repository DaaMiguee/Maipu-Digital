import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQvUC9iGj6aUf64F5Of3zh8lnyUscD1IU",
  authDomain: "maipudigital-97ad5.firebaseapp.com",
  projectId: "maipudigital-97ad5",
  storageBucket: "maipudigital-97ad5.appspot.com",
  messagingSenderId: "816723614473",
  appId: "1:816723614473:web:6926c1daa7084fddd2d1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
