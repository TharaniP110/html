import React from 'react';
import './Header.css';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const goMen = () => {
    navigate('/men');
  };
  const gologin = () => {
    navigate('/Login');
  };


  return (
    <header>
      <div className="top-bar">
      <div className="moving-text">
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
        <p>Get 25% Off This Summer Sale. Grab It Fast!!</p>
      </div>
    </div>
      <nav>
        <ul>
        <li onClick={goMen}>Men</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>New & Featured</li>
          <li>Gift</li>
        </ul>
        <div className="logo">TULOS</div>
        <div className="actions">
          <ul>
          <li className='buttonll' onClick={gologin} >Login</li>
          <li className='buttonll'> <FaCartShopping /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
