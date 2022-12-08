import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';

import ProductsCard from "../Card/ProductsCard"
import { FakeApiProducts } from "../../Data/FakeApiProducts";
import { FakeApiCategories } from "../../Data/FakeApiCategories";

const ProductsCategory = () => {

  const params = useParams()

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <main>
    <div className='nav-indicator'>
    <h4><Link to='/'>Inicio</Link> / <Link to='/productos'>Productos</Link> / <strong>{capitalizeFirstLetter(params.category)}</strong></h4>
    </div>
            <div className="home-products-container">
            <div className="categories-container">
                    <h3>Categorías principales</h3>
                    <ul className="categories-list">
                    <Link className="categories-link" to='/productos'>Todos los productos</Link>
                        {
                            FakeApiCategories?.map((category) =>{
                                return (
                                  <Link className="categories-link" to={`/productos/${category.name.toLowerCase()}`} key={category.name}>{category.name}</Link>
                                )
                            })
                        }
                    </ul>
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
        </main>
  )
}

export default ProductsCategory