
export default function ItemFocus({
  item, setWhichPanel, mealCon, setMealCon,
  itemsExp, setItemsExp, itemsAbc, setItemsAbc,
  futureMeals, setFutureMeals }) {
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
          setFutureMeals(futureMeals.map((m) => {
            let present_ingred_filt = m.present_ingred.filter((a) => (a.name !== name));
            let was_present = m.present_ingred.length === present_ingred_filt.length;
            return Object.assign(m, {
              "present_ingred": present_ingred_filt,
              "missing_ingred": (was_present ? [...m.missing_ingred, Object.assign(item, { "quantity": "x0" })] : m.missing_ingred)
            });
          }));
        }}>
          Used Up
        </button>
      </div>
    </div >
  );
}