import React from 'react';

const PrimaryButton = ({children}) => {
  return (
    <button className="btn bg-red-600  bg-gradient-to-r from-white to-red rounded font-bold">{children}</button>
  );
};

export default PrimaryButton;