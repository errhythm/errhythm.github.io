import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: 'errhythm-gatsby-stats.firebaseapp.com',
  databaseURL: 'https://errhythm-gatsby-stats-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'errhythm-gatsby-stats',
  storageBucket: 'errhythm-gatsby-stats.appspot.com',
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
