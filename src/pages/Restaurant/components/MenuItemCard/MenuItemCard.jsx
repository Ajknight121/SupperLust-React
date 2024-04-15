// MenuItemCard.js
import React from 'react';
import './MenuItemCard.css';

const MenuItemCard = ({ item, addToCart }) => {
  const { image, name, rating, price, pickUpTime } = item;

  const renderStars = () => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '★'.repeat(5 - rating);

    return (
      <div className="item-rating">
        <span className="filled-star">{filledStars}</span>
        <span className="empty-star">{emptyStars}</span>
      </div>
    );
  };

  return (
    <div className="menu-item-card">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <h3>{name}</h3>
        <p>Rating: {renderStars()}</p>
        <p>
          Price: <span className="price">{price}</span>
        </p>
        {pickUpTime && <p>Pick-Up Time: {pickUpTime}</p>}
      </div>
      <div className="add-button" onClick={() => addToCart(item)}>
        +
      </div>
    </div>
  );
};

export default MenuItemCard;