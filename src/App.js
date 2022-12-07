import { Routes, Route } from 'react-router-dom';
import React from 'react';

import {CartProvider} from './Context/CartContext'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import AllProducts from './pages/Store/AllProducts';
import ProductDetail from './components/ProductDetail/ProductDetail';



function App() {

  return (
        <CartProvider>
        <Header />        
          <Routes>
              <Route index element={<Home />} />
              <Route path='/productos' element={<AllProducts />} />
              <Route path='/productos/:category/:id' element={<ProductDetail />} />
              <Route path='*' element={
                <main>
                  <h2>Nada por aca</h2>
                </main>
              } />
            </Routes>
            <Footer />     
        </CartProvider>
  );
}

export default App;

