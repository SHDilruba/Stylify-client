import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
 return (
  <div>
   <h1 className='my-10 font-bold text-2xl text-center'>Our Products</h1>
    <div className='flex gap-3 justify-center'>
    <SingleProduct></SingleProduct>
     <SingleProduct></SingleProduct>
     <SingleProduct></SingleProduct>
    </div>
  </div>
 );
};

export default Products;