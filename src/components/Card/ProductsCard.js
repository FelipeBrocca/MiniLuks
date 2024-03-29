import React, { lazy, Suspense } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./ProductsCard.css"
import { Link } from 'react-router-dom'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))

const ProductsCard = ({ images, title, price, id, category, children }) => {
  return (
    <div className='card-container'>
      <div className='top-card'>
        {children}
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          {
            images.map((image) => {
              return (
                <Link className='image-link' to={`/productos/${category.toLowerCase()}/${id}`} key={image.url}>
                  <div className='image-container'>
                    <Suspense fallback={<Skeleton className='card-skeleton' />} >
                      <ImageLazy
                        src={image.url}
                        alt='product'
                        className='image-in-carousel'
                      />
                    </Suspense>
                  </div>
                </Link>
              )
            })
          }
        </Carousel>
      </div>
      <div className='bottom-card'>
        <h3 className='card-title'>{title}</h3>
        <span>$ {price}</span>
        <Link className='image-link' to={`/productos/${category.toLowerCase()}/${id}`}>Ver producto</Link>
      </div>
    </div>
  )
}

export default ProductsCard