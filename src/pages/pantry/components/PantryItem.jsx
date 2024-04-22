/* eslint-disable react/prop-types */

export default function PantryItem({ item, urgent, setSelItem, setWhichPanel }) {
  let { lifespan, quantity, name, imgFile, type } = item;
  return (
    <div className="pantry-item">
      <p className="above">{urgent ? lifespan : quantity}</p>
      <img src={imgFile} onClick={() => { setSelItem(item); setWhichPanel("existing_item") }} />
      <p className="below">{name}</p>
    </div>
  );
}