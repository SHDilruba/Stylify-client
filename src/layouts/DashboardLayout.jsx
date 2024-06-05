import React, { useContext } from 'react';
import Navbar from '../Components/shared/Navbar';

import { Link, Outlet } from "react-router-dom";
import Footer from '../Components/shared/Footer';
// import { AuthContext } from '../AuthProvider/AuthProvider';

const DashboardLayout = () => {
  // const {user} = useContext(AuthContext);
  // console.log(user);

  return (

    <>
    <Navbar></Navbar>
    <div className="drawer drawer-mobile ">

    <ul className="menu pb-20 p-10 mr-10 bg-base-200 text-xl pt-8"> 
    <li className='border border-red-500'><Link to="/dashboard">All Products</Link></li>
    <li className='border border-red-500'><Link to="/dashboard">My Products</Link></li>
    <li className='border border-red-500'><Link to="/dashboard">All Users</Link></li> 
 </ul>

<input id="dashboard-drawer " type="checkbox" className="drawer-toggle" />

<div className="drawer-content">
<Outlet></Outlet>  
</div> 
<div className="drawer-side">
 <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
  
</div>
</div>
{/* <Footer></Footer> */}
</>




    // <div className="drawer">
    //    <div className=' bg-red-400'>ABC</div>
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   {/* <div className='bg-red-400'>Yasmin</div>
    //   <div className='bg-red-400'>Yasmin</div>
    //   <div className='bg-red-400'>Yasmin</div> */}
    //   <div className="drawer-content flex flex-col">
    //     {/* Navbar */}
    //     <Navbar></Navbar>
    //     {/* Page content here */}
    //     <Outlet />
    //   </div>
    //   <div className="drawer-side">
    //     <label
    //       htmlFor="my-drawer-3"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <ul className="menu p-4 w-80 min-h-full">
    //       {/* Sidebar content here */}
    //       <li className='bg-primary'>
    //         <a>Sidebar Item 1</a>
    //       </li>
    //       <li>
    //         <a>Sidebar Item 2</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
