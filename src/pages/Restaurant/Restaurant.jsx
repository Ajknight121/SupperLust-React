// Restaurant.jsx
import React from 'react';
import MenuGroup from './components/MenuGroup/MenuGroup';
import './Restaurant.css';
import Header from './components/Header/Header';
import placeholderImage from './assets/PlaceHolder.jpg';
import { useState } from 'react';

const Restaurant = () => {
  const [cart, setCart] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipItem, setTooltipItem] = useState('');

  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setShowTooltip(true);
    setTooltipItem(item.name);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const items = [
    {
      id: 1,
      image: placeholderImage,
      name: 'Shawarma Wrap Bag',
      rating: 4,
      price: '$4.75',
      pickUpTime: '7:00 PM',
    },
    {
      id: 2,
      image: placeholderImage,
      name: 'Falafel Pita Bread Bag',
      rating: 2,
      price: '$4.75',
      pickUpTime: '7:00 PM',
    },
    {
      id: 3,
      image: placeholderImage,
      name: 'Couscous Bag',
      rating: 4,
      price: '$2.00',
      pickUpTime: '7:00 PM',
    },
  ];

  const items2 = [
    {
      id: 4,
      image: placeholderImage,
      name: 'Hummus Bag',
      rating: 3,
      price: '$2.00',
    },
    {
      id: 5,
      image: placeholderImage,
      name: 'Baba Ganoush Bag',
      rating: 4,
      price: '$2.00',
    },
    {
      id: 6,
      image: placeholderImage,
      name: 'Tabbouleh Bag',
      rating: 5,
      price: '$2.00',
    },
  ];

  const handleCartClick = () => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart';
  };

  return (
    <div className="App">
    <Header totalQuantity={cart.reduce((total, item) => total + item.quantity, 0)} onCartClick={handleCartClick} />
      {showTooltip && <div className="tooltip">1 {tooltipItem} has been added to the cart</div>}
      <div className="menu-group-container">
        <MenuGroup groupName="Fresh Food Bags" items={items} addToCart={addToCart} />
      </div>
      <div className="menu-group-container">
        <MenuGroup
          groupName="Looking for something else?"
          groupText="Try one of these options!"
          items={items2}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default Restaurant;