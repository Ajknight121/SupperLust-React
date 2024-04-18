/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


const SiteContext = createContext()
let ingredientExample = {
    name: "Potato",
    expiration: new Date('4/15/2024'),
}
let foods = [ingredientExample, ingredientExample, ingredientExample];

export default function SiteContextProvider( {children} ) {
    let [pantry, setPantry] = useState(foods);
    let [cart, setCart] = useState([]);
    let [mealTimeline, setMealTimeline] = useState([])

    function addItemToCart( meal ) {
        setCart((prevCart) => [...prevCart, meal]);
    }
    function removeItemFromCart(meal) {
        setCart(prevCart => prevCart.filter(item => item !== meal));
    }

    function addMealToHistory( meal ) {
        setMealTimeline((prev) => [...prev, meal]);
    }

    return (
        <SiteContext.Provider value={{pantry,setPantry,cart,addItemToCart,removeItemFromCart,mealHistory: mealTimeline,addMealToHistory}}>
            {children}
        </SiteContext.Provider>
    )
}