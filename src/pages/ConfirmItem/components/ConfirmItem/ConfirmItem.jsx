// ItemConfirmation.js
import { useState } from 'react';
import ItemGroup from '../ItemGroup/ItemGroup';
import DeliveryPickUp from '../DeliveryAndPickUp/DeliveryAndPickUp';
import './ConfirmItem.css';


const ItemConfirmation = ({ selectedItem, onBack, handleSubmit }) => {
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };


  const addItem = () => {
    handleSubmit(selectedItem)
  }

  return (
    <div className="item-confirmation">
      <div className="item-confirmation-header">
      <button className="back-button" onClick={() => onBack()}>
        &lt; Back
      </button>
      <h1>Confirm Order</h1>
      <div></div>
    </div>
      <ItemGroup item={selectedItem} />
      <DeliveryPickUp
        deliveryOption={deliveryOption}
        onDeliveryOptionChange={handleDeliveryOptionChange}
        handleSubmit={addItem}
      />
    </div>
  );
};

export default ItemConfirmation;