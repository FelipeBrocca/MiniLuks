import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { FakeApiProducts } from "../../Data/FakeApiProducts";
import Categories from '../../components/Products/Categories'
import ProductsCard from '../../components/Card/ProductsCard'

const ProductsCategory = () => {

  const params = useParams()

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className='nav-indicator'>
        <h4><Link to='/'>Inicio</Link> / <Link to='/productos'>Productos</Link> / <strong>{capitalizeFirstLetter(params.category)}</strong></h4>
      </div>
      <div className="home-products-container">
        <div className="categories-container">
          <h3>Categorías principales</h3>
          <Categories />
        </div>
        <div className="products-container">
          <div className="cards-container in-category">
            {
              FakeApiProducts.map((product) => {
                return (
                  params.category === product.category.toLowerCase() ?
                    <ProductsCard
                      key={product.id}
                      id={product.id}
                      title={product.name}
                      price={product.price}
                      images={product.images}
                      category={product.category}
                    />
                    : ''
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(ProductsCategory)