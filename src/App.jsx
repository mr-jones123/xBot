import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'
import { Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
        <Route path="/" element = {<HeroSection/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
    </Routes>
  );  
}
export default App;
