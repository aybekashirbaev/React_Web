import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App