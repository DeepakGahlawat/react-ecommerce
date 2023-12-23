// Cart.js
// Cart.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../Context';
import Product from '../product/Product';
import styles from './Cart.module.css'; // Import the module CSS

const Cart = ({ login }) => {
  const { cart } = CartState();
  const [total, setTotal] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) navigate('/');
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [login, navigate, cart]);

  return (
    <div className={styles['cart-container']}>
      <h2 className={styles['cart-title']}>Shopping Cart</h2>

      <h3 className={styles['cart-total']}>Total Amount: ${total}</h3>
      <ul className={styles['cart-list']}>
        {cart.map((product) => (
          <li key={product.id} className={styles['cart-item']}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
