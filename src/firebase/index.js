
import { initializeApp } from 'firebase/app';
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const readDoc = (ref) => {
  const docRef = doc(firestore, ref);
  return docData(docRef, {idField: 'id'});
}

const readCollection = (ref, ...queryFn) => {
  const collectionRef = collection(firestore, ref);
  return collectionData(collectionRef, {idField: 'id'});
}

const updateDocument = (ref, data) => {
  const docRef = doc(firestore, ref);
  return updateDoc(docRef, data);
}

const setDocument = (ref, data) => {
  const docRef = doc(firestore, ref);
  return setDoc(docRef, data);
}

export { app, firestore, readDoc, readCollection, setDocument, updateDocument };

