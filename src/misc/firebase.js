import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyDC-5ZUWwAok3e8R0FvniIqTwny4LUOPjw",
  authDomain: "chat-web-app-d6247.firebaseapp.com",
  databaseURL: "https://chat-web-app-d6247-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-d6247",
  storageBucket: "chat-web-app-d6247.appspot.com",
  messagingSenderId: "157577682450",
  appId: "1:157577682450:web:9b58fd6e844d2449fdc2cb"
};
  

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
