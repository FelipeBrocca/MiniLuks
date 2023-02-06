import React, { useContext } from 'react'
import { LoadingContext } from '../../Context/LoadingContext'
import MiniLuksLogo from '../../public/images/MiniLuks.webp'
import './Preloader.css'

const Preloader = () => {

    const {loading} = useContext(LoadingContext)

  return (
    <div className={loading ? 'body-loading' : 'body-loaded'} id="Loader2">
    <img id="loader-img" src={MiniLuksLogo} alt="logo-loader"
    className={loading ? 'loader-img' : 'img-loaded'}
    />
    <div className='fill-container'><div className='fill'></div></div>
  </div>
  )
}

export default Preloader