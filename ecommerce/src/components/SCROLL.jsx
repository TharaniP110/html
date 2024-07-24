import React, { useState } from 'react';
import product1 from './New folder/images.jpg';
import product2 from './New folder/images.jpg';
import product3 from './New folder/images.jpg';
import product4 from './New folder/images.jpg';
import product5 from './New folder/images (4).jpg';
import product6 from './New folder/images (2).jpg';
import { IoMdStarOutline, IoIosStar } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Scrll.css';

const products = [
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product1 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product2 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product3 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product4 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product5 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product6 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product1 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product2 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product3 },
  { name: 'Lorem Ipsum Simply', dis: 'Black Glasses with luxury finishing', price: '$95', image: product4 },
];

function ProductList() {
  const [position, setPosition] = useState(0);
  const productWidth = 200;
  const maxPosition = -(productWidth * products.length);

  const handlePrevClick = () => {
    setPosition(prevPosition => Math.min(prevPosition + productWidth, 0));
  };

  const handleNextClick = () => {
    setPosition(prevPosition => Math.max(prevPosition - productWidth, maxPosition));
  };

  return (
    <div className="product-list-container">
      <h2>NEW COLLECTION</h2>
      <p>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
      
      <div className="product-list-wrapper">
        <div className="products" style={{ transform: `translateX(${position}px)`, transition: 'transform 0.5s ease' }}>
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.dis}</p>
              <h3>{product.price}</h3>
              <button>Buy Now</button>
              <div className='ic'>
                <IoIosStar className='ico2' />
                <IoIosStar className='ico2' />
                <IoIosStar className='ico2' />
                <IoIosStar className='ico2' />
                <IoMdStarOutline className='ico3' />
              </div>
            </div>
          ))}
        </div>
      <div className="arrows">
        <IoIosArrowBack className='iconaa' onClick={handlePrevClick} />
        <IoIosArrowForward className='iconaa' onClick={handleNextClick} />
      </div>
      </div>
    </div>
  );
}

export default ProductList;
