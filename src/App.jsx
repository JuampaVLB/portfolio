import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

// Components

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>       */}
        <Navbar />
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> */}
        {/* </BrowserRouter>  */}
    </div>
  )
}

export default App
