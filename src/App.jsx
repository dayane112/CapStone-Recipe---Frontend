import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import HomeLogin from './pages/HomeLogin';
import About from './pages/About';
import AllRecipe from './pages/AllRecipe';
import AddRecipe from './pages/AddRecipe';
import EditDeleteRecipe from './pages/EditDelete';
// import './App.css'

function App() {


  return (
    <main>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/allrecipe" element={<AllRecipe />} />
        <Route path='/addrecipe' element={<AddRecipe />} />
        <Route path='/addrecipe' element={<EditDeleteRecipe />} />
      </Routes>


    </main>
  )
}

export default App
