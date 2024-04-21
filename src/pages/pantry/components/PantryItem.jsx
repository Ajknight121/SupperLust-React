/* eslint-disable react/prop-types */

export default function PantryItem({ item, urgent, key }) {
  let { lifespan, quantity, name, imgFile } = item;
  return (
    <div key={key} className="pantry-item">
      <div className="pantry-item-desc">
        {urgent ? lifespan : quantity}
      </div>
      <div className="pantry-item-img">
        <img src={imgFile} height="18%" width="25%" />
      </div>
    </div>
  );
}