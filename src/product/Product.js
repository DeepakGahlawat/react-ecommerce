// Product.js
import React from "react";
import { CartState } from "../Context";
import styles from "./product.module.css"; // Import the CSS module

const Product = ({ product }) => {
  const { cart, setCart } = CartState();

  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} />
      <div className="styles.images">
        
        <ul>
          {product.images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`${product.title} Image ${index + 1}`} />
            </li>
          ))}
        </ul>
        </div>
      {cart.includes(product) ? (
        <button onClick={() => setCart(cart.filter((c) => c.id !== product.id))}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => setCart([...cart, product])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
