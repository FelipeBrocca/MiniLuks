import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import { FakeApiProducts } from '../../Data/FakeApiProducts';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';



const SearchBar = () => {

    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(FakeApiProducts)

    const filtrar = (terminoBusqueda) => {
      let resulBusqueda = FakeApiProducts.filter((element) => {
        if(element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return element
        } else return ''
      })
      setProducts(resulBusqueda)
    }
    
    const handleChangeSearchbar = e => {
        setSearch(e.target.value)
        filtrar(e.target.value)
    } 


    return (
        <div className='search-header'>
            <input
                type='search'
                autoComplete='off'
                name='searchbar'
                placeholder='Buscar producto'
                value={search}
                onChange={handleChangeSearchbar}
            >
            </input>
            <div className={search ? 'container-searching' : ''}>
                <ul>
                    {
                        search ?
                            products.slice(0, 5).map((product) => {
                                return (
                                    <Link
                                        key={product.id}
                                        onClick={() => setSearch('')}
                                        to={`/productos/${product.category}/${product.id}`}>
                                        <li className='item-searching'>
                                            {product.name}
                                        </li>
                                    </Link>
                                )
                            })
                            : ''
                    }
                </ul>
            </div>
            <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon icon-searchbar' />
            </button>
        </div>
    )
}

export default React.memo(SearchBar)