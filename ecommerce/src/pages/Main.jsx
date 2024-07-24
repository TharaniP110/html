import React from 'react';
import './Main.css';
import Header from '../components/Header';
import Collection from '../components/Collection';
import Wedding from '../components/Wedding';
import Categories from '../components/Catagories';
import Footer from '../components/Footer';
import ImageSlider from '../components/slide';
import ProductList from '../components/SCROLL';

const Main = () => {
  return (
   <div>
    <Header/>
    <ImageSlider/>
    <ProductList />
      <Wedding />
      <Categories />
      <Footer />
      
    </div>
  );
};

export default Main;
