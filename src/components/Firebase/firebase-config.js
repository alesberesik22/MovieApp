import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBDgWhy3jb8GbCMMaKweHNTIogu1XDwt7U",
    authDomain: "watchlist-a9a50.firebaseapp.com",
    databaseURL:
      "https://watchlist-a9a50-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "watchlist-a9a50",
    storageBucket: "watchlist-a9a50.appspot.com",
    messagingSenderId: "21380823901",
    appId: "1:21380823901:web:d4042bcdb5a13f3c3d06b4",
    measurementId: "G-VNKCS7XS02",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
export default startFirebase;
