import React from 'react';

const Accordion = () => {
 return (
  <div className='w-4/5 mb-10  mx-auto'>
         <h1 className='font-bold text-2xl text-center mt-11 mb-8'> Frequently Asked Questions!</h1>
        <div className="collapse collapse-arrow border border-red-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title font-medium">
  Where are your service area?
  </div>
  <div className="collapse-content"> 
    <p>Our service is just available in the inside of the Italy.</p>
  </div>
</div>
<div className="collapse collapse-arrow border border-red-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title font-medium">
    Is this a physical shop?
  </div>
  <div className="collapse-content"> 
    <p>No, Stylify is a online fashion house.</p>
  </div>
</div>
<div className="collapse collapse-arrow border border-red-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title font-medium">
    Do you have any delivery fee?
  </div>
  <div className="collapse-content"> 
    <p>No, we provide free delivery service for our customer</p>
  </div>
</div>  
  </div>
 );
};

export default Accordion;