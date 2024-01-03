import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI-3zNb_1kB6zQhtJqdAcQmSRdIhLalvI",
  authDomain: "portfolio-9a0ae.firebaseapp.com",
  projectId: "portfolio-9a0ae",
  storageBucket: "portfolio-9a0ae.appspot.com",
  messagingSenderId: "1031509217375",
  appId: "1:1031509217375:web:2415b304ede769ca738bea",
  measurementId: "G-4MYB9WXEH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const store = getStorage(app);
export { analytics, db, store };
