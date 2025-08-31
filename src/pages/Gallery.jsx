// // import React from 'react'
// // import a from '../public/gallery/a.jpg'
// // import b from '../public/gallery/b.jpg'
// // import c from '../public/gallery/c.jpg'
// // import d from '../public/gallery/d.jpg'
// // import e from '../public/gallery/e.jpg'
// // import f from '../public/gallery/f.jpg'


// // const Gallery = () => {
// //   const galleryImages = [
// //     { src: a, alt: "Family at dealership" },
// //     { src: b, alt: "Car consultation" },
// //     { src: c, alt: "Car wheel detail" },
// //     { src: d, alt: "Sports car rear" },
// //     { src: e, alt: "Silver SUV" },
// //     { src: f, alt: "Blue sedan" },
// //   ]
// //   return (
// //     <>
   

  
// //   <section id="gallery" className="py-20 bg-card">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //          {/* Heading */}
// //       <div className="flex items-center justify-center space-x-4 mb-9">
// //   {/* Left Line */}
// //   <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>

// //   {/* Heading */}
// //   <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
// //     Gallery
// //   </h2>

// //   {/* Right Line */}
// //   <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
// // </div>


// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {galleryImages.map((image, index) => (
// //             <div key={index} className="group cursor-pointer">
// //               <div className="overflow-hidden rounded-lg">
// //                 <img
// //                   src={image.src || {a}}
// //                   alt={image.alt}
// //                   className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>

// //     </>
// //   )
// // }



// mixed grid
// // export default Gallery

// import React from "react";
// import a from "../public/gallery/a.jpg";
// import b from "../public/gallery/b.jpg";
// import c from "../public/gallery/c.jpg";
// import d from "../public/gallery/d.jpg";
// import e from "../public/gallery/e.jpg";
// import f from "../public/gallery/f.jpg";

// export default function Gallery() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 pb-20 mx-auto ">
//       {/* Heading */}
//       <div className="flex items-center justify-center space-x-4 mb-8">
//   {/* Left Line */}
//   <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>

//   {/* Heading */}
//   <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//     Our Gallery
//   </h2>

//   {/* Right Line */}
//   <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
// </div>


//         {/* Gallery Grid */}
//         <div className="flex flex-wrap -m-1 md:-m-2">
//           {/* Left Column */}
//           <div className="flex flex-wrap w-full sm:w-1/2">
//             <div className="p-1 md:p-2 w-full sm:w-1/2">
//               <img
//                 alt="Car consultation"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={a}
//               />
//             </div>
//             <div className="p-1 md:p-2 w-full sm:w-1/2">
//               <img
//                 alt="Car wheel detail"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={b}
//               />
//             </div>
//             <div className="p-1 md:p-2 w-full">
//               <img
//                 alt="Sports car rear"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={c}
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-wrap w-full sm:w-1/2">
//             <div className="p-1 md:p-2 w-full">
//               <img
//                 alt="Silver SUV"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={d}
//               />
//             </div>
//             <div className="p-1 md:p-2 w-full sm:w-1/2">
//               <img
//                 alt="Blue sedan"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={e}
//               />
//             </div>
//             <div className="p-1 md:p-2 w-full sm:w-1/2">
//               <img
//                 alt="Luxury car"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg"
//                 src={f}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// mixed grid with pop card
// import React, { useState } from "react";
// import a from "../public/gallery/a.jpg";
// import b from "../public/gallery/b.jpg";
// import c from "../public/gallery/c.jpg";
// import d from "../public/gallery/d.jpg";
// import e from "../public/gallery/e.jpg";
// import f from "../public/gallery/f.jpg";

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     { src: a, alt: "Car consultation" },
//     { src: b, alt: "Car wheel detail" },
//     { src: c, alt: "Sports car rear" },
//     { src: d, alt: "Silver SUV" },
//     { src: e, alt: "Blue sedan" },
//     { src: f, alt: "Luxury car" },
//   ];

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 pb-20 mx-auto">
//         {/* Heading */}
//         <div className="flex items-center justify-center space-x-4 mb-8">
//           <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//             Our Gallery
//           </h2>
//           <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
//         </div>

//         {/* Keep original grid layout */}
//         <div className="flex flex-wrap -m-1 md:-m-2">
//           {/* Left Column */}
//           <div className="flex flex-wrap w-full sm:w-1/2">
//             <div
//               className="p-1 md:p-2 w-full sm:w-1/2 cursor-pointer"
//               onClick={() => setSelectedImage(a)}
//             >
//               <img
//                 alt="Car consultation"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={a}
//               />
//             </div>
//             <div
//               className="p-1 md:p-2 w-full sm:w-1/2 cursor-pointer"
//               onClick={() => setSelectedImage(b)}
//             >
//               <img
//                 alt="Car wheel detail"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={b}
//               />
//             </div>
//             <div
//               className="p-1 md:p-2 w-full cursor-pointer"
//               onClick={() => setSelectedImage(c)}
//             >
//               <img
//                 alt="Sports car rear"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={c}
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-wrap w-full sm:w-1/2">
//             <div
//               className="p-1 md:p-2 w-full cursor-pointer"
//               onClick={() => setSelectedImage(d)}
//             >
//               <img
//                 alt="Silver SUV"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={d}
//               />
//             </div>
//             <div
//               className="p-1 md:p-2 w-full sm:w-1/2 cursor-pointer"
//               onClick={() => setSelectedImage(e)}
//             >
//               <img
//                 alt="Blue sedan"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={e}
//               />
//             </div>
//             <div
//               className="p-1 md:p-2 w-full sm:w-1/2 cursor-pointer"
//               onClick={() => setSelectedImage(f)}
//             >
//               <img
//                 alt="Luxury car"
//                 className="block w-full h-64 sm:h-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
//                 src={f}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup / Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div
//             className="relative bg-white rounded-lg shadow-lg p-2 sm:p-4 max-w-3xl w-[90%] max-h-[90vh] flex justify-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 bg-gray-800 text-white rounded-full px-3 py-1 text-sm"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>
//             <img
//               src={selectedImage}
//               alt="Zoomed"
//               className="rounded-lg object-contain max-h-[80vh] w-auto"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState } from "react";
import a from "../public/gallery/a.jpg";
import b from "../public/gallery/b.jpg";
import c from "../public/gallery/c.webp";
import d from "../public/commercial/7.png";
import e from "../public/gallery/e.jpg";
import f from "../public/commercial/8.png";

export default function Gallery() {
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
  className="block w-full aspect-[4/3] object-fill object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
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
  );
}
