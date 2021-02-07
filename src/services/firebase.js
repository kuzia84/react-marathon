import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_JheDgSjEyNl1RPH70m94KChdpeiBZi0",
  authDomain: "pokemon-game-c856b.firebaseapp.com",
  databaseURL: "https://pokemon-game-c856b-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-c856b",
  storageBucket: "pokemon-game-c856b.appspot.com",
  messagingSenderId: "171842444460",
  appId: "1:171842444460:web:921505ef1c3f1b5b911309",
};
firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();
export default database;
