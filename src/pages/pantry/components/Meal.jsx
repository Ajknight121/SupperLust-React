/* eslint-disable react/prop-types */

export default function Meal({ meal, past }) {
    let { id, planned, scheduled, present_ingred, missing_ingred } = meal;
    return (
        <div className="meal">
            <span className="above">{scheduled} {past ? "ago" : "from now"}</span>
            <img src="images/meal.png" />
        </div>
    );
}