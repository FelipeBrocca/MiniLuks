import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavHeader = () => {

    const [isClosed, setIsClosed] = useState(true);

  return (
    <div className='nav-div'>
          <form className='search-header' action='/search/' method='get'>
             <input
             type='search'
             autoComplete='off'
             name='searchbar'
             placeholder='Buscar'>
             </input>
             <button type='submit'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='icon icon-searchbar' />
             </button>
          </form>
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
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link>Verano</Link></button>
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link>Chalecos Flotadores</Link></button>
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link>Accesorios</Link></button>
              <button
              onClick={() => setIsClosed(!isClosed)}
              ><Link>Piyamas</Link></button>
          </div>
          </div>
        </div>
  )
}

export default NavHeader;