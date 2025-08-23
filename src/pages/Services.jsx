import React from 'react'
import { Car, Wallet, Smartphone } from "lucide-react";
// import Marque from '../components/Marque';

const Services = () => {
  return (
    <>
  
    <section id="services" className="py-16 mt-35 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Services</h2>
      <p className="text-gray-600 mt-2">
        We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
      </p>

      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Car className="text-red-500 w-12 h-12 mx-auto" />
          <h3 className="mt-4 font-semibold text-lg">Top Buy & Sell Car</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Wallet className="text-red-500 w-12 h-12 mx-auto" />
          <h3 className="mt-4 font-semibold text-lg">Easy Payment</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Smartphone className="text-red-500 w-12 h-12 mx-auto" />
          <h3 className="mt-4 font-semibold text-lg">Easy To Use</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
          </p>
        </div>
      </div>

      {/* Highlight Feature */}
      {/* <div className="mt-16 grid  md:grid-cols-2 items-center"> */}
       
        {/* Left Image */}
        {/* <div className="rounded-2xl overflow-hidden shadow-md ">
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
            alt="Car"
            className="w-full h-full object-cover"
          />
        </div> */}
        {/* <div className="bg-gradient-to-br from-gray-50 via-white to-red-100 h-[330px] rounded-3xl absolute left-[600px] hover:ml-15 "> */}
        {/* Right Text */}
        {/* <div className="ml-9 mt-7 text-left w-[400px] ">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            EVs For Everyone
          </h3>
          <p className="text-gray-600 mt-4">
            We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
          </p>
          <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-red-600 transition">
            Read More
          </button>
        </div></div>*/}
        {/* </div>  */}

    </div>
  </section>
  </>
  
  )
}

export default Services