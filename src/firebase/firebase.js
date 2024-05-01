import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEYfAWEexiWpN5jGbjtjrAFNQrgZ773nI",
  authDomain: "e-project-website.firebaseapp.com",
  projectId: "e-project-website",
  storageBucket: "e-project-website.appspot.com",
  messagingSenderId: "662576643560",
  appId: "1:662576643560:web:efb9638b65724d3753385d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
