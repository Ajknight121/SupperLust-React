


//
//I dream of falafel
//

let IDOFbags = [

  {
    id: 1,
    image: "images/full-star.png",
    name: "Leftover Pita Bread Bag",
    rating: 4,
    price: "$4.75",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
  {
    id: 2,
    image: "images/full-star.png",
    name: "Misc. Ingredients Bag",
    rating: 4,
    price: "$5.00",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
];

const IDOFmeals = [
  {
    id: 3,
    image: "images/hollow-star.png",
    name: "Hummus and Pita",
    rating: 2,
    price: "$55.00",
    isBag: false,
  },
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Baba Ganoush",
    rating: 2,
    price: "$45.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Tabbouleh",
    rating: 1,
    price: "$67.00",
    isBag: false,
  },
];

export const IDOF = {
  id: 1.1,
  name: "I Dream of Falafel",
  price: 30,
  type: "Medditeraian",
  distance: 1,
  time: 20,
  bags: IDOFbags,
  meals: IDOFmeals,
};

//
//Bear 5 burger//
//

const BearBags = [
  {
    id: 1,
    image: "images/PlaceHolder.jpg",
    name: "Random Slices Bags",
    rating: 3,
    price: 4.75,
    pickup: 19, // 24hr time same day
    isBag: true,
  },
  {
    id: 2,
    image: "images/PlaceHolder.jpg",
    name: "5 Bear Bag",
    rating: 5,
    price: 5.55,
    pickup: 5, // 24hr time same day
    isBag: true,
  },
];


const BearMeals = [
  {
    id: 3,
    image: "images/PlaceHolder.jpg",
    name: "Yellow Chicken Pizza",
    rating: 3,
    price: "$9.00",
    isBag: false,
  },
  {
    id: 4,
    image: "images/PlaceHolder.jpg",
    name: "Mutton Chops",
    rating: 3,
    price: "$12.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/PlaceHolder.jpg",
    name: "Pirate Party Platter",
    rating: 5,
    price: "$35.00",
    isBag: false,
  },
];

export const bear = {
  id: 1.2,
  name: "Bear 5 Burger",
  price: 18,
  type: "Burger",
  distance: 0.3,
  time: 50,
  bags: BearBags,
  meals: BearMeals,
};


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
  price: 14,
  type: "Italian",
  distance: 1.6,
  time: 10,
  bags: BigRicoBags,
  meals: BigRicoMeals,
};


// Sandvich etc.


const SandvichBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Mystery Meat Bag",
    rating: 4,
    price: "$5.50",
    pickUpTime: "6:35 PM",
    isBag: true,
  },
  {
    id: 2,
    image: "images/full-star.png",
    name: "Gaben Bag",
    rating: 2,
    price: "$9.94",
    pickUpTime: "3:00 PM",
    isBag: true,
  },
];

const SandvichMeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Classic Sandvich",
    rating: 5,
    price: "8.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Buffalo Steak Sandvich",
    rating: 1,
    price: "$7.50",
    isBag: false,
  },
  {
    id: 6,
    image: "images/hollow-star.png",
    name: "Dalokohs bar",
    rating: 2,
    price: "$2.59",
    isBag: false,
  },
  {
    id: 7,
    image: "images/hollow-star.png",
    name: "A Banana",
    rating: 5,
    price: "$1.50",
    isBag: false,
  },
];

export const SandvichEtc = {
  id: 1.4,
  name: "Sandviches etc.",
  price: 10,
  type: "Deli",
  distance: 1,
  time: 5,
  bags: SandvichBags,
  meals: SandvichMeals,
};


//Roselia's Bakery


const RoseliaBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Random Baked Goods",
    rating: 5,
    price: "$2.50",
    pickUpTime: "2:00 PM",
    isBag: true,
  },
];

const RoseliaMeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Chocolate Bunny",
    rating: 5,
    price: "$2.50",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Butterscotch Bunny",
    rating: 1,
    price: "$2.50",
    isBag: false,
  },
  {
    id: 6,
    image: "images/burger.jpg",
    name: "Duane Burger",
    rating: 4,
    price: "$14.94",
    isBag: false,
  },
];

export const RoseliaBakery = {
  id: 1.5,
  name: "Roselia's Bakery",
  price: 5,
  type: "Bakery",
  distance: 1,
  time: 12,
  bags: RoseliaBags,
  meals: RoseliaMeals,
};

//
//Ramen with Robbie
//

const RobbieBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Lefover add-ins bag",
    rating: 5,
    price: "$6.00",
    pickUpTime: "11:00 PM",
    isBag: true,
  },
];

const RobbieMeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Spicy Z. Ramen",
    rating: 5,
    price: "$17.00",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "A large pile of plan noodles",
    rating: 1,
    price: "$1.00",
    isBag: false,
  },
  {
    id: 6,
    image: "images/miso.png",
    name: "Miso Ramen",
    rating: 3,
    price: "$10.54",
    isBag: false,
  },
];

export const RamenWRobbie = {
  id: 1.6,
  name: "Ramen With Robbie",
  price: 20,
  type: "Ramen",
  distance: 2.3,
  time: 60,
  bags: RobbieBags,
  meals: RobbieMeals,
};

//
//Big Z's Dried Confections and Jerkies
//

const ZBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Misshaped Food Bag",
    rating: 4,
    price: "$3.50",
    pickUpTime: "7:00 PM",
    isBag: true,
  },
];

const ZMeals = [
  {
    id: 4,
    image: "images/bananas-unfrozen.png",
    name: "Spicy Dried Bananas (1lb)",
    rating: 5,
    price: "$9.25",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Cinnamon Dried Apples (0.5lb)",
    rating: 1,
    price: "$5.00",
    isBag: false,
  },
  {
    id: 6,
    image: "images/hollow-star.png",
    name: "Pork Tenderloin Jerky (1lb)",
    rating: 3,
    price: "$15.99",
    isBag: false,
  },
];

export const ZConfections = {
  id: 1.7,
  name: "Zee Confections and Jerkies",
  price: 7,
  type: "Snack Store",
  distance: 4.9,
  time: 0,
  bags: ZBags,
  meals: ZMeals,
};

//
// Gumaste Coffeehouse
//

const GumasteBags = [
  {
    id: 1,
    image: "images/full-star.png",
    name: "Misc. bag of scones",
    rating: 2,
    price: "$3.50",
    pickUpTime: "2:00 PM",
    isBag: true,
  },
];

const GumasteMeals = [
  {
    id: 4,
    image: "images/hollow-star.png",
    name: "Black Coffee",
    rating: 2,
    price: "$4.50",
    isBag: false,
  },
  {
    id: 5,
    image: "images/hollow-star.png",
    name: "Distro Danish",
    rating: 3,
    price: "$5.00",
    isBag: false,
  },
  {
    id: 6,
    image: "images/hollow-star.png",
    name: "Can of Diet Coke",
    rating: 4,
    price: "$1.99",
    isBag: false,
  },
];

export const GumasteCoffee = {
  id: 1.8,
  name: "Gumaste Coffeehouse",
  price: 4,
  type: "Cafe",
  distance: 3.4,
  time: 9,
  bags: GumasteBags,
  meals: GumasteMeals,
};



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



