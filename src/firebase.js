import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAA9KosKIn9eMrAW_VUut1w4reER4ns2Bo",
  authDomain: "better-u-tack.firebaseapp.com",
  projectId: "better-u-tack",
  storageBucket: "better-u-tack.appspot.com",
  messagingSenderId: "343364736914",
  appId: "1:343364736914:web:ffeefe61bdf2e00814134b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
