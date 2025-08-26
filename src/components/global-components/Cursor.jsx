import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const curRef = useRef(null);
  const follRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(curRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });

    gsap.to(follRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3, // slower for smooth follow effect
    });
  };

  useEffect(() => {
    gsap.set(curRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(follRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor"></div>
      <div ref={follRef} className="curfollow"></div>
    </>
  );
};

export default Cursor;

// "use client";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Cursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", mouseMove);

//     // Detect hover on interactive elements
//     const addHover = () => setHovered(true);
//     const removeHover = () => setHovered(false);

//     const hoverables = document.querySelectorAll("a, button, img, .hover-target");
//     hoverables.forEach((el) => {
//       el.addEventListener("mouseenter", addHover);
//       el.addEventListener("mouseleave", removeHover);
//     });

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       hoverables.forEach((el) => {
//         el.removeEventListener("mouseenter", addHover);
//         el.removeEventListener("mouseleave", removeHover);
//       });
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 pointer-events-none z-[9999] mix-blend-difference"
//       animate={{
//         x: mousePosition.x - 12,
//         y: mousePosition.y - 12,
//         scale: hovered ? 2 : 1,
//         backgroundColor: hovered ? "#facc15" : "#3b82f6", // yellow on hover
//       }}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//     />
//   );
// }
