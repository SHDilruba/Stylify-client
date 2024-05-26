import React from 'react';
import Banner from '../Components/home/Banner';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
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