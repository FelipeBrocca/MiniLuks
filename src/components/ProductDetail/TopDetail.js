import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopDetail = ({productToDetail}) => {
    return (
        <>
            <div className='top-detail-container'>
                <Carousel
                    showStatus={false}
                    showArrows={false}
                >
                    {
                        productToDetail?.images?.map((image) => {
                            return (
                                <div className='image-detail-container' key={image.url}>
                                    <img src={image.url} alt='product' className='image-detail-in-carousel' />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default React.memo(TopDetail)