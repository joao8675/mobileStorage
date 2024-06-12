import React, { useState } from 'react';

const Product = ({ product, addToCart, inCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (product) => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000); // 2 segundos
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button 
        onClick={() => handleAddToCart(product)} 
        className={`add-to-cart-button ${isAdding ? 'adding' : ''}`}
        disabled={isAdding}
      >
        {isAdding ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;