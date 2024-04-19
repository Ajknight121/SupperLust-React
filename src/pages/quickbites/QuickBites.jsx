import "./quickbites.css"
import { Link } from 'react-router-dom'
import Small from "../../components/quickbites/Small"

export default function QuickBites() {

  return (
    <div className="page">
      <div className='page-header'>
        <Link to={"/explore"}>
          Explore
        </Link>
        <h2>Quick-Bite</h2>
        <Link to={"/"}>
          Pantry
        </Link>
      </div>
      <div className="categories">
        <div className="category">
          <h4>Orders Near You</h4>
          <div>
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
          </div>
        </div>
        <div className="category">
          <h4>Low Cost Finds</h4>
          <div>
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
          </div>
        </div>
        <div className="category">
          <h4>Highly Rated</h4>
          <div>
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
            <Small name="Spagetti bologia" />
          </div>
        </div>
      </div>
    </div>
  )
}
