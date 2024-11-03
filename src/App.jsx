// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
