import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh6fFj2pIK3pgvoTf1s4RIc-vklWi14iQ",
  authDomain: "gangnamunni-42b69.firebaseapp.com",
  projectId: "gangnamunni-42b69",
  storageBucket: "gangnamunni-42b69.appspot.com",
  messagingSenderId: "280107830472",
  appId: "1:280107830472:web:9098bfca308d84b7bfe9fd",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
