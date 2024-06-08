import React from 'react';

// eslint-disable-next-line react/prop-types
const CardButton = ({children}) => {
 return (
  <div>       
 <button className="btn bg-red-300">{children}</button>
</div>
 );
};

export default CardButton;