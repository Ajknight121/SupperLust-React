import { Link } from "react-router-dom";
import PantryItem from "./pages/pantry/components/PantryItem";

export default function ItemFocus({
  item, itemType, setShowPanel, mealCon, setMealCon,
  itemsExp, setItemsExp, itemsAbc, setItemsAbc }) {
  const { lifespan, quantity, name, imgFile, type } = item;
  if (itemType == "created") {
    return (
      <div className="panel">
        <div className="exit" onClick={() => setShowPanel(false)}>
          X
        </div>
        <div className="focus-header">
          <div className="pantry-item"><img src={imgFile} /></div>
          <div className="focus-details">
            <h5>Future Meal</h5>
            <ul>
              <li>{name}</li>
              <li>Assembled: {lifespan} days ago</li>
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
        <div className="exit" onClick={() => setShowPanel(false)}>
          X
        </div>
        <div className="focus-header">
          <img src={imgFile} width={"25%"} height={"100%"} />
          <div className="focus-details">
            <ul>
              <li>{name}</li>
              <li>purchased: {lifespan} ago</li>
              {/* <li>Quantity: {lifespan} days ago</li> */}
            </ul>
          </div>
        </div>
        <div className="options">
          <button className="add" onClick={() => {
            setShowPanel(false);
            setMealCon([...mealCon.filter((a) => (a.name !== name)), item]);
          }}>
            Add To Meal
          </button>
          <button className="add" onClick={() => {
            setShowPanel(false);
            setItemsExp(itemsExp.filter((a) => (a.name !== name)));
            setItemsAbc(itemsAbc.filter((a) => (a.name !== name)));
          }}>
            Remove From Pantry
          </button>
          <button className="add" onClick={() => {
            setShowPanel(false);
            setItemsExp(itemsExp.map((a) => (a.name === name) ? Object.assign(a, { "quantity": "x0" }) : a));
            setItemsAbc(itemsAbc.map((a) => (a.name === name) ? Object.assign(a, { "quantity": "x0" }) : a));
          }}>
            Used Up
          </button>
        </div>
      </div >
    );
  }
}
