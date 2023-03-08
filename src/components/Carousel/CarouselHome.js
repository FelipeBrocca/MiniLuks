import React, { lazy, Suspense } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import slide1 from '../../public/images/1.webp'
import slide2 from '../../public/images/2.webp'
import slide3 from '../../public/images/3.webp'

const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))

const CarouselHome = () => {
  return (
    <div className='carousel-container'>
      <Carousel
        autoPlay={false}
        interval={10000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        dynamicHeight={true}
        showStatus={false}
      >
        <div className='image-carousel-container'>
          <Suspense fallback={<Skeleton className='skeleton-carousel' />}>
            <ImageLazy
              src={slide1}
              alt='imgSlide'
              className='image-slider'
            />
          </Suspense>
        </div>
        <div className='image-carousel-container'>
          <Suspense fallback={<Skeleton className='skeleton-carousel' />}>
            <ImageLazy
              src={slide2}
              alt='imgSlide'
              className='image-slider'
            />
          </Suspense>
        </div>
        <div className='image-carousel-container'>
          <Suspense fallback={<Skeleton className='skeleton-carousel' />}>
            <ImageLazy
              src={slide3}
              alt='imgSlide'
              className='image-slider'
            />
          </Suspense>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselHome