import React from "react";
import comm from '../public/hero3.avif'
import a from '../public/comm2.avif'
import b from '../public/gallery/b.jpg'
import c from '../public/gallery/c.jpg'
import d from '../public/gallery/d.jpg'

const Commercial = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${comm})`}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white">Commercial Vehicles</h1>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <img src={a} alt="Commercial Vehicle" className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Power. Performance. Reliability.</h2>
          <p className="text-lg text-gray-600 mb-4">
            Inspired by SML and Chevrolet trucks, our commercial vehicles are built to handle 
            heavy-duty operations while ensuring efficiency and durability for businesses.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="text-blue-600 font-bold mr-2">✔</span> High load capacity</li>
            <li className="flex items-center"><span className="text-blue-600 font-bold mr-2">✔</span> Rugged build for long life</li>
            <li className="flex items-center"><span className="text-blue-600 font-bold mr-2">✔</span> Low maintenance cost</li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src={a} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
          <img src={a} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
          <img src={a} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Commercial;
