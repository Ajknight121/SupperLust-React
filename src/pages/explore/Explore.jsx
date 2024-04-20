import "./exploreStyle.css"
import { Link } from 'react-router-dom'
import ExploreResult from './components/ExploreResult'
import { useContext } from "react"
import { SiteContext } from "../../Domain/SiteContext"

const Explore = () => {
  let {restaurants, setCurrentRestaurant} = useContext(SiteContext)
  return (
    <div className='explore'>
      <nav>
        <Link to="/explore">
          Explore
        </Link>
        <Link to="/">
          Pantry
        </Link>
      </nav>
      <div className='controls'>
        <input type='text' placeholder={"Search"}/>
        <br/>
        <div className="filters-label">Filters</div>
        <div className='filters'>
          <select name='Travel Time' defaultValue={10}>
            <option value={10}>10 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
          </select>
          <select name='Price' defaultValue={10}>
            <option value={10}>{"< $10"}</option>
            <option value={30}>{"< $30"}</option>
            <option value={60}>{"any"}</option>
          </select>
          <select name='Portion' defaultValue={10}>
            <option value={"Snacks"}>Snacks</option>
            <option value={"Meal"}>Meal</option>
            <option value={"Bulk"}>Bulk</option>
          </select>
        </div>
      </div>
      <div className='map'>

      </div>
      <div className="pulltab">
        <hr/>
      </div>
      <div className='explore-results'>
        {restaurants.map((store, index) => (
          <Link onClick={() => setCurrentRestaurant(store)} key={index + "-"} to={"/restaurant"}>
            <ExploreResult key={index} restaurant={store}/>
          </Link>
        ))}
      </div>
    </div>
    
  )
}

export default Explore