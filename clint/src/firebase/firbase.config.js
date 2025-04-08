// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCv_sEhAnQTkapjwyzk04lURt2thfBycnU',
  authDomain: 'fir-750e1.firebaseapp.com',
  projectId: 'fir-750e1',
  storageBucket: 'fir-750e1.firebasestorage.app',
  messagingSenderId: '859743147536',
  appId: '1:859743147536:web:e3c57404b4ed5dbb85dc95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
