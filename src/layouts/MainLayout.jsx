import React from 'react';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
 return (
  <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
  </div>
 );
};

export default MainLayout;