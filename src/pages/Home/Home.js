import React from 'react';
import CarouselHome from '../../components/Carousel/CarouselHome';
import HomeProducts from '../../components/Products/Home-products';
import "./Home.css";


const Home = () => {
  return (
    <div className='home-main'>
      <CarouselHome />
      <HomeProducts />
    </div>
  )
}

export default Home;