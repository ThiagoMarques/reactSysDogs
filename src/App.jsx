import React from 'react';
import Api from './api/Api';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

const App = () => {
  return (
  <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Api />
        <Footer />
      </BrowserRouter>

    </div>
    );
};

export default App;
