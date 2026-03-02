// src/components/Description.js
import React from 'react';
import product from '../data/product';

const Description = () => {
  return (
    <p className="product-description">
      {product.description}
    </p>
  );
};

export default Description;
