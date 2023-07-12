
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBj1zjoljZdh0zedrNaR8OkkHVeceaubiM",
  authDomain: "netflix-project-92ab1.firebaseapp.com",
  projectId: "netflix-project-92ab1",
  storageBucket: "netflix-project-92ab1.appspot.com",
  messagingSenderId: "469922414477",
  appId: "1:469922414477:web:5288c7659b02b7e29947c4",
  measurementId: "G-VNGCFCSQT7"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)