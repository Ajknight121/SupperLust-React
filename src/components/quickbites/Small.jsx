/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Link } from "react-router-dom"
import { SiteContext } from "../../Domain/SiteContext"
// import dinnerPlate from "images/dinner-plate.png"

const Small = ({meal}) => {
  const {addItemToCart} = useContext(SiteContext)
  return (
    <div className="small-item">
      <Link to={"/cart"} onClick={() => addItemToCart(meal)}>
        <img src={meal.image} width={"50px"} height={"50px"} />
        <div>
            {meal.name}
        </div>
      </Link>
    </div>
  )
}

export default Small