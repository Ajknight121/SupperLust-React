// ItemConfirmation.js
import React, { useState } from 'react';
import Header from '../Header/Header';
import ItemGroup from '../ItemGroup/ItemGroup';
import DeliveryPickUp from '../DeliveryAndPickUp/DeliveryAndPickUp';
import './ConfirmItem.css';


const ItemConfirmation = ({ selectedItem }) => {
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  const handleBackButtonClick = () => {
    onBack();
  };

  const onBack = () => {
    //Logic to go back to the menu

    window.history.back();
  }

  return (
    <div className="item-confirmation">
      <Header onBack={handleBackButtonClick} />
      <ItemGroup item={selectedItem} />
      <DeliveryPickUp
        deliveryOption={deliveryOption}
        onDeliveryOptionChange={handleDeliveryOptionChange}
      />
    </div>
  );
};

export default ItemConfirmation;