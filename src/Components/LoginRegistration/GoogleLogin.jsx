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