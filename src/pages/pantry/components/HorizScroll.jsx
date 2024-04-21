import PantryItem from "./PantryItem"

/* eslint-disable react/prop-types */

export default function HorizontalScroll({ items, urgent }) {
  <div className="hscroll">
    {items.map((item) => (<PantryItem key={item} item={item} urgent={urgent} />))}
  </div>
}