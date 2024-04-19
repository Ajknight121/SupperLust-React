/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import dinnerPlate from "../../images/dinner-plate.png"

const Small = ({name}) => {
  return (
    <div className="small-item">
      <Link to={"/cart"}>
        <img src={dinnerPlate} width={"50px"} height={"50px"} />
        <div>
            {name}
        </div>
      </Link>
    </div>
  )
}

export default Small