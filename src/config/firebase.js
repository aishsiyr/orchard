// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';


// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBoCx0l4AxV_HEoq5P2_J5fRFpCR9DkcL0',
    authDomain: 'portfolio-be72c.firebaseapp.com',
    projectId: 'portfolio-be72c',
    storageBucket: 'portfolio-be72c.appspot.com',
    messagingSenderId: '968231600804',
    appId: '1:968231600804:web:1ee0a4a0d1b4c50943dc31',
    measurementId: 'G-3HEVWFZ2CQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'Blog');

// Export the Firestore reference and collection reference
export { db, colRef, firebaseConfig };
