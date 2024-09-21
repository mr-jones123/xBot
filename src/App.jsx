import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Chat from './components/Chat.jsx';
import {Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
        <Route path="/" element = {<HeroSection/>} />
        <Route path="/chat" element ={<Chat/>} />
    </Routes>
  );  
}
export default App;
