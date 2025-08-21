import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <h1 className='text-black'>Radhe Radhe</h1>
    <Nav/>
    
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>


    </Routes>
    <Hero/>
    </>
  )
}
export default App