import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhrYEezrPBUGojaeeYzxnLHQu0r2nTxrk",
  authDomain: "calldialer-e6fa9.firebaseapp.com",
  projectId: "calldialer-e6fa9",
  storageBucket: "calldialer-e6fa9.appspot.com",
  messagingSenderId: "83409490600",
  appId: "1:83409490600:web:d99902ed7f3130f5f2289d",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
