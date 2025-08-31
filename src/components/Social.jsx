// import React from "react";
// import sml from '../public/brands/sml.jpeg'
// import che from '../public/brands/chevrolet.webp'
// import ren from '../public/brands/reno.webp'

// export default function BrandStrip() {
//   return (
//     <div className="bg-white-50 py-16 pb-20">
       
//        {/* Heading */}
//        <div className="flex items-center justify-center space-x-4 mb-8">
//           <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
//           <h2 className="text-2xl mb-3 md:text-3xl font-bold text-gray-900">
//             Our Associated Brands
//           </h2>
//           <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
//         </div>

//       <div className=" max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-around gap-8 sm:gap-4 md:gap-8">
//         {/* Renault */}
//         <img
//           src= {ren}
//           alt="Renault"
//           className="h-22 w-auto transition sm:h-15 md:h-20"
//         />

//         {/* SML Isuzu */}
//         <img
//           src={sml}
//           alt="SML Isuzu"
//           className="h-16 w-auto transition sm:h-12 md:h-20"
//         />

//         {/* Chevrolet */}
//         <img
//           src={che}
//           alt="Chevrolet"
//           className="h-16 w-auto transition sm:h-12 md:h-20"
//         />
//       </div>
//     </div>
    
//   );
// }


import React from "react";
import sml from "../public/brands/sml.jpeg";
import che from "../public/brands/chevrolet.webp";
import ren from "../public/brands/reno.webp";

export default function BrandStrip() {
  const brands = [
    { src: ren, alt: "Renault" },
    { src: sml, alt: "SML Isuzu" },
    { src: che, alt: "Chevrolet" },
  ];

  return (
    <div className="bg-white py-16 pb-20">
      {/* Heading */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
        <h2 className="text-2xl mb-3 md:text-3xl font-bold text-gray-900">
          Our Associated Brands
        </h2>
        <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-6 sm:gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center "
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
