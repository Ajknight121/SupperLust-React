import { Link } from "react-router-dom";
import PantryItem from "./pages/pantry/components/PantryItem";

export default function ItemFocus({ item }) {
  const {name, purchaseDate, type, image, itemType} = item

  if (itemType == "created") {
    return (
      <div className="panel">
        <Link to={"/"}>
          <div className="exit" onClick={() => console.log("Close rating panel")}>
            X
          </div>
        </Link>
        <div className="focus-header">
          <img src={image} width={"25%"} height={"100%"}/>
          <div className="focus-details">
            <h5>Future Meal</h5>
            <ul>
              <li>{name}</li>
              <li>Assembled: {purchaseDate} days ago</li>
              {item.eaten ? <li>Eaten: {item.eatenAgo} Days ago</li> : <li>Scheduled for: {item.planDate}</li>}
            </ul>
          </div>
        </div>
        <div className="Ingredients">
          {item.ingredients.map((item) => <PantryItem key={item} />)}
        </div>
        <div className="options">
          {item.eaten ? "" :
            <Link to={"/"}>
              <button className="add">
                Mark as Complete
              </button>
            </Link>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="panel">
        <Link to={"/"}>
          <div className="exit" onClick={() => console.log("Close rating panel")}>
            X
          </div>
        </Link>
        <div className="focus-header">
          <img src={image} width={"25%"} height={"100%"}/>
          <div className="focus-details">
            <ul>
              <li>{name}</li>
              <li>purchased: {purchaseDate} days ago</li>
              {/* <li>Quantity: {purchaseDate} days ago</li> */}
              <li>Type: {type}</li>
            </ul>
          </div>
        </div>
        <div className="options">
          <Link to={"/"}>
            <button className="add" onClick={() => console.log("add to meal")}>
              Add To Meal
            </button>
          </Link>
          <Link to={"/"}>
            <button className="add" onClick={() => console.log("add to meal")}>
              Remove From Pantry
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
