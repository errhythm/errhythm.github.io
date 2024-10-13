import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBnve-GV2W77GgG2uPLkV7pYI7pl7JaYp0',
  authDomain: 'errhythm-gatsby-stats.firebaseapp.com',
  databaseURL: 'https://errhythm-gatsby-stats-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'errhythm-gatsby-stats',
  storageBucket: 'errhythm-gatsby-stats.appspot.com',
  messagingSenderId: '815067165388',
  appId: '1:815067165388:web:950a3c92e5ea1c89230869',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
