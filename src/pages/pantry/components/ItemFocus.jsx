
export default function ItemFocus({
  item, setWhichPanel, mealCon, setMealCon,
  itemsExp, setItemsExp, itemsAbc, setItemsAbc }) {
  const { lifespan, quantity, name, imgFile, type } = item;
  return (
    <div className="panel">
      <div className="exit" onClick={() => setWhichPanel("")}>
        X
      </div>
      <div className="focus-header">
        <img src={imgFile} width={"25%"} height={"100%"} />
        <div className="focus-details">
          <ul>
            <li>{name}</li>
            <li>purchased: {lifespan} ago</li>
            <li>Quantity: {quantity} servings</li>
            <li>Categories: {type}</li>
          </ul>
        </div>
      </div>
      <div className="options">
        <button className="add" onClick={() => {
          setWhichPanel("");
          setMealCon([...mealCon.filter((a) => (a.name !== name)), item]);
        }}>
          Add To Meal
        </button>
        <button className="add" onClick={() => {
          setWhichPanel("");
          setItemsExp(itemsExp.filter((a) => (a.name !== name)));
          setItemsAbc(itemsAbc.filter((a) => (a.name !== name)));
        }}>
          Remove From Pantry
        </button>
        <button className="add" onClick={() => {
          setWhichPanel("");
          setItemsExp(itemsExp.map((a) => (a.name === name) ? Object.assign(a, { "quantity": "x0" }) : a));
          setItemsAbc(itemsAbc.map((a) => (a.name === name) ? Object.assign(a, { "quantity": "x0" }) : a));
        }}>
          Used Up
        </button>
      </div>
    </div >
  );
}