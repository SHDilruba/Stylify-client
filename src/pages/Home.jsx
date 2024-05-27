import React from 'react';
import Banner from '../Components/home/Banner';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';
import Products from '../Components/home/Products';
import Accordion from '../Components/home/Accordion';

const Home = () => {
 return (
  <div>
   <Banner></Banner>
    <Products></Products>
    <Accordion></Accordion>
  </div>
 );
};

export default Home;