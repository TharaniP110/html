import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Men from './pages/men';
import Login from './components/login';
import Register from './components/reg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/men" element={<Men />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Reg" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
