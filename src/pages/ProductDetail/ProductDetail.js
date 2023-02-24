import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { FakeApiProducts } from '../../Data/FakeApiProducts'
import { CartContext } from '../../Context/CartContext';
import Sizes from '../../components/ProductDetail/Sizes'
import TopDetail from '../../components/ProductDetail/TopDetail'
import NotFound from '../../components/NotFound/NotFound';

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

  const handleStockSize = useCallback((size) => {
    if (size.includes('*')) {
      return ('')
    } else if (sizeSelected === size) {
      setSizeSelected('')
    } else {
      setSizeSelected(size)
    }
  }, [sizeSelected])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })


  return (
    <>
      <div className='nav-indicator'>
        <h4><Link to='/'>Inicio</Link> / <Link to='/productos'>Productos</Link> / <Link to={`/productos/${params.category}`}>{capitalizeFirstLetter(params.category)}</Link> / <strong>{productToDetail?.name}</strong></h4>
      </div>
      <div className='detail-container'>
        <TopDetail
          productToDetail={productToDetail}
        />
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
                  <div className='sizes-detail-container'>
                    <div className='nostock'><small>(Los talles con<strong>*</strong> están fuera de stock)</small></div>
                    <div className='sizes'>
                      <p>Talles:</p>
                      {
                        productToDetail?.sizes?.map((size) => {
                          return (
                            <Sizes
                              key={size}
                              size={size}
                              handleStockSize={handleStockSize}
                              sizeSelected={sizeSelected}
                            />
                          )
                        })
                      }
                    </div>
                  </div>
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
                  <Link 
                  className='categories-detail-link' 
                  to={`/productos/${productToDetail.category.toLowerCase()}`}
                  onClick={scrollToTop}
                  >{productToDetail.category}
                  </Link>
                </div>
              </>
              : <NotFound prop={'este producto'} />
          }
        </div>
      </div>


    </>
  )
}

export default ProductDetail