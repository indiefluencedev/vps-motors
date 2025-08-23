import React from 'react'
// import Hero from './components/Hero'
import Home from './pages/Home'
import Social from './components/Social'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './components/Contact'
import Gallery from './pages/Gallery'
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom'
import Location from './components/Location'
import Footer from './components/Footer'
import Cursor from './components/Cursor'


const App = () => {
  return (
    <>
    <Cursor/>
    {/* <h1 className='text-black'>Radhe Radhe</h1> */}
    <Nav/>
    {/* <Social/> */}
    
    <Routes>
      {/* <Route path='/hero' element={<Hero/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='loc' element={<Location/>}/>


    </Routes>
    {/* <Hero/> */}
    {/* <Services/> */}
    <About/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App