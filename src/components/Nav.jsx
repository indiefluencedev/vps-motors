// import React from 'react'
// import { Link } from 'react-router-dom'

// const Nav = () => {
//   return (
//     <>
//     <div className="flex">
//     <h1>VPS MOTORS</h1>
//     <div className="flex">
//         <Link to='/about'>About</Link>
//         <Link to='/services'>Services</Link>
//         <Link to='/gallery'>Gallery</Link>
//         <Link to='/contact'>Contact</Link>

//     </div>
//         </div>
//     </>
//   )
// }

// export default Nav
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold">VPS MOTORS</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="hover:text-red-500 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-red-500 transition">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-red-500 transition">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-red-500 transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-3">
          <Link
            to="/about"
            className="block hover:text-red-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:text-red-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="block hover:text-red-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block hover:text-red-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
