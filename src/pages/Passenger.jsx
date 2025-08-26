import React from "react";
import pass from '../public/hero3.webp'
import a from '../public/gallery/a.jpg'
import b from '../public/gallery/b.jpg'
import c from '../public/gallery/c.jpg'
import d from '../public/gallery/d.jpg'


const Passenger = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${pass})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white">Passenger Vehicles</h1>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <img src={pass} alt="Passenger car" className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Comfort Meets Innovation</h2>
          <p className="text-lg text-gray-600 mb-4">
            Inspired by Renault’s engineering, our passenger range offers the perfect blend of 
            performance, safety, and comfort. Designed for families and city drives alike.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✔</span> Stylish and modern design</li>
            <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✔</span> Superior fuel efficiency</li>
            <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✔</span> Advanced safety features</li>
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

export default Passenger;
