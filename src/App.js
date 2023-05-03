import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Quote from './Components/Quote';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Display" element={<Quote category="happiness" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
