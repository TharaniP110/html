import React from 'react';
import './Wedding.css';
import wed from './New folder/wed.jpg';

const Wedding = () => {
  return (
    <section className="wedding">
      <img src={wed} alt="prewedding"  />
      <div className="content">
        <h2>WEAR TO WEDDING</h2>
        <p>A symphony of exquisite designs tailored for your unforgettable moments.</p>
        <button>See Details</button>
      </div>
    </section>
  );
};

export default Wedding;
