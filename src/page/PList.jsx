import React, { useEffect, useState } from 'react';

const PList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Make an API call to fetch the products
    fetch('http://localhost:8080/product')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          
          <img src={`http://localhost:8080/product/getimage/${product.id}`} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default PList;