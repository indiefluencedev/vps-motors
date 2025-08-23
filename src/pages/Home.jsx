import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import About from './About'
import Gallery from './Gallery'


const Home = () => {
  return (
    <div>
        <Hero />
        <Services/>
        <About/>
        <Gallery/>
    </div>
  )
}

export default Home