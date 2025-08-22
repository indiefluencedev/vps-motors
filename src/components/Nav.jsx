// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold">VPS MOTORS</h1>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <Link to="/about" className="hover:text-red-500 transition">
//               About
//             </Link>
//             <Link to="/services" className="hover:text-red-500 transition">
//               Services
//             </Link>
//             <Link to="/gallery" className="hover:text-red-500 transition">
//               Gallery
//             </Link>
//             <Link to="/contact" className="hover:text-red-500 transition">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-3">
//           <Link
//             to="/about"
//             className="block hover:text-red-500 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="block hover:text-red-500 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             to="/gallery"
//             className="block hover:text-red-500 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/contact"
//             className="block hover:text-red-500 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#services" className="hover:text-red-600">Services</a>
          <a href="#gallery" className="hover:text-red-600">Gallery</a>
        </div>

        {/* Logo Center */}
        <div className="text-xl font-bold text-gray-900">
          VPS <span className="text-red-600">MOTORS</span>
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#brands" className="hover:text-red-600">Brands</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href="#location" className="hover:text-red-600">Location</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-700 font-medium shadow">
          <a href="#about" className="block hover:text-red-600">About</a>
          <a href="#services" className="block hover:text-red-600">Services</a>
          <a href="#gallery" className="block hover:text-red-600">Gallery</a>
          <a href="#brands" className="block hover:text-red-600">Brands</a>
          <a href="#contact" className="block hover:text-red-600">Contact</a>
          <a href="#location" className="block hover:text-red-600">Location</a>
        </div>
      )}
    </nav>
  );
}
