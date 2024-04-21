import Meal from "./Meal"

/* eslint-disable react/prop-types */

export default function Timeline({ meals, past }) {
    return (
        <div className="timeline">
            {meals.map((meal) =>
            (<Meal meal={meal} past={past}
                key={toString(meal.id) + "-" + meal.planned + "-" + meal.scheduled} />)
            )}
        </div>)
}