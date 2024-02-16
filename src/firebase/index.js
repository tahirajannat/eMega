// firebase/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCDXX6vmxfrFUP6RD5eygiKrrcZSxscx7k',
    authDomain: 'pinklilies-6e051.firebaseapp.com',
    projectId: 'pinklilies-6e051',
    storageBucket: 'pinklilies-6e051.appspot.com',
    messagingSenderId: '526965430908',
    appId: '1:526965430908:web:0f3bddad9645cbed95c7f9',
    measurementId: 'G-TT4XP4PP1J',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
// Firebase storage reference
