/* eslint-disable react/prop-types */

export default function Meal({ meal, past, setWhichPanel, setSelMeal }) {
    let { id, planned, scheduled, present_ingred, missing_ingred } = meal;
    return (
        <div className="meal" onClick={() => {
            setWhichPanel();
            setSelMeal(meal);
        }}>
            <span className="above">{scheduled} {past ? "ago" : "from now"}</span>
            <img src="images/meal.png" />
        </div>
    );
}