//  import React, { useEffect, useRef } from 'react'
//  import {gsap} from 'gsap'
//  const Cursor = () => {
//   const curRef = useRef<HTMLDivElement>(null);
//   const follRef = useRef<HTMLDivElement>(null);

//   const moveCursor = (e: MouseEvent): void => {
//     gsap.to(curRef, {
//       x: e.clientX,
//       y: e.clientY,
//       duration: 0.1,
//     });

//     gsap.to(follRef, {
//       x: e.clientX,
//       y: e.clientY,
//       duration: 0.1,
//     });
//   };



//   useEffect(() => {
//     gsap.set(curRef.current,{
//       xPercent: -20,
//       yPercent: -20,
//     });
    
//     gsap.set(follRef.current,{
//       xPercent: -50,
//       yPercent: -50,
//     })
//   }, []);
  
// window.addEventListener("mousemove", moveCursor)
//    return (    
//      <div>
//       <div ref={curRef} className="cursor"></div>
//       <div ref={follRef} className="curfollow"></div>
//      </div>
//    )
//  }
 
//  export default Cursor

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
