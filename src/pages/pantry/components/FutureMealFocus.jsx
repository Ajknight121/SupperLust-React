
export default function AddItemFocus({
  item, itemType, setShowPanel, mealCon, setMealCon,
  itemsExp, setItemsExp, itemsAbc, setItemsAbc }) {
  const { lifespan, quantity, name, imgFile, type } = item;
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
}