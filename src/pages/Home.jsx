import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Gallery from './Gallery'
import Nav from '@/components/global-components/Nav'
import { style } from 'framer-motion/client'
import Testimonial from '@/components/Testimonial'


const Home = () => {
  return (
    <div>
        <Hero />
        <Services/>
        <About/>
        <Gallery/>
        <Testimonial/>
    </div>
  )
}

export default Home