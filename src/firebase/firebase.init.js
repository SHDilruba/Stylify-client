// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

// // export const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export default app;




import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7OSDKlH4d4UdVcpF4oOoGa-oEETefwjs",
  authDomain: "e-commerce-website-a71ea.firebaseapp.com",
  projectId: "e-commerce-website-a71ea",
  storageBucket: "e-commerce-website-a71ea.appspot.com",
  messagingSenderId: "2822124262",
  appId: "1:2822124262:web:d873980ec507e63d36c127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;