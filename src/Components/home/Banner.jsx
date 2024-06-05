import React from 'react'
import banner from "../../assets/banner.jpg";
import PrimaryButton from '../shared/PrimaryButton';

export default function Banner() {
  return (
    <div>
      {/* <div className="hero"> */}
      <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-red-200 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Find a great selection of Women's Clothing, Shoes, & Accessories from us. We have particular design by top designers.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    </div>
  )
}




