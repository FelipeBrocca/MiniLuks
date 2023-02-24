import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {carouselData} from './CarouselData'
import './Carousel.css'


const CarouselHome = () => {
  return (
    <div className='carousel-container'>
        <Carousel
        autoPlay={true}
        interval={10000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        dynamicHeight={true}
        showStatus={false}
        >
           {
            carouselData?.map((slide) => {
                return (
                    <div key={slide.title} className='image-carousel-container'>
                        <img src={slide.image} alt="imgSlide" className='image-slider' />
                    </div>
                )
            })
           }
        </Carousel>
    </div>
  )
}

export default CarouselHome