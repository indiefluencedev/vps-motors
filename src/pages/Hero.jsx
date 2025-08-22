import React from "react";
import { motion } from "framer-motion";
// import carImg from "../assets/car.png";
import herocar from '../public/herocar.png' ;
import renault from '../public/brands/renault.png' ;
import sml from '../public/brands/sml.png' ;
import chevrolet from '../public/brands/chevrolet.png' ;
// import "../styles/Hero.css'
const Hero = () => {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-2 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Find Your <span className="text-red-600">Dream</span> Car
          </h1>
          <p className="text-gray-600 mt-4 mb-6">
            Wide range of premium & budget cars waiting just for you.
          </p>
          <button className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition">
            Order Now
          </button>
        </motion.div>

        {/* RIGHT CAR IMAGE */}
        <motion.div
          className="flex-2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herocar} alt="Car" className="w-full" />
        </motion.div>
      </div>

      {/* FILTER BOX */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center gap-4 px-6 py-4 w-[90%] md:w-[70%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        
                
      </motion.div>

      {/* BRANDS STRIP */}
      <div className="mt-28 py-8 bg-gray-100">
        <div className="flex justify-center gap-8 flex-wrap opacity-70">
          <img src={chevrolet} alt="Honda" className="h-25 w-40 mr-2" />
          <img src={sml} alt="Toyota" className="h-25 w-40" />
          <img src={renault} alt="Audi" className="h-25 w-40" />
          {/* <img src="" alt="Tesla" className="h-25 w-40" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
