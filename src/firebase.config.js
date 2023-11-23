import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVupH7YlslUl6yIzZoQ6Bu0c_npQtXyX8",
  authDomain: "my-first-project-with-fi-39e39.firebaseapp.com",
  projectId: "my-first-project-with-fi-39e39",
  storageBucket: "my-first-project-with-fi-39e39.appspot.com",
  messagingSenderId: "992190930222",
  appId: "1:992190930222:web:5cf75ee4edaf4f9a476ebf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
