import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route } from 'react-router-dom'


import About from './components/pages/About'
import Stores from './components/pages/Stores'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Christmas from './components/Christmas'

const App = () => {
 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/stores' element={<Stores />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/christmas' element={<Christmas />}></Route>
      </Routes>
    </div>
  )
}

export default App