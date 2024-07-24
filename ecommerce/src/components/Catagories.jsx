import React from 'react';
import './Catagories.css';
import men from './New folder/images (6).jpg';
import women from './New folder/images (7).jpg';
import kids from './New folder/images (8).jpg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const gomen = () => {
    navigate('/men');
  };

  return (
    <section className="M-categories">

      <div className="category">
    <img src={men} />
    <div className="category-content">
      <h3>Men</h3>
      <button onClick={gomen}>See Details</button>
    </div>
  </div>
  <div className="category">
    <img src={women}  />
    <div className="category-content">
      <h3>Women</h3>
      <button>See Details</button>
    </div>
  </div>

  <div className="category">
    <img src={kids} />
    <div className="category-content">
      <h3>Kids</h3>
      <button>See Details</button>
    </div>
    
  </div>
    </section>
  );
};



export default Categories;
