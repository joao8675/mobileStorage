import React, { useState, useEffect } from 'react';
import s22UltraImg from '../assets/S22 ultra png.avif';
import Product from './product';
import Navbar from './Navbar';
import Modal from './Modal';
import Cart from './cart';
import './store.css';

const Store = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const products = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 799,
      image: s22UltraImg,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22',
      price: 699,
      image: s22UltraImg,
    },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="store-container">
      <Navbar toggleCart={toggleCart} />
      <div className="store">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            inCart={isInCart(product)}
          />
        ))}
      </div>
      <Modal show={isCartOpen} onClose={toggleCart}>
  <Cart cart={cart} removeFromCart={removeFromCart} />
</Modal>
    </div>
  );
};

export default Store;