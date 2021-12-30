import React from 'react';
import { Header, Content, Footer } from './containers';
import { Product, Navbar } from './components';
import './App.css';

import ProductState from './context/product/ProductState';
import ShoppingCartState from './context/shoppingCart/ShoppingCartState';

function App() {
  return (
    <ProductState>
      <ShoppingCartState>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Content />
          <Footer />
        </div>
      </ShoppingCartState>
    </ProductState>
  );
}

export default App;
