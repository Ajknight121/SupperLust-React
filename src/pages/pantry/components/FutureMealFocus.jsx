import HorizontalScroll from "./HorizScroll";

export default function FutureMealFocus({
  meal, setWhichPanel, pastMeals, setPastMeals, futureMeals, setFutureMeals }) {
  const { id, planned, scheduled, present_ingred, missing_ingred } = meal;
  return (
    <div className="panel">
      <div className="exit" onClick={() => setWhichPanel("")}>
        X
      </div>
      <div className="focus-header">
        <div className="focus-details">
          <h5>Future Meal</h5>
          <ul>
            <li>Assembled: {planned} ago</li>
          </ul>
        </div>
      </div>
      <h4>Ingredients</h4>
      <HorizontalScroll items={present_ingred} urgent={false}
        setSelItem={() => { }} setWhichPanel={() => { }} />
      <h4>Missing Items</h4>
      <HorizontalScroll items={missing_ingred} urgent={false}
        setSelItem={() => { }} setWhichPanel={() => { }} />
      <button onClick={() => {
        setFutureMeals(
          [...futureMeals.filter((m) =>
            (!(m.id === id && m.planned === planned && m.scheduled === scheduled)))]);
        setPastMeals(
          [...pastMeals, meal]
        );
        setWhichPanel("");
      }}>Mark as Complete</button>
    </div>)
}