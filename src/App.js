import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { CartProvider } from './Context/CartContext'

import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import AllProducts from './pages/Store/AllProducts';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductsCategory from './components/Products/ProductsCategory';
import NotFound from './components/NotFound/NotFound';
import { LoadingProvider } from './Context/LoadingContext';
import Preloader from './components/Preloader/Preloader';
const Header = React.lazy(() => import('./components/Header/Header'))


function App() {

  return (
    <LoadingProvider>
      <Preloader />
      <CartProvider>
        <Header />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path='/productos' element={<AllProducts />} />
          <Route exact path='/productos/:category/:id' element={<ProductDetail />} />
          <Route exact path='/productos/:category' element={<ProductsCategory />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </LoadingProvider>
  )
}

export default App;

