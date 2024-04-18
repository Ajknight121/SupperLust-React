/* eslint-disable react/prop-types */


export default function CartItem( {item} ) {
    let {itemName, restaurantName, bagImg, isDelivery, price,time} = item
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <div>
          {itemName} - {restaurantName}
        </div>
        <div className="cart-info-content">
          <img src={bagImg} height={"70px"} width={"70px"} />
          <div>
            <ul>
              <li>{isDelivery ? "Delivery" : "Pickup"}</li>
              <li>${price}</li>
              <li>{time}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cart-item-buttons">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}
