import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Projects from './components/Projects'
import Skill from './components/Skill'
import './App.css'

const App = () => {
  return (
    <div>
      <Home />
      <About />
        <Skill />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
