import Presentation from './components/Presentation'
import './App.css'
import Story from './components/Story';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/Nav';
import Contact from './components/Contact';

function App() {


  return (
    <div>
      <NavBar />
    <main className="flex flex-col items-center">
      <Presentation />
      <Story/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    </div>
    
  )
}

export default App
