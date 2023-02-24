import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { CartProvider } from './Context/CartContext'

import FooterLazy from './components/Footer/LazyFooter'
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { LoadingProvider } from './Context/LoadingContext';
import Preloader from './components/Preloader/Preloader';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsCategory from './pages/ProductsCategory/ProductsCategory';
import StoreProducts from './pages/Store/StoreProducts';
import Policy from './pages/Policy/Policy';
const Header = React.lazy(() => import('./components/Header/Header'))


function App() {

  return (
    <LoadingProvider>
      <Preloader />
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route exact index element={<Home />} />
            <Route exact path='/productos' element={<StoreProducts />} />
            <Route exact path='/productos/:category/:id' element={<ProductDetail />} />
            <Route exact path='/productos/:category' element={<ProductsCategory />} />
            <Route exact path='/politica-de-cambio' element={<Policy />} />
            <Route exact path='*' element={<NotFound prop={'esta ruta'} />} />
          </Routes>
        </main>
        <FooterLazy />
      </CartProvider>
    </LoadingProvider>
  )
}

export default App;

