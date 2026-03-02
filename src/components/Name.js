// src/components/Name.js
import React from 'react';
import product from '../data/product';

const Name = () => {
  return (
    <h2 className="product-title">
      {product.name}
    </h2>
  );
};

export default Name;
