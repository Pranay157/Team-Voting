import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyDOWF8jO32dj0hXFs4ZavAonSxo-ZauzRg",
  authDomain: "team-voting-64eda.firebaseapp.com",
  databaseURL: "https://team-voting-64eda-default-rtdb.firebaseio.com",
  projectId: "team-voting-64eda",
  storageBucket: "team-voting-64eda.appspot.com",
  messagingSenderId: "180781837046",
  appId: "1:180781837046:web:31873e1f06f143b71f9ad7"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
