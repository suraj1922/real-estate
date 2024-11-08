import React from 'react'
import {DarkModeProvider} from './components/DarkModeContext'
import Hero from './section/Hero'
import Header from './components/Header'
import Contact from './section/Contact'
import About from './section/About'
import PopularAreas from './section/PopularArea'
import Properties from './section/Properties'
import Client from './section/Client'
import Services from './section/Services'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <DarkModeProvider>
    <Header/>
    <Hero/>
    <About/>
    <PopularAreas/>
    <Properties/>
    <Services/>
    <Client/>
    <Contact/>
    <Footer/>
    </DarkModeProvider>
    </>
  )
}

export default App