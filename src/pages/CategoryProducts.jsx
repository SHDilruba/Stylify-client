import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/products/Card';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();

    return (
          <div className='mt-7 mb-10 md:mb-28 md:mx-40'>
              <h2 className='text-[1.3rem] md:text-[2.1rem] mb-[1.5rem] md:mb-[3rem] text-center font-sans text-accent-focus'>This Category has {categoryProducts.length} {categoryProducts.length > 1 ? 'items available' : 'item available'}</h2>
              <div className='flex flex-wrap justify-center gap-6 mt-[2rem] mb-[4rem]'>
            {  categoryProducts &&
                categoryProducts?.map(product => <Cards
                    children={product}
                    key={product._id}
                ></Cards> )
            }
           </div>
          </div>
    );
};

export default CategoryProducts;