// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from "../Data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJ4uZAtuV1jMY1IcZFhKnOUDA3AAFWr8",
  authDomain: "tienda-river-honigesz.firebaseapp.com",
  projectId: "tienda-river-honigesz",
  storageBucket: "tienda-river-honigesz.appspot.com",
  messagingSenderId: "758935852418",
  appId: "1:758935852418:web:806e77238a026e25236b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//     addDoc(collection(db, "productos"), prod)
//     .then((elem) => console.log(`se agrego el producto id ${elem.id}`))
//     .catch((error) => console.log(error));
// })
