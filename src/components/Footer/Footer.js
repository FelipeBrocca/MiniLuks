import React from 'react';
import {Link} from 'react-router-dom';

import mercadopago from '../../public/images/mercadopago@2x.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';

import '../../public/css/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
          <nav>
            <h5>NAVEGACION</h5>
              <ul>
                <li className='option-footer'>
                    <Link to='/'>Inicio</Link>
                </li>
                <li className='option-footer'>
                    <Link>Productos</Link>
                </li>
                <li className='option-footer'>
                    <Link>Contacto</Link>
                </li>
                <li className='option-footer'>
                    <Link>Politica de cambio</Link>
                </li>
                <li className='option-footer'>
                    <Link>Quienes somos</Link>
                </li>
              </ul>
          </nav>
          <div className='payment'>
              <h5>MEDIOS DE PAGO</h5>
              <div>
              <span>
                <img src={mercadopago} alt='payment' />
              </span>
              <span>Efectivo</span>
              <span>Transferencia</span>
              </div>
          </div>
          <div className='contact-footer'>
            <h5>CONTACTANOS</h5>
            <span><FontAwesomeIcon icon={faPhone} />2392-403148</span>
            <span><FontAwesomeIcon icon={faAt} />minilukskids@gmail.com</span>
          </div>
          <div className='socialmedia-footer'>
             <a href='https://www.instagram.com/mini.luks/?hl=es-la' target="_blanck">
              <div className='ig-logo-footer'>
                <div className='ig-logo-big'>
                </div>
                <div className='ig-logo-small'>
                </div>
              </div>
              <h3>Seguinos en Instagram!</h3>
             </a>
          </div>
        </div>
        <span>Design by<p>EffeBe</p></span>
    </footer>
  )
}

export default Footer
