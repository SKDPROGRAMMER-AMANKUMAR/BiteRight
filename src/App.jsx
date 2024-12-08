import { useState } from 'react'
import Home from './components/Home'
import Success from './components/Success'
import NotFound from './components/NotFound'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  
  return (
    
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/success" element={<ProtectedRoute element={<Success/>} />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>   
  )
}

export default App
