
import React, { useState } from 'react';
import cart from "./assets/cart-icon.svg";
import './CartWidget.css'; 

const CartWidget = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleCartClick = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <img src={cart} alt="Cart" />
      <span className="cart-item-count">{cartItemCount}</span>
    </div>
  );
}

export default CartWidget;