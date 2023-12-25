// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4k78hLVyKuPYc7fXJr9i5VgaJFnEUIMo",
  authDomain: "my-blog-90d6d.firebaseapp.com",
  projectId: "my-blog-90d6d",
  storageBucket: "my-blog-90d6d.appspot.com",
  messagingSenderId: "799678635116",
  appId: "1:799678635116:web:5a2a6388bda5dba7234c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;