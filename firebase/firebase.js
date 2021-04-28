import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe_xKyK36niLcicW_EyxzQOwMMROkY9rI",
  authDomain: "black-balancer-310707.firebaseapp.com",
  databaseURL:
    "https://black-balancer-310707-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "black-balancer-310707",
  storageBucket: "black-balancer-310707.appspot.com",
  messagingSenderId: "400963345387",
  appId: "1:400963345387:web:ee163500057d76a4cd97ae",
};

// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DATABASE_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
