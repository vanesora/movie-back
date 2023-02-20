
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDs9J-F17mOcQrU2dre_l5JB5hQjdLbx8w",
  authDomain: "movieplay-4a31c.firebaseapp.com",
  databaseURL: "https://movieplay-4a31c-default-rtdb.firebaseio.com",
  projectId: "movieplay-4a31c",
  storageBucket: "movieplay-4a31c.appspot.com",
  messagingSenderId: "1016538805023",
  appId: "1:1016538805023:web:322aa5363fe34a87daf62a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)