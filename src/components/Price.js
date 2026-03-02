// src/components/Price.js
import React from 'react';
import product from '../data/product';

const Price = () => {
  return (
    <div className="product-price">
      <span className="price-tag">{product.price}</span>
      <span className="price-note">TTC</span>
    </div>
  );
};

export default Price;
