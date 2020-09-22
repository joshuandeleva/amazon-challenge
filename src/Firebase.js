import firebase from "firebase" 
const firebaseConfig = {
  apiKey: "AIzaSyCfw6Fa5_QVnr_NB8ZBu9h_0Ww5AtsJTUM",
  authDomain: "e-clone-4851b.firebaseapp.com",
  databaseURL: "https://e-clone-4851b.firebaseio.com",
  projectId: "e-clone-4851b",
  storageBucket: "e-clone-4851b.appspot.com",
  messagingSenderId: "314447922226",
  appId: "1:314447922226:web:b83c1d908c9e303f5fe82b",
  measurementId: "G-3301D19VKB"
};
//initialize the app
const firebaseapp = firebase.initializeApp(firebaseConfig)
//initialize the database
const db = firebaseapp.firestore()
const auth = firebase.auth()
export { db, auth };