import React, { useState } from 'react'


const Sizes = ({productToDetail, sizeSelected, handleStockSize}) => {

    return (
        <div className='sizes-detail-container'>
            <div className='nostock'><small>(Los talles con<strong>*</strong> están fuera de stock)</small></div>
            <div className='sizes'>
                <p>Talles:</p>
                {productToDetail?.sizes?.map((size) => {
                    return (
                        <button
                            className={size === sizeSelected ? 'detail-sizes selected' : 'detail-sizes'}
                            key={size}
                            onClick={() => handleStockSize(size)}
                            id={`sizes-detail-${size}`}
                        >
                            {size}
                        </button>
                    )
                })
                }
            </div>
        </div>
    )
}

export default React.memo(Sizes)