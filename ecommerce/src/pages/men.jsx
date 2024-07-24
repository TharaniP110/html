import React from 'react';
import Header from '../components/Header';
import Collection from '../components/Collection';
import Categories from '../components/Catagories';
import ProductList from '../components/SCROLL';
import Footer from '../components/Footer';
import Aside from '../components/aside';
import './men.css';

const Men = () => {
  return (
   <div >
    <Header/>
    <div className='flex'>
    <Aside />
    <div className='containers'>
        <ProductList />
        <ProductList />
      <Categories />
    </div>
      <Footer />
    </div>
    </div>
  );
};

export default Men;
