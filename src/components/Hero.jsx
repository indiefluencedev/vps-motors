// import React from "react";
// import { motion } from "framer-motion";
// import herocar from "../public/herocar.png";
// import renault from "../public/brands/renault.png";
// import sml from "../public/brands/sml.png";
// import chevrolet from "../public/brands/chevrolet.png";

// const Hero = () => {
//   return (
//     <section className="relative w-full bg-gray-50">
//       {/* HERO CONTENT */}
//       <div className="container mx-auto h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         {/* LEFT CONTENT */}
//         <motion.div
//           className="flex-1 text-center md:text-left"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//             Find Your <span className="text-red-600">Dream</span> Car
//           </h1>
//           <p className="text-gray-600 mt-4 mb-6">
//             Wide range of premium & budget cars waiting just for you.
//           </p>
//           <button className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition">
//             Order Now
//           </button>
//         </motion.div>

//         {/* RIGHT CAR IMAGE */}
//         <motion.div
//           className="flex-1 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img src={herocar} alt="Car" className="w-full max-w-lg mx-auto" />
//         </motion.div>
//       </div>

//       {/* BRANDS STRIP */}
//       <div className="py-10 bg-gray-100">
// 	  <div className="
//   grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
//   lg:flex lg:justify-center lg:gap-16 
//   items-center gap-8 opacity-80
// ">
//   {/* 1st logo */}
//   <img
//     src={chevrolet}
//     alt="Chevrolet"
//     className="max-h-16 sm:max-h-20 md:max-h-24 object-contain mx-auto"
//   />
//   {/* 2nd logo */}
//   <img
//     src={sml}
//     alt="SML Isuzu"
//     className="max-h-16 sm:max-h-20 md:max-h-24 object-contain mx-auto"
//   />
//   {/* 3rd logo - fix alignment */}
//   <img
//     src={renault}
//     alt="Renault"
//     className="max-h-16 sm:max-h-20 md:max-h-24 object-contain mx-auto col-span-2 sm:col-span-2 md:col-span-1"
//   />
// </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";

// Replace these imports with your image URLs or static imports
const BG_HERO = '/herocar.png';
const CARD_IMG_1 = "/path/to/card-bg-1.jpg";
const CARD_IMG_2 = "/path/to/card-bg-2.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* HERO BG IMAGE with blur */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('${BG_HERO}')`,
          filter: "blur(7px)",
        }}
      />
      {/* BG overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Find Your <span className="text-red-200">Car</span>
        </h1>
        <p className="text-lg text-gray-200 mt-4 text-center mb-8 drop-shadow-lg">
          Wide range of premium & budget cars waiting just for you.
        </p>
      </div>

      {/* Overlay Cards */}
      <div className="
        absolute left-1/2 bottom-[-80px] 
        transform -translate-x-1/2
        flex gap-6 w-full max-w-3xl justify-center
        z-20">
        {/* CARD 1 */}
        <div
          className="w-92 h-58 backdrop-blur-md bg-white/30 shadow-xl flex flex-col justify-between p-6 border border-white/40
//             transition-transform duration-300 ease-in-out
//             hover:scale-105 hover:shadow-2xl cursor-pointer rounded-3xl items-center "
          style={{
            backgroundImage: `url('${CARD_IMG_1}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",

          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-between">
            <span className="text-white font-semibold text-lg drop-shadow mb-3">Featured Car 1</span>
            <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg">See Details</button>
          </div>
        </div>
        {/* CARD 2 */}
        <div
          className="w-92 h-58 backdrop-blur-md bg-white/30 shadow-xl flex flex-col justify-between p-6 border border-white/40
//             transition-transform duration-300 ease-in-out
//             hover:scale-105 hover:shadow-2xl cursor-pointer rounded-3xl items-center "
          style={{
            backgroundImage: `url('${CARD_IMG_2}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-between">
            <span className="text-white font-semibold text-lg drop-shadow mb-3">Featured Car 2</span>
            <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg">See Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from "react";

// // Replace these with your actual images paths or imports
// const BG_HERO = "/path/to/hero-bg.jpg";
// const CARD_IMG_1 = "/path/to/card-bg-1.jpg";
// const CARD_IMG_2 = "/path/to/card-bg-2.jpg";

// const Hero = () => {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center">
//       {/* Hero background with blur */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center bg-cover"
//         style={{ backgroundImage: `url('${BG_HERO}')`, filter: "blur(7px)" }}
//       />
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40" />
      
//       {/* Centered Text */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
//           Find Your <span className="text-red-400">Car</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 mt-4 mb-8 drop-shadow-lg">
//           Wide range of premium & budget cars waiting just for you.
//         </p>
//       </div>
      
//       {/* Overlay cards */}
//       <div className="
//         absolute left-1/2 bottom-[-100px] 
//         transform -translate-x-1/2 
//         flex gap-8 w-full max-w-5xl justify-center 
//         z-20 px-4
//       ">
//         {/* Card 1 */}
//         <div
//           className="
//             w-72 h-52 
//             backdrop-blur-md bg-white/30 
//             rounded-2xl shadow-xl flex flex-col justify-between p-6 border border-white/40
//             transition-transform duration-300 ease-in-out
//             hover:scale-105 hover:shadow-2xl cursor-pointer
//           "
//           style={{
//             backgroundImage: `url('${CARD_IMG_1}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
//           }}
//         >
//           <div>
//             <h3 className="text-white font-semibold text-xl drop-shadow mb-4">
//               Featured Car 1
//             </h3>
//             <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 shadow-lg">
//               See Details
//             </button>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="
//             w-72 h-52 
//             backdrop-blur-md bg-white/30 
//             rounded-2xl shadow-xl flex flex-col justify-between p-6 border border-white/40
//             transition-transform duration-300 ease-in-out
//             hover:scale-105 hover:shadow-2xl cursor-pointer
//           "
//           style={{
//             backgroundImage: `url('${CARD_IMG_2}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
//           }}
//         >
//           <div>
//             <h3 className="text-white font-semibold text-xl drop-shadow mb-4">
//               Featured Car 2
//             </h3>
//             <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 shadow-lg">
//               See Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
