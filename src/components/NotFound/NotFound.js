import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import notFoundImg from '../../public/images/notFound-img.webp'

const NotFound = ({prop}) => {
  return (
    <div className='not-found-main'>
        <div className='text-not-found'>
            Error 404! <br/> Ups... Parece que {prop} no existe, volvé a la <Link to='/'>Home acá</Link>
        </div>
        <img src={notFoundImg} alt='not-found' /> 
    </div>
  )
}

export default NotFound