import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slide.css'; // Your custom styles if any
import bidha from './New folder/men2.jpeg';
import brown from './New folder/women1.jpg';
import shoes from './New folder/images (5).jpg';
import tshirt from './New folder/images (6).jpg';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { image: bidha, text: 'Find out our best spring collection. Offering our best quality product in a Tulos Spring Collection' },
    { image: brown, text: 'Discover the elegance of our new brown series, crafted for perfection.' },
    { image: shoes, text: 'Step into style with our latest shoe collection, designed for comfort and durability.' },
    { image: tshirt, text: 'Experience the comfort of our premium t-shirt collection, perfect for any season.' },
  ];
    return (
      <div className="container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-text">
            <h1>TULOS SPRING COLLECTION</h1>
              {slide.text}
              <br></br>
              <button className='buybtn'>Buy Now</button>
              </div>
          </div>
        ))}
      </Slider>
      </div>
    );
  };
  
  export default ImageCarousel;
  