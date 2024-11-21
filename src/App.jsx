import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import HomeLogin from './pages/HomeLogin';
import About from './pages/About';
import AllRecipe from './pages/AllRecipe';
import AddRecipe from './pages/AddRecipe';
// import './App.css'

function App() {


  return (
    <main>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/allrecipe" element={<AllRecipe />} />
        <Route path='/addrecipe' element={<AddRecipe />} />
      </Routes>


    </main>
  )
}

export default App
