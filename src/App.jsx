import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components
import Hero from './components/components/hero/hero'
import Services from './components/components/Services/Services'
import Projects from './components/components/projects/projects'
import Contato from './components/components/contato/contato'
import Footer from './components/components/footer/footer'
// ui
import Transition from './components/ui/transition/transition'

function App() {

  return (
    <>
      <Hero/>
      <Transition/>
      <Services/>
      <Projects/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
