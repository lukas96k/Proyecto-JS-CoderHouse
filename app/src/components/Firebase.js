import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBEBjIK6RL2BiMEEmSJvdfn2GPWsX8ubt4",
    authDomain: "proyecto-rjs.firebaseapp.com",
    projectId: "proyecto-rjs",
    storageBucket: "proyecto-rjs.appspot.com",
    messagingSenderId: "286389037556",
    appId: "1:286389037556:web:5682ca486f60bb451931a1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)