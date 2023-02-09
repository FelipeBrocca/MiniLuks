import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../Context/CartContext';
import ReactWhatsapp from 'react-whatsapp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CartService = ({popUpState, handlePopUp, cartItems}) => {

  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)
  const [itemsForMessage, setItemsForMessage] = useState([])
  const body = document.getElementById('body')
  popUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')

  const {addItemToCart, subtractItemInCart, deleteItemInCart} = useContext(CartContext)

  useEffect(() => {
     setItemsForMessage([...cartItems])
    }, [cartItems])

  const messageToWA = itemsForMessage.map(item => `x${item.quantity} - ${item.name} - ${item.size} - $${item.price} c/u.`)
  const messageFriendlyString = messageToWA.join('\n')

  return (
    <>
    <div className='cart-top'>
        <h2>Carrito de compras</h2>
        <div
        className='close-cart'
        onClick={handlePopUp}
        >X</div>
    </div>
    <div className='cart-contain'>
      {
        !cartItems ? <h4>No hay productos</h4> :
        cartItems.map((item) => {
            return(
                <div className='item-in-cart' key={item.name + item.size}>
                    <div className='image-item-in-cart'>
                        <img src={item.image} alt={`${item.image}`} />
                    </div>
                    <div className='div2-cart'>
                    <p>{item.name}</p>
                    <div className='quantity-cart'>
                    <button
                     className='button-quantity-cart'
                    onClick={() => subtractItemInCart(item)}
                    >-</button>
                    <p>{item.quantity}</p>
                    <button
                     className='button-quantity-cart'
                    onClick={() => addItemToCart(item, 1)}
                    >+</button>
                    </div>
                    </div>
                    <p className='size-in-cart'>{
                      item.size === 'T(Sin especificar talle)' ? 'T(S/e)' : item.size
                    }</p>
                    <div className='div3-cart'>
                    <button
                    className='delete-in-cart'
                    onClick={() => deleteItemInCart(item)}
                    >
                      <FontAwesomeIcon 
                      icon={faTrash}
                      className='trash-icon-cart'
                      />
                    </button>
                    <p>${item.price * item.quantity}</p>
                    </div>
                </div>
            )
        })
      }
    </div>
    <div className='cart-bottom'>
        <h3>Total: ${total}</h3>
        <ReactWhatsapp 
        className='button-whatsapp'
        number='+54 9 2392 40-3148'
        message={`Hola! Quiero iniciar la compra de: \n\n\n${messageFriendlyString} \n\n\n Total: $${total}`}
        ><p>Iniciar compra</p>
          </ReactWhatsapp>
    </div>
    </>
  )
}

export default React.memo(CartService)