
import React from "react";
import { Car, Wallet, Smartphone } from "lucide-react";
import { useLocation } from "react-router-dom";


const Services = () => {
  const location=useLocation();
const paddingclass= location.pathname==='/' ? 'py-16' : 'py-9'
  return (
    <section id="services" className={` ${paddingclass} mt-9 bg-white`}>
      <div className="max-w-7xl mb-7 mx-auto px-6 text-center">
      {/* Heading */}
      <div className="flex items-center justify-center space-x-4 my-8">
  {/* Left Line */}
  <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>

  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
    Our Services
  </h2>

  {/* Right Line */}
  <div className="w-12 md:w-20 h-[2px] bg-gray-400"></div>
</div>

<p className="text-gray-600 mt-2 max-w-2xl mx-auto text-center">
  We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
</p>


        {/* Services Cards */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 sm:justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition group"> {/* Added group class */}
            <div className="transition-transform duration-300 transform group-hover:translate-y-2"> {/* Added div and classes */}
              <Car className="text-red-500 w-14 h-14 mx-auto" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Top Buy & Sell Car</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition group"> {/* Added group class */}
            <div className="transition-transform duration-300 transform group-hover:translate-y-2"> {/* Added div and classes */}
              <Wallet className="text-red-500 w-14 h-14 mx-auto" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Easy Payment</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition sm:col-span-2 md:col-span-1 sm:mx-auto group"> {/* Added group class */}
            <div className="transition-transform duration-300 transform group-hover:translate-y-2"> {/* Added div and classes */}
              <Smartphone className="text-red-500 w-14 h-14 mx-auto" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Easy To Use</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We Provide Many Of The Best Services For You And You Will Get The Best Benefits Here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
