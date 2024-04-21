import { useContext } from "react"
import "./cart.css"
import CartItem from './components/CartItem'
// import leftArrow from "../../images/left-arrow.png"
// import star from "../../images/full-star.png"
import { Link } from "react-router-dom"
import { SiteContext } from "../../Domain/SiteContext"

// let currentTime = new Date()
// const exampleBag = {
//   itemName: "Bag A",
//   restaurantName: "Bofa Restaurant",
//   bagImg: "images/full-star.png",
//   isDelivery: true,
//   price: 4.20,
//   time: currentTime.toLocaleString('en-US', {
//     weekday: 'short',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true
//   })
// }



export default function Cart() {
  const {cart, setCart, setHistory} = useContext(SiteContext)
  let bags = cart.filter((item) => item.isBag == true);
  let meals = cart.filter((item) => item.isBag == false);
  console.log(cart)

  const handleFinalize = () => {
    setHistory((prev) => [...prev, cart])
    setCart([])
  }
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
            {bags.map((bag,index) => (<CartItem key={index + "cart"} item={bag}/>))}
          </div>
        </div>
        <div className='my-bags'>
          <h3>My Orders</h3>
          <div className='list'>
          {meals.map((bag,index) => (<CartItem key={index + "cart"} item={bag}/>))}
          </div>
        </div>
      </div>
      <Link to={"/"} onClick={() => handleFinalize()}>
        <button className="finalize">Finalize Order</button>
      </Link>
    </div>
  )
}

