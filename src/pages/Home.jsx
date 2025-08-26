import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Gallery from './Gallery'
import Nav from '@/components/global-components/Nav'
import { style } from 'framer-motion/client'
import Testimonial from '@/components/Testimonial'
import Social from '@/components/Social'


const Home = () => {
  return (
    <div>
        <Hero />
        <Services/>
        <About/>
        <Gallery/>
        <Testimonial/>
        <Social/>
    </div>
  )
}

export default Home