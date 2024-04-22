// ItemConfirmationItemGroup.js
import React from 'react';
import ItemConfirmationItemCard from '../ItemCard/ItemCard';
import './ItemGroup.css';

const ItemGroup = ({ item }) => {
  return (
    <div className="item-confirmation-item-group">
      <ItemConfirmationItemCard item={item} />
    </div>
  );
};

export default ItemGroup;