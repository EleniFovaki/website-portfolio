import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home'; // Import HomePage component
import Contact from './Contact'; // Import ContactPage component


function App() {
  console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Render HomePage component for the root path */}
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;