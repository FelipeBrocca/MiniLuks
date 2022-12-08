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
          <li className='option-bs-menu'>
            <Link
            >CONTACTO</Link>
        </li>
        <li className='option-bs-menu'>
            <Link
            >POLÍTICA DE CAMBIO</Link>
        </li>
        <li className='option-bs-menu'>
            <Link
            >QUIÉNES SOMOS</Link>
        </li>
          </ul>
</div>
  )
}

export default BigScreenMenu