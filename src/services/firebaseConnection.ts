
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD6AfTKMALL6vmNSxmfGASkHif5PC6gxT0",
  authDomain: "webcarros-e0b9e.firebaseapp.com",
  projectId: "webcarros-e0b9e",
  storageBucket: "webcarros-e0b9e.firebasestorage.app",
  messagingSenderId: "630904589748",
  appId: "1:630904589748:web:4a3622ad388beece8d36e1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};