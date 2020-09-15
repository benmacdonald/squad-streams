import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyB_cWTAGu5IZ0mixqnP1r1Sg8_gBcuUWWs",
  authDomain: "squad-streams.firebaseapp.com",
  databaseURL: "https://squad-streams.firebaseio.com",
  projectId: "squad-streams",
  storageBucket: "squad-streams.appspot.com",
  messagingSenderId: "337834975285",
  appId: "1:337834975285:web:0da98c4f7151f30c1ad17c",
  measurementId: "G-HBYTYDKEXK",
};

export const setupFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.performance();
};
