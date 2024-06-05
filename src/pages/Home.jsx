import React from 'react';
import Banner from '../Components/home/Banner';
import Products from '../Components/home/Categories';
import Accordion from '../Components/home/Accordion';
import Categories from '../Components/home/Categories';

const Home = () => {

 return (
  <div>
   <Banner></Banner>
    <Categories></Categories>
    <Accordion></Accordion>
  </div>
 );
};

export default Home;