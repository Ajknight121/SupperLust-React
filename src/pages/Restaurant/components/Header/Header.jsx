// Header.js
import './Header.css';
// import shoppingCartImage from 'images/Shopping-Cart.png';
import { Link } from 'react-router-dom';

const Header = ({ name, totalQuantity, onCartClick }) => {
  return (
    <div className="header">
      <div className="header-content">
        <Link to={"/explore"}>
          <div className="back-arrow">&lt;</div>
        </Link>
        <h2>{name}</h2>
        <div className="cart-icon" onClick={onCartClick}>
          <img src={'images/Shopping-Cart.png'} alt="Shopping Cart" width={"50px"} height={"50px"}/>
          {totalQuantity > 0 && <div className="cart-count">{totalQuantity}</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;