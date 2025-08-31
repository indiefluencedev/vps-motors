import React, { useState } from "react";
import pass from '../public/passenger/professionalbg.webp'
import passabout from '../public/gallery/passabout.webp'
import a from '../public/gallery/a.jpg'
import b from '../public/cars/yellowcar.webp'
import c from '../public/gallery/c.webp'
import d from '../public/gallery/d.webp'
import e from '../public/gallery/e.jpg'
import f from '../public/gallery/f.jpg'


const Passenger = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    const images = [
      { src: a, alt: "Car consultation" },
      { src: b, alt: "Car wheel detail" },
      { src: c, alt: "Sports car rear" },
      { src: d, alt: "Silver SUV" },
      { src: e, alt: "Blue sedan" },
      { src: f, alt: "Luxury car" },
    ];
  
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
        <img src={passabout} alt="Passenger car" className="rounded-2xl shadow-lg" />
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
      {/* <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src={a} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
          <img src={b} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
          <img src={a} className="rounded-xl shadow-md hover:scale-105 transition" alt="" />
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
      <div className="container px-5 pb-20 mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Gallery
          </h2>
          <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-1 md:-m-2">
          {images.map((img, index) => (
            <div
              key={index}
              className="p-1 md:p-2 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full h-80 object-fill object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-[3px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              height: "60%", // 🔹 Fixed height
              maxWidth: "90%", // 🔹 Responsive width
            }}
          >
            {/* Close Button */}
            <button
              className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full px-3 py-1 text-sm"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Zoomed"
              className="h-full w-auto object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
    </div>
  );
};

export default Passenger;
