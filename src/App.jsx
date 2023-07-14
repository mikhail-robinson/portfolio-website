import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <h1 className="font-bold text-2xl">Hello</h1>
    </div>
  )
}

export default App
