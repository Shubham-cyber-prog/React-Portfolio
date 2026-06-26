import React from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Skill from './components/Skill'
import './App.css'

const App = () => {
  return (
    <div>
      <Home />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
