import React from 'react';
import  {Header, Content, Footer } from './containers';
import  {Product, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
