import "./quickbites.css";
import { Link } from "react-router-dom";
import Small from "../../components/quickbites/Small";
import { useContext } from "react";
import { SiteContext } from "../../Domain/SiteContext";

export default function QuickBites() {
  let { restaurants, addItemToCart } = useContext(SiteContext);

  restaurants.forEach((store) => {
  store.meals.forEach((item) => item.restaurant = store.name)
  store.bags.forEach((item) => item.restaurant = store.name)})

  const nearRestaurants = restaurants.filter((restaurant) => {
    return restaurant.time <= 10;
  });
  const cheapRestaurants = restaurants.filter((restaurant) => {
    return restaurant.price <= 10;
  });

  return (
    <div className="page quick-bites">
      <div className="page-header">
        <Link to={"/explore"}>Explore</Link>
        <h2>Quick-Bite</h2>
        <Link to={"/"}>Pantry</Link>
      </div>
      <div className="categories">
        <div className="category">
          <h4>Orders Near You</h4>
          <div>
            {nearRestaurants.map((store, index) =>
              store.meals.map((item) => <Small key={store.name+index+ "." + index} meal={item} />)
            )}
          </div>
        </div>
        <div className="category">
          <h4>Low Cost Finds</h4>
          <div>
            {cheapRestaurants.map((store, index) =>
              store.meals.map((item) => <Small key={index+store.name+ ".index"} meal={item} />)
            )}
          </div>
        </div>
        <div className="category">
          <h4>Highly Rated</h4>
          <div>
            {restaurants.map((store, index) =>
              store.meals.map((item) => <Small key={index+ ".indexs"} meal={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
