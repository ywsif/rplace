import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  apiKey: "AIzaSyAd4Lg3WbBTTFztUeoHAm5V9XN6uEQuf7o",
  authDomain: "rplace-23019.firebaseapp.com",
  projectId: "rplace-23019",
  storageBucket: "rplace-23019.appspot.com",
  messagingSenderId: "794556227083",
  appId: "1:794556227083:web:e60776eae1311875f6f10e",
  measurementId: "G-VP9E92FYJV"

});

const realtime = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export default realtime;


