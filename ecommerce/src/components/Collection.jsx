
import './Collection.css';
import loro from './New folder/images (1).jpg';
import white from './New folder/images (2).jpg';
import bidha from './New folder/images (3).jpg';
import brown from './New folder/images (4).jpg';
import shoes from './New folder/images (5).jpg';
import tshirt from './New folder/images (6).jpg';
import { IoMdStarOutline, IoIosStar } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Collection = () => {
  
  return (
    <section className="collection">
      <h2>NEW COLLECTION</h2>
      <p>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
      <div className='scroll'>
      <div className="products">
        <Product name="Loro Piana" price="$45" description="Slim Fit Striped Silk " img={loro} />
        <Product name="White Pants" price="$90" description="Slim Fit man pants" img={white} />
        <Product name="Bidha Glasses" price="$50" description="Black Glasses with luxury finishing" img={bidha} />
        <Product name="Brown Bomber" price="$52" description="Luxury unisex bomber jacket" img={brown} />
        <Product name="Leather Shoes Jack" price="$89" description="Man leather shoes" img={shoes} />
        <Product name="Grey Tshirt" price="$21" description="Unisex grey tshirt" img={tshirt} />
        <Product name="Loro Piana" price="$45" description="Slim Fit Striped Silk " img={loro} />
        <Product name="White Pants" price="$90" description="Slim Fit man pants" img={white} />
        <Product name="Bidha Glasses" price="$50" description="Black Glasses with luxury finishing" img={bidha} />
        <Product name="Brown Bomber" price="$52" description="Luxury unisex bomber jacket" img={brown} />
        <Product name="Leather Shoes Jack" price="$89" description="Man leather shoes" img={shoes} />
        <Product name="Grey Tshirt" price="$21" description="Unisex grey tshirt" img={tshirt} />
        <Product name="Loro Piana" price="$45" description="Slim Fit Striped Silk" img={loro} />
        <Product name="White Pants" price="$90" description="Slim Fit man pants" img={white} />
        <Product name="Bidha Glasses" price="$50" description="Black Glasses with luxury finishing" img={bidha} />
        <Product name="Brown Bomber" price="$52" description="Luxury unisex bomber jacket" img={brown} />
        <Product name="Leather Shoes Jack" price="$89" description="Man leather shoes" img={shoes} />
        <Product name="Grey Tshirt" price="$21" description="Unisex grey tshirt" img={tshirt} />

        </div>
      </div>
    </section>
  );
};

const Product = ({ name, price, description,img }) => (
  <div className="products" >
    <img src={img} />
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{price}</span>
    <br></br>
    <button>Buy Now</button>
    <br></br>
    <div className='ic'>
              <IoIosStar className='ico2' />
              <IoIosStar className='ico2' />
              <IoIosStar className='ico2' />
              <IoIosStar className='ico2' />
              <IoMdStarOutline className='ico3' />
      </div>
  </div>
);

export default Collection;