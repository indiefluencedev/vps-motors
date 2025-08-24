import React from 'react'
// import Hero from './components/Hero'
import Home from './pages/Home'
import Social from './components/Social'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Nav from './components/global-components/Nav'
import { Route,Routes } from 'react-router-dom'
import Location from './components/Location'
import Footer from './components/global-components/Footer'
import Cursor from './components/global-components/Cursor'
import ScrollToTop from './components/global-components/ScrollToTop'
import Try from './components/Try'


const App = () => {
  return (
    <>
    <Cursor/>
    <ScrollToTop/>
    {/* <h1 className='text-black'>Radhe Radhe</h1> */}
    <Nav/>
    {/* <Social/> */}
    {/* <Try/> */}
    
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
  
    <Footer/>
    </>
  )
}
export default App