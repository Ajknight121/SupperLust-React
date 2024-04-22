import Meal from "./Meal"

/* eslint-disable react/prop-types */

export default function Timeline({ meals, past, setWhichPanel, setSelMeal }) {
    return (
        <div className="timeline">
            {meals.map((meal) => {
                console.log(meal);
                return (<Meal meal={meal} past={past}
                    key={meal.id + "-" + meal.planned + "-" + meal.scheduled}
                    setWhichPanel={setWhichPanel} setSelMeal={setSelMeal} />)
            }
            )}
        </div>)
}