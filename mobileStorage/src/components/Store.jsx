import React, { useState, useEffect } from 'react';
import s22UltraImg from '../assets/S22 ultra png.avif';
import Product from './product';
import './store.css';
import Cart from './cart';


const Store = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Recupera o estado do carrinho do localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Salva o estado do carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const products = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 799,
      image: s22UltraImg
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22',
      price: 699,
      image: s22UltraImg
    },
    // Adicione mais produtos aqui
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div className="store-container">
      <div className="store">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            inCart={isInCart(product)}
          />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Store;