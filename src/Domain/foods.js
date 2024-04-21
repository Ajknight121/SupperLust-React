//Big Rico's Pizza
const BigRicoBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Random Slice Bag",
    rating: 4,
    price: "$4.75",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
  {
    id: 2,
    image: "images/full-star.png",
    name: "Wheat and Wheat By-Products Bag",
    rating: 2,
    price: "$2.54",
    pickUpTime: "12:00 AM",
    isBag: true,
  },
  {
    id: 3,
    image: "images/full-star.png",
    name: "Garlic Bag",
    rating: 4,
    price: "$1.00",
    pickUpTime: "4:00 PM",
    isBag: true,
  },
];

const BigRicoMeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Whole Cheese Pizza",
    rating: 5,
    price: "$10.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "A Single Pepperoni",
    rating: 1,
    price: "$99.99",
    isBag: false,
  },
  {
    id: 6,
    image: "images/hollow-star.png",
    name: "The Eternal Scout Pizza",
    rating: 4,
    price: "$13.54",
    isBag: false,
  },
];

export const BigRicoPizza = {
  id: 1.3,
  name: "Big Rico's Pizza",
  price: 30,
  type: "Italian",
  distance: 1,
  time: 20,
  bags: BigRicoBags,
  meals: BigRicoMeals,
};



