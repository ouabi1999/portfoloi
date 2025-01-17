import React from 'react'
import Header from "./components/Header/Header"
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        
        </div>
  )
}

export default App