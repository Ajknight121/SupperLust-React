
import React from 'react';
import './Header.css';

const Header = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="item-confirmation-header">
      <button className="back-button" onClick={handleBackClick}>
        &lt; Back
      </button>
      <h1>Confirm Order</h1>
      <div></div>
    </div>
  );
};

export default Header;