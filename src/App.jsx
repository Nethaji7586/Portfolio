import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Home/>
  <Certificates/>
  <Projects/>
  <Contact/>
  <Footer/>
  
    </>
  )
}

export default App
