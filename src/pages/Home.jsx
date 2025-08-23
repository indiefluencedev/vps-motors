import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import About from './About'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services/>
        <About/>
    </div>
  )
}

export default Home