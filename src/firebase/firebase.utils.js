import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCzpOm2zdFhmgs597QUgq0_Tq0aPtaNMf0",
  authDomain: "crown-clothing-c24e2.firebaseapp.com",
  projectId: "crown-clothing-c24e2",
  storageBucket: "crown-clothing-c24e2.appspot.com",
  messagingSenderId: "986197882280",
  appId: "1:986197882280:web:a5aaccde9354f84793599d",
  measurementId: "G-KS6JXRWL28",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth,
  ...additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user");
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
