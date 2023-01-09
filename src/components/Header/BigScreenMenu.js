import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FakeApiCategories } from '../../Data/FakeApiCategories';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BigScreenMenu = () => {

    const [isClosed, setIsClosed] = useState(true);
   

  return (
    <div className='big-screen-nav'>
        <ul className='big-screen-menu'>
        <li className='option-bs-menu'>
            <Link
            to='/'
            >INICIO</Link>
        </li>
        <div className='button-bs-nav'>
          <button
          onClick={() => setIsClosed(!isClosed)}
          className='option-bs-menu'
          >
            <p className='option-bs-menu'>PRODUCTOS</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className={`dropdown-bs-menu ${isClosed ? "closed" : ""}`}>
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link 
              to='/productos'
              onClick={() => setIsClosed(!isClosed)}
              >Todos los productos</Link></button>
             { 
               FakeApiCategories.map((category) => {
                 return (
                  <button
                  key={category.name}
                  onClick={() => setIsClosed(!isClosed)}
                  ><Link 
                  to={`/productos/${category.name.toLowerCase()}`}
                  onClick={() => setIsClosed(!isClosed)}
                  >{category.name}</Link></button>
                 )
               })
              }
          </div>
          </div>
          {/* <li className='option-bs-menu'>
            <Link
            >CONTACTO</Link>
        </li> */}
        <li className='option-bs-menu'>
            <Link
            >POLÍTICA DE CAMBIO</Link>
        </li>
        {/* <li className='option-bs-menu'>
            <Link
            >QUIÉNES SOMOS</Link>
        </li> */}
          </ul>
</div>
  )
}

export default BigScreenMenu