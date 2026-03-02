// src/components/Image.js
import React from 'react';
import product from '../data/product';

const Image = () => {
  return (
    <div className="product-image-container">
      <img 
        src={product.image} 
        alt={product.alt || product.name}
        className="product-image"
      />
    </div>
  );
};

export default Image;
