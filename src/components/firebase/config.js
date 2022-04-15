import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClvLBPAxQAOv1am1Q4bM5WPG3JWraKiOs",
  authDomain: "alienattack-7b1d8.firebaseapp.com",
  projectId: "alienattack-7b1d8",
  storageBucket: "alienattack-7b1d8.appspot.com",
  messagingSenderId: "450644228676",
  appId: "1:450644228676:web:cbcff6f6a75fd49e4ada11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)