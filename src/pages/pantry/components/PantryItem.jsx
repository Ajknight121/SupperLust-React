/* eslint-disable react/prop-types */

export default function PantryItem({ item, urgent, setSelItem, setShowPanel }) {
  let { lifespan, quantity, name, imgFile, type } = item;
  return (
    <div className="pantry-item">
      <p className="above">{urgent ? lifespan : quantity}</p>
      <img src={imgFile} onClick={() => { setSelItem(item); setShowPanel(true) }} />
      <p className="below">{name}</p>
    </div>
  );
}