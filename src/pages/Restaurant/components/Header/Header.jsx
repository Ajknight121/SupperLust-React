// Header.js
import React from 'react';
import './Header.css';
import shoppingCartImage from '../../assets/Shopping-Cart.png';

const Header = ({ totalQuantity, onCartClick }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="back-arrow">&lt;</div>
        <h1>I Dream of Falafel</h1>
        <div className="cart-icon" onClick={onCartClick}>
          <img src={shoppingCartImage} alt="Shopping Cart" />
          {totalQuantity > 0 && <div className="cart-count">{totalQuantity}</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;