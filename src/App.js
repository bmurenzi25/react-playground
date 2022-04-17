import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCard from './components/UserCard';
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:username' element={<UserCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
