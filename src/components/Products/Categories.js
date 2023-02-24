import React from 'react'
import { Link } from 'react-router-dom'
import { FakeApiCategories } from '../../Data/FakeApiCategories'

const Categories = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <>
            <ul className="categories-list">
                <Link 
                className="categories-link" 
                to='/productos' 
                onClick={scrollToTop}>Todos los productos</Link>
                {
                    FakeApiCategories?.map((category) => {
                        return (
                            <Link 
                            className="categories-link" 
                            to={`/productos/${category.name.toLowerCase()}`} key={category.name}
                            onClick={scrollToTop}
                            >{category.name}
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default React.memo(Categories)