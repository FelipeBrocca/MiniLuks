import React, { useContext, useState, useEffect } from 'react';
import '../../public/css/Header.css';
import { Link } from 'react-router-dom';
import { LoadingContext } from '../../Context/LoadingContext';
import MiniLuksLogo from '../../public/images/MiniLuks.webp'

import NavHeader from './NavHeader';
import MenuHeader from './MenuHeader';
import SearchBar from './SearchBar';
import CartContainer from './CartContainer';


const Header = () => {

  const [scrollState, setScrollState] = useState(false);

  const { setLoading } = useContext(LoadingContext)
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 150) {
            setScrollState(true)
        } else {
            setScrollState(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
}, [])

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })


  return (
    <>
      <header>
        <div className={!scrollState ? 'top-header' : 'top-header scroll'}>
          <MenuHeader />
          <div className='logo-container'>
            <Link to='/' className='logo-a'>
              <img 
              alt='logo-header' 
              src={MiniLuksLogo} 
              onLoad={handleLoading} 
              className={!scrollState ? 'logo-a-img' : 'logo-a-scroll'}
              onClick={scrollToTop}
              />
            </Link>
          </div>
          <div className='searchbar-container-bs'>
            <SearchBar />
          </div>
          <div className='cart-container'>
            <CartContainer />
          </div>
        </div>
        <NavHeader />
      </header>
    </>
  )
}

export default Header;