import React from 'react'


const Sizes = ({ size, sizeSelected, handleStockSize }) => {

    return (
        <button
            className={size === sizeSelected ? 'detail-sizes selected' : 'detail-sizes'}
            onClick={() => handleStockSize(size)}
            id={`sizes-detail-${size}`}
        >
            {size}
        </button>
    )
}

export default React.memo(Sizes)