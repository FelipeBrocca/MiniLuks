import React from 'react';
import {Link} from 'react-router-dom';

import ProductsCard from "../../components/Card/ProductsCard"
import { FakeApiProducts } from "../../Data/FakeApiProducts";
import Categories from '../../components/Products/Categories';

const StoreProducts = () => {
  return (
    <>
    <div className='nav-indicator'>
    <h4><Link to='/'>Inicio</Link> / <strong>Productos</strong></h4>
    </div>
            <div className="home-products-container">
            <div className="categories-container">
                    <h3>Categorías principales</h3>
                    <Categories />
                </div>
                <div className="products-container">
                    <div className="cards-container">
                    {
                            FakeApiProducts.map((product) => {
                                return (
                                   <ProductsCard
                                   key={product.id}
                                   id={product.id}
                                   title={product.name}
                                   price={product.price}
                                   images={product.images}
                                   category={product.category}
                                   />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
  )
}

export default StoreProducts