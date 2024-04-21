import { Link } from 'react-router-dom'
import "./pantry.css"

export default function Pantry() {


  return (
    <div>
      <div className="uppermost-nav">
        <div className="shape-1" id="explore-bttn">
          <img src="images/explore-button.png" />
          <Link to="/explore">Explore</Link>
        </div>
        <div className="shape-1" id="quick-bites-bttn">
          <img src="images/quick-bites-button.png" />
          <Link to="/quickbites">Quick<br />Bites</Link>
        </div>
        <span>Pantry</span>
        <img className="add-item" src="images/solid-brown-ellipse-3.png" />
        <Link className="add-item" to="/additem">Add Item</Link>
        <img id="bottom-oval" src="images/solid-brown-ellipse-1.png" />
        <img id="center-oval" src="images/solid-brown-shaded-ellipse-2.png" />
      </div>
      <div className="lower">

        <img id="pantry-background" src="images/pantry-background.png" />
        <img id="shelf-first" src="images/shelf-1.png" />
        <img id="shelf-second" src="images/shelf-2.png" />
        <img id="shelf-lower-1" src="images/shelf-3.png" />
        <img id="shelf-lower-2" src="images/shelf-3.png" />
      </div>
    </div>
  )
}

// const Pantry = () => {
//   return (
//     <div className='pantry'>
//       <div className='pantry-nav'>
//         <Link to="/explore">
//           Explore
//         </Link>
//         <br />
//         <Link to="/quickbites">
//           Quick Bites
//         </Link>
//         <br />
//         <Link to="/restaurant">
//           Restaurant view
//         </Link>
//         <br />
//         <Link to="/cart">
//           Checkout View
//         </Link>
//         <br />
//         <Link to="/panel">
//           Panel
//         </Link>
//       </div>
//       <div>Pantry</div>
//     </div>
//   )
// }
