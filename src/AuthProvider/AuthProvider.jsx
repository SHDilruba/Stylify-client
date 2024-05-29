import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = ()=> {
    return signOut(auth)
  }

 const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
 };

 useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      if(currentUser){
         setUser(currentUser)
        console.log(currentUser) 
      }
    });
    return unsubscribe;
 },[])

 const authInfo = {user, googleLogin, createUser, signIn, logOut};

 return(
  <AuthContext.Provider value ={authInfo}>
       {children}
  </AuthContext.Provider>
 )
};

export default AuthProvider;