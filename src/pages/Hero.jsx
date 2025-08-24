import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero2 from '../public/cars/car1.jpeg';
import galleryB from '../public/hero3.webp';
import galleryC from '../public/cars/hero4.jpg';

import heroBg from '../public/hero.webp';
import cardImg1 from '../public/about.webp';
import cardImg2 from '../public/cars/car1.jpeg'

const Hero = () => {
  const heroImages = [
    { src: heroBg, positionY: 'center' },
    { src: hero2, positionY: 'center' },
    { src: galleryB, positionY: 'center' },
    { src: galleryC, positionY: 'center' },
  ];

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center">
      {/* HERO BG IMAGE */}
      <div className="absolute inset-0 w-full h-full ">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper absolute inset-0 w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center "
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundPositionY: image.positionY || 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BG overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Your trusted partner<br/><span className="text-red-500">for vehicles</span>
        </h1>
        <p className="text-lg text-gray-200 mt-4 mb-8 drop-shadow-lg">
          Wide range of premium & budget cars waiting just for you.
        </p>
      </div>

      {/* Overlay Cards */}
      <div className="
        absolute left-1/2 transform -translate-x-1/2
        bottom-[-80px]
        w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
        flex flex-col sm:flex-row gap-6 justify-center items-center
        z-20 px-4
      ">
        {/* CARD 1 */}
        <div
          className="w-full h-58 backdrop-blur-md bg-white/30 shadow-xl flex flex-col justify-between p-6 border border-white/40
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl cursor-pointer rounded-3xl items-center"
          style={{
            backgroundImage: `url(${cardImg1})`,
            backgroundSize: "cover",
            backgroundPositionY: "80%",
            boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-between">
            <span className="text-white font-semibold text-xl drop-shadow mb-3 text-center">Passenger Vehicles</span>
            <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:scale-105 hover:bg-red-800 transition shadow-lg">See Details</button>
          </div>
        </div>

        {/* CARD 2*/}
        <div
          className="w-full h-58 backdrop-blur-md bg-white/30 shadow-xl flex flex-col justify-between p-6 border border-white/40
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl cursor-pointer rounded-3xl items-center"
          style={{
            backgroundImage: `url(${cardImg2})`,
            backgroundSize: "cover",
            backgroundPositionY: "80%",
            boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-between">
            <span className="text-white font-semibold text-xl drop-shadow mb-3 text-center">Commercial Vehicles</span>
            <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-800 hover:scale-105 transition shadow-lg">See Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
