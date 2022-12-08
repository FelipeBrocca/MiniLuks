import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MiniLuksLogo from '../../public/images/MiniLuks.jpeg'

import usePopUp from '../../hooks/usePopUp';
import '../../public/css/Header.css';
import NavHeader from './NavHeader';
import MenuHeader from './MenuHeader';
import { CartContext } from '../../Context/CartContext';
import Cart from './Cart';

const Header = () => {

  const [productsInCartLength, setProductsInCartLength] = useState(0)
  const {cartItems} = useContext(CartContext)

  const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()
  
  useEffect(() => {
     setProductsInCartLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
     )
  }, [cartItems])



  return (
    <>
    <header>
      {
        popUpState ? backdropPopUp : ''
      }
      <div className='top-header'>
        <MenuHeader />
        <Link to='/' className='logo-a'>
          <img alt='logo-header' src={MiniLuksLogo} />
        </Link>
        <div className='cart-container'>
        <button 
        className='button-toCart'
        onClick={handlePopUp}
        >
          <FontAwesomeIcon className='icon' icon={faCartShopping} />
        </button>
        <span>{productsInCartLength}</span>
        <div className={`cart-display-container ${isClosed ? "closed" : ""}`}>
          <Cart
          popUpState={popUpState}
          handlePopUp={handlePopUp}
          cartItems={cartItems}
          />
        </div>
        </div>
      </div>
      <NavHeader />
    </header>
      </>
  )
}

export default Header;