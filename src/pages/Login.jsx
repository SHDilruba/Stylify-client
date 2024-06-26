import { Link } from "react-router-dom";
import GoogleLogin from "../Components/LoginRegistration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signIn} = useAuth()
  
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    signIn( email, password)

  };

 return (
   <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="text-center lg:text-left lg:ps-8">
         <h1 className="text-5xl font-bold ">Login now!</h1>
         <p className="py-6">
           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
           excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
           a id nisi.
         </p>
       </div>
       <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleSubmit} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               placeholder="email"
               className="input input-bordered"
               name="email"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="password"
               placeholder="password"
               className="input input-bordered"
               name="password"
               required
             />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover text-red-600">
                 Forgot password?
               </a>
             </label>
           </div>
           <div className="form-control mt-4">
             <button className="btn bg-red-500 text-white">Login</button>
           </div>
           <div className="mt-4">
             <GoogleLogin />
           </div>
         </form>
         <div>
         <p className='mb-4 pb-4 text-center'><small className= ' mr-1'>New to here?</small> <Link to='/register' className='text-red-600'>Register </Link></p> 
         </div>
       </div>
     </div>
   </div>
 );
};

export default Login;