/* eslint-disable react/prop-types */


export default function CartItem( {item} ) {
    let {name, image, isDelivery = true, price, pickUpTime, restaurant} = item
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <div>
          {name} - {restaurant}
        </div>
        <div className="cart-info-content">
          <img src={image} height={"70px"} width={"70px"} />
          <div>
            <ul>
              <li>{isDelivery ? "Delivery" : "Pickup"}</li>
              <li>{price}</li>
              <li>{pickUpTime}</li>
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
