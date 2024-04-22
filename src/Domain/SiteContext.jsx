/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {BigRicoPizza, IDOF, bear, SandvichEtc, RoseliaBakery, RamenWRobbie, ZConfections, GumasteCoffee} from "./foods.js"

// const CurrentDay = new Date("4/15/2024");

export const SiteContext = createContext();
let ingredientExample = {
  name: "Potato",
  expiration: new Date("4/15/2024"),
};
let foods = [ingredientExample, ingredientExample, ingredientExample];

let restaurants = [
  IDOF,
  bear,
  BigRicoPizza,
  SandvichEtc,
  RoseliaBakery,
  RamenWRobbie,
  ZConfections,
  GumasteCoffee,

];

export default function SiteContextProvider({ children }) {
  let [currentRestaurant, setCurrentRestaurant] = useState(() => {
    // load cart from localStorage
    const savedStore = localStorage.getItem("store");
    return savedStore ? JSON.parse(savedStore) : [];
  });
  let [pantry, setPantry] = useState(foods);
  let [history, setHistory] = useState([])
  let [future, setFuture] = useState([]);
  let [cart, setCart] = useState(() => {
    // load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addItemToCart(meal) {
    setCart((prevCart) => [...prevCart, meal]);
  }
  function removeItemFromCart(meal) {
    setCart((prevCart) => prevCart.filter((item) => item !== meal));
    localStorage.setItem("cart", cart.filter((item) => item !== meal))
  }

  function addMealToTimeline(meal, isFuture) {
    if (isFuture) {
      setFuture((prev) => [...prev, meal])
    } else {
      setHistory((prev) => [...prev, meal]);
    }
  }

  return (
    <SiteContext.Provider
      value={{
        pantry,
        setPantry,
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        restaurants,
        currentRestaurant,
        setCurrentRestaurant,
        history,
        future,
        addMealToTimeline,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
