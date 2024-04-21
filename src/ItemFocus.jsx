import { Link } from "react-router-dom";

export default function ItemFocus({ item }) {
  const {name, purchaseDate, type, image} = item
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