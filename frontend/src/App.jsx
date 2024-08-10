import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ForgotComponent from "./pages/forgot";
import LoginComponent from "./pages/login";
import RegisterComponent from "./pages/register"
import HomeComponent from "./pages/home"
import ResetComponent from "./pages/reset"
import "./index.css";

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LoginComponent />} />
        <Route path='/forgot-password' element={<ForgotComponent />} />
        <Route path='/reset-password' element={<ResetComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/home' element={<HomeComponent />} />
      </Routes>
    </div>
  )
}

export default App