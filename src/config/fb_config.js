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
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXX-XXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXX-XXXXXXXX",
  storageBucket: "XXXXXXXXX-XXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXXX",
  appId: "X:XXXXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXXXXXXXXXXXXXXXXX"

});

const realtime = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export default realtime;


