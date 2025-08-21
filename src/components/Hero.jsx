// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//     <div className="h-screen bg-zinc-900">
      
//     </div>
//     </>
//   )
// }

// export default Hero
// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Secure Your Payments with <span className="text-blue-600">SafeFreeze</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Freeze your money in escrow until both buyer and seller agree.  
            Simple, transparent, and safe transactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-2xl shadow-md hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/hero-illustration.png" // replace with your image
            alt="SafeFreeze Hero"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
