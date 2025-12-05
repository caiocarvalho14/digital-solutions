import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components
import Hero from './components/components/hero/hero'
import Services from './components/components/Services/Services'
import Projects from './components/components/projects/projects'
// ui
import Transition from './components/ui/transition/transition'

function App() {

  return (
    <>
      <Hero/>
      <Transition/>
      <Services/>
      <Projects/>
    </>
  )
}

export default App
