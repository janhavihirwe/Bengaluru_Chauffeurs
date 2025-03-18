import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Book from './components/booking/Book';
import Terms from './components/terms/Terms';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/terms' element={<Terms/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
