import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ForgotComponent from "./pages/forgot";
import LoginComponent from "./pages/login";
import "./index.css";

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LoginComponent />} />
        <Route path='/forgot' element={<ForgotComponent />} />
      </Routes>
    </div>
  )
}

export default App