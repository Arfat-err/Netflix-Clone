import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDn9iU-jzBLbSgXyX-T5DE5c1T4IxS4HhQ",
  authDomain: "netflix-clone-3c825.firebaseapp.com",
  projectId: "netflix-clone-3c825",
  storageBucket: "netflix-clone-3c825.firebasestorage.app",
  messagingSenderId: "503166266007",
  appId: "1:503166266007:web:dcd217a7b9f6eca33197d2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
try {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
  });
} catch (err) {
    console.error(err);
    toast.error(err.code.split('/')[1].split('-').join(' '));
}
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    toast.error(err.code.split('/')[1].split('-').join(' '));
  }}

  const logout = () => {
    signOut(auth);
  }

export { auth, db, signup, login, logout };