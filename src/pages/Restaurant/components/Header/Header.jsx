// Header.js
import React from 'react';
import './Header.css';
import shoppingCartImage from '../../assets/Shopping-Cart.png';
import { Link } from 'react-router-dom';

const Header = ({ totalQuantity, onCartClick }) => {
  return (
    <div className="header">
      <div className="header-content">
        <Link to={"/explore"}>
          <div className="back-arrow">&lt;</div>
        </Link>
        <h2>I Dream of Falafel</h2>
        <div className="cart-icon" onClick={onCartClick}>
          <img src={shoppingCartImage} alt="Shopping Cart" width={"50px"} height={"50px"}/>
          {totalQuantity > 0 && <div className="cart-count">{totalQuantity}</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;