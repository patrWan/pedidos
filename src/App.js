import React from 'react';
import { Header, Content, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

import ProductState from './context/product/ProductState';
import ShoppingCartState from './context/shoppingCart/ShoppingCartState';
import UserState from './context/user/UserState';

import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

function App() {
  return (
    <UserState>
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
    </UserState>
  );
}

export default App;
