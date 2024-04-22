// Restaurant.jsx
import MenuGroup from "./components/MenuGroup/MenuGroup";
import "./Restaurant.css";
import Header from "./components/Header/Header";
import { useState, useContext } from "react";
import { SiteContext } from "../../Domain/SiteContext";
import ConfirmItem from '../ConfirmItem/components/ConfirmItem/ConfirmItem';

const Restaurant = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipItem, setTooltipItem] = useState("");
  const { currentRestaurant,cart, setCart } = useContext(SiteContext);
  const [selectedItem, setSelectedItem] = useState(null);
  let items = currentRestaurant.bags;
  let items2 = currentRestaurant.meals;
  const addToCart = (item) => {
    setSelectedItem(item);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {

        return [...prevCart, { ...item, quantity: 1, restaurant: currentRestaurant.name }];
      }
    });
    setShowTooltip(true);
    setTooltipItem(item.name);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const handleCartClick = () => {
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart";
  };

  return (
    <div className="page">
        {selectedItem ? (
        <ConfirmItem selectedItem={selectedItem} onBack={() => setSelectedItem(null)} />
      ) : (
        <>
          <Header
        name={currentRestaurant.name}
        totalQuantity={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={handleCartClick}
      />
          {showTooltip && (
        <div className="tooltip">
          1 {tooltipItem} has been added to the cart
        </div>
      )}
          <div className="menu-group-container">
            <MenuGroup
          groupName="Fresh Food Bags"
          items={items}
          addToCart={addToCart}
        />
          </div>
          <div className="menu-group-container">
            <MenuGroup
              groupName="Looking for something else?"
              groupText="Try one of these options!"
              items={items2}
              addToCart={addToCart}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Restaurant;
