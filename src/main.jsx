import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Byinshi from './components/Byinshi.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ishuri/:id" element={<Byinshi />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
