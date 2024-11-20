import { useState } from 'react';

import NavLogin from './components/navLogin';
import { Route, Routes } from 'react-router-dom';
import HomeNotLogin from './pages/HomeNotLogin';
import HomeLogin from './pages/HomeLogin';
import About from './pages/About';
import AllRecipe from './pages/AllRecipe';
// import './App.css'

function App() {


  return (
    <main>
      
      
      <Routes>
        <Route path='/' element={<HomeNotLogin />}/>
        <Route path='/home' element={<HomeLogin />}/>
        <Route path="/about" element={<About />} />
        <Route path="/allrecipe" element={<AllRecipe />} />
      </Routes>


    </main>
  )
}

export default App
