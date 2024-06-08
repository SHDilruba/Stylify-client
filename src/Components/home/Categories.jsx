import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../shared/buttons/PrimaryButton';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://stylify-server.vercel.app/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='mx-auto text-center w-4/5 '>
            <h1 className='text-xl md:text-3xl text-secondary-focus font-semibold font-sans mt-10'> OUR PRODUCTS CATEGORY</h1>
            <h1 className='text-red-200'>--------<span className='text-red-200'>000</span>---------</h1>
            <div className='grid grid-rows-3 lg:grid-rows-1 grid-flow-col gap-[6rem] md:gap-[3rem] mt-4 md:mt-10'>
                {
                    categories?.map(category => <div key={category.id}>
                        <Link to={`/category/${category.id}`}>
                        <div className="card mx-auto h-[11rem] shadow-xl image-full" >
                                <div className="card-body text-center bg-base-300 hover:bg-red-100 rounded-lg">
                                   <div className='flex justify-center items-center gap-8'>
                                       <img className='w-1/2 h-[10rem] md:h-[8rem] bg-white ' src={category.img} alt="" />
                                    <div>
                                        <h2 className='text-3xl font-serif font-semibold mt-1 text-black'>{category.name}</h2>
                                        <div className='mt-3 w-full'>
                                        <PrimaryButton 
                                           >Click Here</PrimaryButton>
                                        </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;