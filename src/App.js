import { Routes, Route } from 'react-router-dom';
import React from 'react';

import {CartProvider} from './Context/CartContext'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import AllProducts from './pages/Store/AllProducts';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductsCategory from './components/Products/ProductsCategory';
import NotFound from './components/NotFound/NotFound';



function App() {

  return (
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
  );
}

export default App;

