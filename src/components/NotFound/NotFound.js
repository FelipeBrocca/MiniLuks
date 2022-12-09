import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import imgNotFound from '../../public/images/notfound.jpg'

const NotFound = () => {
  return (
    <main className='not-found-container'>
        <div className='text-not-found'>
            Error 404! <br/> Ups... Parece que esta ruta no existe, volvé a la <Link to='/'>Home acá</Link>
        </div>
        <div className='img-not-found'>
            <img src={imgNotFound} alt='not-found' />
        </div>
    </main>
  )
}

export default NotFound