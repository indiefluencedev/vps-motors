import { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add state for scroll
  const navRef = useRef(); // Create a ref for the nav element

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect to handle outside clicks for closing the mobile menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]); // Re-run the effect when isOpen changes


  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className={`w-full shadow-md fixed top-0 left-0 z-50 backdrop-blur-md ${isScrolled ? 'bg-white/30' : 'bg-white'}`}>
      {/* Your existing navigation content */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to='/' className="hover:text-red-600"> Home</Link>
          {/* <Link to='/gallery'className="hover:text-red-600"> Gallery</Link> */}
        </div>

        {/* Logo Center */}
        <Link to='/' onClick={closeMobileMenu}> {/* Close menu on logo click */}
          <div className="text-xl font-bold text-gray-900">
            VPS <span className="text-red-600">MOTORS</span>
          </div>
        </Link>

        {/* Right Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* <Link to='/services'className="hover:text-red-600"> Services</Link> */}
          <Link to='/contact' className="hover:text-red-600"> Contact</Link>
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
          <Link to='/about' className="block hover:text-red-600" onClick={closeMobileMenu}> About</Link>
          <Link to='/services' className="block hover:text-red-600" onClick={closeMobileMenu}> Services</Link>
          <Link to='/gallery' className="block hover:text-red-600" onClick={closeMobileMenu}> Gallery</Link>
          <Link to='/contact' className="block hover:text-red-600" onClick={closeMobileMenu}> Contact</Link> {/* Corrected link */}
        </div>
      )}
    </nav>
  );
}
