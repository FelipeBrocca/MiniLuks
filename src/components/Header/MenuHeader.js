import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import usePopUp from '../../hooks/usePopUp';
import { FakeApiCategories } from '../../Data/FakeApiCategories'

const MenuHeader = () => {

  const [selectIsClosed, setSelectIsClosed] = useState(true);
  const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()

  const body = document.getElementById('body')
  popUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleMultipleEvent = () => {
    setSelectIsClosed(true)
    handlePopUp();
    scrollToTop();
  }
  return (
    <>
      {
        popUpState ? backdropPopUp : ''
      }
      <div className='menu-container'>
        <FontAwesomeIcon
          icon={faBars}
          className='icon'
          onClick={handlePopUp} />
        <p>Menú</p>
      </div>
      <div className={`dropsidebar-menu ${isClosed ? "closed" : ""}`}>
        <div className='top-sidebar-menu'>
          <FontAwesomeIcon
            icon={faX}
            className='icon-sidebar'
            onClick={handlePopUp}
          />
        </div>
        <ul>
          <li className='option-sidebar'>
            <Link
              to='/'
              onClick={() => {handlePopUp(); scrollToTop()}}
            >Inicio</Link>
          </li>
          <div className='select-nav'>
            <button
              onClick={() => setSelectIsClosed(!selectIsClosed)}
            >
              <p>Productos</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className={`dropdown-select-sidebar ${selectIsClosed ? "closed" : ""}`}>
              <Link
                onClick={handleMultipleEvent}
                to='/productos'
              >Todos los productos</Link>
              {
                FakeApiCategories?.map((category) => {
                  return (
                    <Link
                    onClick={handleMultipleEvent}
                      to={`/productos/${category.name.toLowerCase()}`}
                      key={category.name}
                    >{category.name}</Link>
                  )
                })
              }
            </div>
          </div>
          <li className='option-sidebar'>
            <Link
              to='/politica-de-cambio'
              onClick={() => {handlePopUp(); scrollToTop()}}
            >Política de cambio</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MenuHeader