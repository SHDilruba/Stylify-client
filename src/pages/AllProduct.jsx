import React, { useEffect, useState } from 'react';
import Cards from '../Components/products/Card';

const AllProduct = () => {

   const [products, setProducts] = useState([]);
   console.log(products);

   useEffect( () =>{
       fetch('https://stylify-server.vercel.app/products')
       .then( res => res.json())
       .then(data => setProducts(data));
   }, [])

 return (
       <div>
         <h1 className='text-4xl font-sans text-center text-red-400 my-8 '>We have {products?.length} Items</h1>
          <div className='flex flex-wrap justify-center gap-6 mt-[3rem] mb-[6rem]'>
               {products && products?.map(product =><Cards
                        children = {product} 
                        key = {product._id}>
                  </Cards>)
               }
         </div>
       </div>

   //  <div className='
   //      flex flex-wrap justify-center gap-4 mt-[2rem] mb-[4rem]'>
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //                 <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //             <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //             <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //             <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //             <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //     <div className="card w-96 place-self-center shadow-lg mb-4">
   //        <img className='rounded-lg' 
   //          src={cardImg} alt="" />
   //           <div className='py-3 px-4'>
   //              <h1 className='text-2xl text-red-400'>
   //                 High party heel for Woman</h1>
   //                 <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores?
   //                 </p>
   //             <div className=" bg-base-200 rounded-lg ms-48 flex justify-end mb-2">
   //              <h1 className='me-6 mt-3 font-bold text-red-500'>$70</h1>
   //           <CardButton>Buy Now</CardButton>
   //        </div>
   //     </div>
   //  </div>   
   //  </div>
 );
};

 export default AllProduct;

 //https://stylify-server.vercel.app
