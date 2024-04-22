import HorizontalScroll from "./HorizScroll";

export default function PastMealFocus({ meal, setWhichPanel }) {
    const { id, planned, scheduled, present_ingred, missing_ingred } = meal;
    return (
        <div className="panel">
            <div className="exit" onClick={() => setWhichPanel("")}>
                X
            </div>
            <div className="focus-header">
                <div className="focus-details">
                    <h5>Past Meal</h5>
                    <ul>
                        <li>Assembled: {planned} ago</li>
                        <li>Eaten: {scheduled} ago</li>
                    </ul>
                </div>
            </div>
            <h4>Ingredients</h4>
            <HorizontalScroll items={present_ingred} urgent={false}
                setSelItem={() => { }} setWhichPanel={() => { }} />
        </div>
    )
}