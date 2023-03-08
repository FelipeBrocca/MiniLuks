import React, { lazy, Suspense } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import { Carousel } from 'react-responsive-carousel';
const Carousel = lazy(() => import('react-responsive-carousel').then(module => ({ default: module.Carousel })));


const TopDetail = ({ productToDetail }) => {
    return (
        <>
            <div className='top-detail-container'>
                <Suspense fallback={<Skeleton className='top-detail-skeleton' />} >
                    <Carousel
                        showStatus={false}
                        showArrows={false}
                    >
                        {
                            productToDetail?.images?.map((image) => {
                                return (
                                    <div className='image-detail-container' key={image.url}>
                                        <img
                                            src={image.url}
                                            alt='product'
                                            className='image-detail-in-carousel'
                                        />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Suspense>
            </div>
        </>
    )
}

export default React.memo(TopDetail)