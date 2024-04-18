/* eslint-disable react/prop-types */
import "../exploreStyle.css"
import burger from "../../../images/Cheeseburger 1.png"
export default function ExploreResult( {restaurant} ) {
    const {name, price, type, distance} = restaurant
  return (
    <div className="explore-result">
        <div>{name} ${price}</div>
        <div>{type} Distance: {distance} mi</div>
        <div className="images">
          <img width={"90px"} height={"100%"} src={burger}/>
          <img width={"90px"} height={"100%"} src={burger}/>
        </div>
    </div>
  )
}
