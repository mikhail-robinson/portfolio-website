import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <h1 className="font-bold text-2xl">Hello</h1>
    </div>
  )
}

export default App
