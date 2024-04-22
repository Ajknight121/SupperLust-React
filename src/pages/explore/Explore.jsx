import "./exploreStyle.css";
import { Link } from "react-router-dom";
import ExploreResult from "./components/ExploreResult";
import { useContext, useState } from "react";
import { SiteContext } from "../../Domain/SiteContext";
const Explore = () => {
  let { restaurants, setCurrentRestaurant } = useContext(SiteContext);
  const [travelTime, setTravelTime] = useState(60);
  const [price, setPrice] = useState(100);
  const [portion, setPortion] = useState("Snacks");

  const handleTravelTimeChange = (event) => {
    setTravelTime(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePortionChange = (event) => {
    setPortion(event.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      restaurant.time <= travelTime && restaurant.price <= price
    );
  });

  const handleChoice = (store) => {
    setCurrentRestaurant(store)
    localStorage.setItem("store", JSON.stringify(store))
  }

  return (
    <div className="explore">
      <nav>
        <Link to="/explore">Explore</Link>
        <Link to="/">Pantry</Link>
      </nav>
      <div className="controls">
        <input type="text" placeholder={"Search"} />
        <br />
        <div className="filters-label">Filters</div>
        <div className="filters">
          <select
            name="Travel Time"
            value={travelTime}
            onChange={handleTravelTimeChange}
          >
            <option value={10}>10 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
          <select name="Price" value={price} onChange={handlePriceChange}>
            <option value={10}>{"< $10"}</option>
            <option value={20}>{"< $20"}</option>
            <option value={30}>{"< $30"}</option>
            <option value={100} defaultValue={true}>{"any"}</option>
          </select>
          <select name="Portion" value={portion} onChange={handlePortionChange}>
            <option value={"Snacks"}>Snacks</option>
            <option value={"Meal"}>Meal</option>
            <option value={"Bulk"}>Bulk</option>
          </select>
        </div>
      </div>
      <div className="map"></div>
      <div className="pulltab">
        <hr />
      </div>
      <div className='explore-results'>
        {filteredRestaurants.map((store, index) => (
          <Link onClick={() => handleChoice(store)} key={index + "-"} to={"/restaurant"}>
            <ExploreResult key={index} restaurant={store}/>
          </Link>
        ))}
        {filteredRestaurants.length == 0 ? <div>No Results</div> : ""}
      </div>
    </div>
  );
};

export default Explore;
