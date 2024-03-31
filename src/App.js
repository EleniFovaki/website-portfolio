import React from 'react';
import './css/App.css';
import profilePic from '../src/images/IMG_2405.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <h2>Eleni Fovaki</h2>
          </header>
          <div className="content">
            <p className="description">Hello world! My name is Eleni Fovaki and I am a software engineer.
              Most of my time, you will find me working or travelling.
            </p>
            <img src={profilePic} alt="Profile" />
            <p className="additional-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat magna id lorem dictum, et consequat nisi efficitur.</p>
          </div>
        </div>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
