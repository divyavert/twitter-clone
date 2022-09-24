import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVBYjxrnF6IgzOFpATabnChEif1_49KkE",
  authDomain: "twitter-clone-cb20b.firebaseapp.com",
  projectId: "twitter-clone-cb20b",
  storageBucket: "twitter-clone-cb20b.appspot.com",
  messagingSenderId: "1058646646702",
  appId: "1:1058646646702:web:9a983d3bf5d05aa108723f",
  measurementId: "G-WQ0156J65F"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;