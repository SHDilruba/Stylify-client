import React from 'react';
import CardButton from '../shared/buttons/CardButton';

const Cards = ({children}) => {
 return (
  <div>
     <div className="card h-full w-96 bg-base-100 mx-auto shadow-xl">
  <figure><img src= {children.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{children.name}</h2>
    <p>{children.description}</p>
    <div className="card-actions justify-end">
      <div className='flex gap-2 text-center bg-base-200 rounded-lg'>       
           <h3 className='mt-2 px-6 font-bold text-xl'>${children.price}</h3>
          <CardButton>Buy Now</CardButton>
      </div>
    </div>
  </div>
</div>
  </div>
 );
};

export default Cards;