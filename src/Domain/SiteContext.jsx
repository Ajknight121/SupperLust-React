/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// const CurrentDay = new Date("4/15/2024");

export const SiteContext = createContext();
let ingredientExample = {
  name: "Potato",
  expiration: new Date("4/15/2024"),
};
let foods = [ingredientExample, ingredientExample, ingredientExample];

let falafel = {
  id: 2,
  image: "images/PlaceHolder.jpg",
  name: "Falafel Pita Bread Bag",
  rating: 2,
  price: 4.75,
  pickup: 19, // 24hr time same day
  isBag: true,
};

let IDOFbags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Shawarma Wrap Bag",
    rating: 4,
    price: "$4.75",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
  {
    id: 2,
    image: "images/full-star.png",
    name: "Falafel Pita Bread Bag",
    rating: 2,
    price: "$4.75",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
  {
    id: 3,
    image: "images/full-star.png",
    name: "Couscous Bag",
    rating: 4,
    price: "$2.00",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
];

const IDOFmeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Hummus Bag",
    rating: 3,
    price: "$2.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Baba Ganoush Bag",
    rating: 4,
    price: "$2.00",
    isBag: false,
  },
  {
    id: 6,
    image: "images/hollow-star.png",
    name: "Tabbouleh Bag",
    rating: 5,
    price: "$2.00",
    isBag: false,
  },
];

const IDOF = {
  id: 1.1,
  name: "I Dream of Falafel",
  price: 30,
  type: "Medditeraian",
  distance: 1,
  time: 20,
  bags: IDOFbags,
  meals: IDOFmeals,
};

const bear = {
  id: 1.2,
  name: "Bear 5 Burger",
  price: 30,
  type: "Burger",
  distance: 0.3,
  time: 10,
  bags: [falafel],
  meals: [
    {
      id: 4,
      image: "images/PlaceHolder.jpg",
      name: "Hummus Bag",
      rating: 3,
      price: "$2.00",
      isBag: false,
    },
  ],
};

let restaurants = [
  //   {
  //     name: "I Dream of Queso Fundido",
  //     price: 10,
  //     type: "Mexican",
  //     distance: 1,
  //   },
  //   {
  //     name: "Pizza Time",
  //     price: 10,
  //     type: "Pizza",
  //     distance: 2,
  //   },
  IDOF,
  bear,
];

export default function SiteContextProvider({ children }) {
  let [currentRestaurant, setCurrentRestaurant] = useState(IDOF);
  let [pantry, setPantry] = useState(foods);
  let [history, setHistory] = useState([])
  let [cart, setCart] = useState(() => {
    // load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  let [mealTimeline, setMealTimeline] = useState([]);

  function addItemToCart(meal) {
    setCart((prevCart) => [...prevCart, meal]);
  }
  function removeItemFromCart(meal) {
    setCart((prevCart) => prevCart.filter((item) => item !== meal));
  }

  function addMealToHistory(meal) {
    setMealTimeline((prev) => [...prev, meal]);
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
        mealHistory: mealTimeline,
        addMealToHistory,
        restaurants,
        currentRestaurant,
        setCurrentRestaurant,
        history,
        setHistory,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
