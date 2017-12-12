import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyBHZNruWv1LJcd0w7U2TdUgQlJCZ_ubY50",
    authDomain: "pseudogram-6a699.firebaseapp.com",
    databaseURL: "https://pseudogram-6a699.firebaseio.com",
    projectId: "pseudogram-6a699",
    storageBucket: "pseudogram-6a699.appspot.com",
    messagingSenderId: "693399477902"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
