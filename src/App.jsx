import React from 'react'
import Home from './views/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}
