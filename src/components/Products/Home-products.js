import React from "react";
import { Link } from "react-router-dom";
import ProductsCard from "../Card/ProductsCard"
import { FakeApiProducts } from "../../Data/FakeApiProducts";

import '../../public/css/HomeProducts.css'
import Categories from "./Categories";

const HomeProducts = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <>
            <h2>Este verano elegí lo mejor para tu peque!</h2>
            <div className="home-products-container">
                <div className="categories-container">
                    <h3>Categorías principales</h3>
                    <Categories />
                </div>
                <div className="products-container">
                    <div className="cards-container">
                        {
                            FakeApiProducts.map((product) => {
                                if (product.id > FakeApiProducts.length - 12) {
                                    return (
                                        <ProductsCard
                                            key={product.id}
                                            id={product.id}
                                            title={product.name}
                                            price={product.price}
                                            images={product.images}
                                            category={product.category}
                                        >
                                            <div className='new-product'>NUEVO</div>
                                        </ProductsCard>
                                    )
                                } else return ''
                            })
                        }
                    </div>
                </div>
                <button
                    onClick={scrollToTop}
                ><Link to='/productos'>VER TODOS LOS PRODUCTOS</Link></button>
            </div>
        </>
    )
}

export default HomeProducts