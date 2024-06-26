import PantryItem from "./PantryItem"

/* eslint-disable react/prop-types */

export default function HorizontalScroll({ items, urgent, setSelItem, setWhichPanel }) {
  return (
    <div className="hscroll">
      {items.map((item) =>
      (<PantryItem item={item} urgent={urgent} key={item.name}
        setSelItem={setSelItem} setWhichPanel={setWhichPanel} />))}
    </div>)
}