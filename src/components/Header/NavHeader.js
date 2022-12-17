import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FakeApiCategories } from '../../Data/FakeApiCategories';
import { FakeApiProducts } from '../../Data/FakeApiProducts';
import BigScreenMenu from './BigScreenMenu';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavHeader = () => {

    const [isClosed, setIsClosed] = useState(true);
    const [products, setProducts] = useState(FakeApiProducts)
    const [search, setSearch] = useState('')

    const handleChangeSearchbar = e => {
      setSearch(e.target.value)
      filtrar(e.target.value)
      console.log(e.target.value);
    } 
    const filtrar = (terminoBusqueda) => {
      let resulBusqueda = FakeApiProducts.filter((element) => {
        if(element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return element
        } else return ''
      })
      setProducts(resulBusqueda)
    }

  return (
    <div className='nav-div'>
          <div className='search-header' action='/search/' method='get'>
             <input
             type='search'
             autoComplete='off'
             name='searchbar'
             placeholder='Buscar producto'
             value={search}
             onChange={handleChangeSearchbar}
             >
             </input>
             <div className='container-searching'>
              <ul>
              {
                search ?
                   products.slice(0, 4).map((product) => {
                    return(
                      <Link 
                        onClick={() => setSearch('')}
                        to={`/productos/${product.category}/${product.id}`}>
                      <li className='item-searching' key={product.id}>
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
          <div className='button-nav'>
          <button
          onClick={() => setIsClosed(!isClosed)}
          >
            <p>PRODUCTOS</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className={`dropdown-menu ${isClosed ? "closed" : ""}`}>
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link to='/productos'>Todos los productos</Link></button>
             { 
               FakeApiCategories.map((category) => {
                 return (
                  <button
                  key={category.name}
                  onClick={() => setIsClosed(!isClosed)}
                  ><Link to={`/productos/${category.name.toLowerCase()}`}>{category.name}</Link></button>
                 )
               })
              }
          </div>
          </div>
           <BigScreenMenu />
        </div>
  )
}

export default NavHeader;