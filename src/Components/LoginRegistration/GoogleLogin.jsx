import React from 'react';
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
   const { googleLogin } = useAuth();

  const handleGoogleSignIn = () =>{
      googleLogin()
  };

 return (
  <div>
     <button onClick={handleGoogleSignIn} className='btn btn-outline bg-base-300 text-red-600 w-full'>CONTINUE WITH GOOGLE </button>
  </div>
 );
};

export default GoogleLogin;


// import React from 'react';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import app from '../../firebase/firebase.init';

// const GoogleLogin = () => {
//  const auth = getAuth(app);
//  console.log(app);
//   const provider = new GoogleAuthProvider();

//     const handleGoogleSignIn = () =>{
//      // console.log('success')
//     signInWithPopup(auth, provider)
//     .then(result => {
//        const user = result.user;
//        console.log(user);
//     })
//     .catch( error => {
//       console.log('error: ', error)
//     })
//   };

//  return (
//     <div>
//      <button onClick={handleGoogleSignIn} className='btn btn-outline bg-base-300 text-red-600 w-full'>CONTINUE WITH GOOGLE </button>
//   </div>
//  );
// };

// export default GoogleLogin;