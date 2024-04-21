/* eslint-disable react/prop-types */

export default function PantryItem({ item, urgent }) {
  let { lifespan, quantity, name, imgFile } = item;
  return (
    <div className="pantry-item">
      <p className="above">{urgent ? lifespan : quantity}</p>
      <img src={imgFile} />
      <p className="below">{name}</p>
    </div>
  );
}