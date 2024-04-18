import "./cart.css"
import CartItem from './components/CartItem'
import leftArrow from "../../images/left-arrow.png"
import star from "../../images/full-star.png"
import { Link } from "react-router-dom"

let currentTime = new Date()
const exampleBag = {
  itemName: "Bag A",
  restaurantName: "Bofa Restaurant",
  bagImg: star,
  isDelivery: true,
  price: 4.20,
  time: currentTime.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

const Cart = () => {
  return (
    <div className='cart'>
      <div className='header'>
        <div className="back">
          <Link to={"/restaurant"}>
            <div className="back">&lt;</div>
          </Link>
        </div>
        <h2>My Shopping Cart</h2>
      </div>
      <div className='content'>
        <div className='my-bags'>
          <h3>My Bags</h3>
          <div className='list'>
            <CartItem item={exampleBag} />
            <CartItem item={exampleBag} />
          </div>
        </div>
        <div className='my-bags'>
          <h3>My Orders</h3>
          <div className='list'>
            <CartItem item={exampleBag} />
            <CartItem item={exampleBag} />
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="finalize">Finalize Order</button>
      </Link>
    </div>
  )
}

export default Cart
