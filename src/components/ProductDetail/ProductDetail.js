import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { FakeApiProducts } from '../../Data/FakeApiProducts'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartContext } from '../../Context/CartContext';
import Sizes from './Sizes';

const ProductDetail = () => {

  const params = useParams()
  const [productToDetail, setProductToDetail] = useState()
  const [valor, setValor] = useState(1)
  const [sizeSelected, setSizeSelected] = useState('')
  const [errorSize, setErrorSize] = useState('')
  const { addItemToCart } = useContext(CartContext)

  const productView = FakeApiProducts.filter(product => product.id === parseInt(params.id))


  useEffect(() => {
    setProductToDetail(...productView)
  }, [productView])

  const productToCart = {
    name: '',
    price: 0,
    quantity: 0,
    size: ''
  }


  const setProductToCart = (() => {

    productToCart.id = productToDetail.id
    productToCart.image = productToDetail.images[0].url
    productToCart.name = productToDetail.name
    productToCart.size = `T(${sizeSelected})`
    productToCart.price = productToDetail.price
    productToCart.quantity = valor

    if (!sizeSelected || productToCart.size.includes('*')) {
      setErrorSize('Indique un talle válido')
    } else {
      setErrorSize('')
      addItemToCart(productToCart, valor)
      setSizeSelected('')
    }
  })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleStockSize = (size) => {
    if (size.includes('*')) {
      return ('')
    } else if (sizeSelected === size) {
      setSizeSelected('')
    } else {
      setSizeSelected(size)
    }
  }

  return (
    <>
      <div className='nav-indicator'>
        <h4><Link to='/'>Inicio</Link> / <Link to='/productos'>Productos</Link> / <Link to={`/productos/${params.category}`}>{capitalizeFirstLetter(params.category)}</Link> / <strong>{productToDetail?.name}</strong></h4>
      </div>
      {
        <div className='detail-container'>
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
          <div className='bottom-detail-container'>
            {
              productToDetail
                ? <>
                  <h3 className='detail-title'>
                    {productToDetail.name}
                  </h3>
                  <p className='detail-description'>
                    {productToDetail.description}
                  </p>
                  <div className='bottom-bottom-detail-container'>
                    <p className='detail-price'>$ {productToDetail.price}</p>
                      <Sizes 
                      productToDetail={productToDetail}
                      handleStockSize={handleStockSize}
                      sizeSelected={sizeSelected}
                      />
                    <div className='quantity-container'>
                      <p>Cantidad</p>
                      <button className="button-quantity" onClick={() => valor > 1 ? setValor(valor - 1) : valor}>-</button>
                      <span value={valor} className='input-quantity'>{valor}</span>
                      <button className="button-quantity" onClick={() => setValor(valor + 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className='button-detail'
                    onClick={setProductToCart}
                  >Agregar al carrito</button>
                  <div className='size-error-container'>
                    {
                      errorSize ? <p style={{ color: 'red', height: '40px' }}>{errorSize}</p> : <p style={{ height: '40px' }}></p>
                    }
                  </div>
                  <div className='category-in-detail'>
                    <p>Ver categorías:</p>
                    <Link className='categories-detail-link' to={`/productos/${productToDetail.category.toLowerCase()}`}>{productToDetail.category}</Link>
                  </div>
                </>
                : 'Error! Este producto no existe...'
            }
          </div>
        </div>
      }

    </>
  )
}

export default ProductDetail