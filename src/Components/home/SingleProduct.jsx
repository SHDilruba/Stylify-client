import React from 'react';
import shoes from "../../assets/card.jpg";

const SingleProduct = () => {
 return (
  <div>
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {shoes} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-red-300">Buy Now</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default SingleProduct;