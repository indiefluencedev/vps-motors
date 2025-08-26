import React from "react";
import sml from '../public/brands/sml.png'
import che from '../public/brands/chevrolet.png'
import ren from '../public/brands/renault.png'

export default function BrandStrip() {
  return (
    <div className="bg-gray-50 py-8">
       
      {/* Heading */}
      <div className="flex items-center justify-center space-x-4 my-8">
  {/* Left Line */}
  <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>

  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
    Our Associalted Brands
  </h2>

  {/* Right Line */}
  <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
</div>
      <div className=" max-w-7xl mx-auto px-6 flex items-center justify-around gap-8">
        {/* Renault */}
        <img
          src= {ren}
          alt="Renault"
          className="h-23 w-auto grayscale hover:grayscale-0 transition"
        />

        {/* SML Isuzu */}
        <img
          src={sml}
          alt="SML Isuzu"
          className="h-20 w-auto grayscale hover:grayscale-0 transition"
        />

        {/* Chevrolet */}
        <img
          src={che}
          alt="Chevrolet"
          className="h-20 w-auto grayscale hover:grayscale-0 transition"
        />
      </div>
    </div>
    
  );
}
