import React from 'react'
import Home from './views/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './views/Acheter'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acheter' element={<ProductList />} />
      </Routes>
    </div>
  )
}
