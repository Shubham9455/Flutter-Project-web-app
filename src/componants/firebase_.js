import { initializeApp } from "firebase/app";

import {signInWithRedirect } from "firebase/auth";


import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  doc,
  collection,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjo-e-QSttVtLqgXtF3ScqbtcRioUB6kI",

  authDomain: "brewcrew-ed395.firebaseapp.com",

  projectId: "brewcrew-ed395",

  storageBucket: "brewcrew-ed395.appspot.com",

  messagingSenderId: "292011927648",

  appId: "1:292011927648:web:058d82cf25b1ddc670fb05",
};



const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
   signInWithPopup(auth, googleProvider)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       // The signed-in user info.
       const user = result.user;
       console.log(user.email);
       // ...
     })
     .catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
       // ...
     });
};


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};



const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email:user.email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

// const dbase = firebase.firestore();

const addToFavourites = async (uid,title, image_url, link) => {
  // await addDoc(collection(db, "userData"), {
  //   uid: uid,
  //   title: title,
  //   image_url: image_url,
  //   link: link,
  // })
  await setDoc(doc(db, "userData",uid,"title",title), {
    title: title,
    image_url: image_url,
    link: link,
  })
  .then(() => {
    console.log("Document written with ID: ", title);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  })
}


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  addToFavourites,
};