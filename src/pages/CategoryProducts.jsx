import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/products/Cards';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();
    console.log(categoryProducts);
    // const refetch = useQuery;

    return (
          <div className='mt-7 mb-10 md:mb-28 md:mx-40'>
              <h2 className='text-[1.3rem] md:text-[2.1rem] mb-[1.5rem] md:mb-[3rem] text-center font-sans text-accent-focus'>This Category has {categoryProducts.length} {categoryProducts.length > 1 ? 'items available' : 'item available'}</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-10 rounded-xl gap-10'>
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