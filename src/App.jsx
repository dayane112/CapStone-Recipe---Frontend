import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
// import HomeLogin from './pages/HomeLogin';
import About from './pages/About';
import AllRecipe from './pages/AllRecipe';
import AddRecipe from './pages/AddRecipe';
import Edit_Delete_Recipe from './pages/EditDelete';
// import './App.css'

function App() {


  return (
    <main>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/allrecipe" element={<AllRecipe />} />
        <Route path='/addrecipe' element={<AddRecipe />} />
        <Route path='/Edit_Delete_Recipe' element={<Edit_Delete_Recipe />} />
      </Routes>
      <Footer />

    </main>
  )
}

export default App
