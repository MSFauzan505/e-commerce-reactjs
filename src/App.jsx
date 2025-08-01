import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App