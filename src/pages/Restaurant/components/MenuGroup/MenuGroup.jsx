// MenuGroup.js
import '../../Restaurant.css';
import MenuItemCard from '../MenuItemCard/MenuItemCard';

const MenuGroup = ({ groupName, groupText, items, addToCart }) => {
  return (
    <div className="menu-group">
      <div className="group-header">
        <div className="group-name">{groupName}</div>
        <div className="group-text">{groupText}</div>
      </div>
      <div className="menu-items">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuGroup;