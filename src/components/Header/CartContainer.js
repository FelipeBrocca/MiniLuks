import React, { useContext, useEffect, useState } from 'react'
import usePopUp from '../../hooks/usePopUp';
import CartService from './CartService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';




const CartContainer = () => {

    const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()
    const [productsInCartLength, setProductsInCartLength] = useState(0)
    const { cartItems } = useContext(CartContext)


    useEffect(() => {
        setProductsInCartLength(
            cartItems.reduce((previous, current) => previous + current.quantity, 0)
        )
    }, [cartItems])

    return (
        <>
            {
                popUpState ? backdropPopUp : ''
            }
            <button
                className='button-toCart'
                onClick={handlePopUp}
            >
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
            </button>
            <span>{productsInCartLength}</span>
            <div className={`cart-display-container ${isClosed ? "closed" : ""}`}>
                <CartService
                    popUpState={popUpState}
                    handlePopUp={handlePopUp}
                    cartItems={cartItems}
                />
            </div>
        </>
    )
}

export default React.memo(CartContainer)