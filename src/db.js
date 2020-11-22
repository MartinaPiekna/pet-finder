import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJiOxHuDPq_5Z9NpUgwgWm5EQS14zbAe0',
  authDomain: 'petfinder-296415.firebaseapp.com',
  databaseURL: 'https://petfinder-296415.firebaseio.com',
  projectId: 'petfinder-296415',
  storageBucket: 'petfinder-296415.appspot.com',
  messagingSenderId: '689103731428',
  appId: '1:689103731428:web:caa7df0aba134d0c630af1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
