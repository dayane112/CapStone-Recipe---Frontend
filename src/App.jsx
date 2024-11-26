import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import NavBar from './components/Nav';
import About from './pages/About';
import AllRecipe from './pages/AllRecipe';
import AddRecipe from './pages/AddRecipe';
import OneRecipe from './pages/OneRecipe';
import './App.css'

function App() {


  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/allrecipe" element={<AllRecipe />} />
        <Route path='/addrecipe' element={<AddRecipe />} />
        <Route path='/allrecipe/:id' element={<OneRecipe />} />
      </Routes>
      <Footer />

    </main>
  )
}

export default App
