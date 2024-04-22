import { useState } from "react";

export default function AddItemFocus({
  setWhichPanel, itemsExp, setItemsExp, itemsAbc, setItemsAbc,
  sort_filter_by_expiry, sort_abc }) {
  const [lifespan, setLifespan] = useState("");
  const [lifespanValidation, setLifespanValidation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityValidation, setQuantityValidation] = useState("");
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState("");
  const [type, setType] = useState("");
  const [typeValidation, setTypeValidation] = useState("");
  return (
    <div className="panel">
      <div className="exit" onClick={() => setWhichPanel("")}>
        X
      </div>
      <div className="focus-header">
        <div className="focus-details">
          <label>
            What do you call it?
            <input type="text" placeholder="bananas" value={name}
              onChange={(event) => setName(event.target.value)} />
          </label>
          <span>{nameValidation}</span><br />
          <label>
            How many days is it good for?
            <input type="text" placeholder="3" value={lifespan}
              onChange={(event) => setLifespan(event.target.value)} />
          </label>
          <span>{lifespanValidation}</span><br />
          <label>
            How many servings do you have?
            <input type="text" placeholder="10" value={quantity}
              onChange={(event) => setQuantity(event.target.value)} />
          </label>
          <span>{quantityValidation}</span><br />
          <label>
            What categories of food does it belong to?
            <input type="text" placeholder="Produce, Vegetable" value={type}
              onChange={(event) => setType(event.target.value)} />
          </label>
          <span>{typeValidation}</span><br />
          <button onClick={() => {
            var nameValidated = false;
            if (name !== "" && (itemsAbc.length === itemsAbc.filter((a) => a.name !== name).length)) {
              setNameValidation("");
              nameValidated = true;
            } else if (name === "") {
              setNameValidation("Name can't be empty")
            } else {
              setNameValidation("A food with this exact name already exists in your pantry")
            }
            var lifespanValidated = false;
            if (!isNaN(lifespan) && parseInt(lifespan, 10) > 0) {
              setLifespanValidation("");
              lifespanValidated = true;
            } else {
              setLifespanValidation("This is not a number")
            }
            var quantityValidated = false;
            if (!isNaN(quantity) && parseInt(quantity, 10) > 0) {
              setQuantityValidation("");
              quantityValidated = true;
            } else {
              setQuantityValidation("This is not a number")
            }
            var typeValidated = false;
            if (type !== "") {
              setTypeValidation("");
              typeValidated = true;
            } else {
              setTypeValidation("Categories can't be empty")
            }
            if (nameValidated && lifespanValidated && quantityValidated && typeValidated) {
              let item = {
                "name": name.trim(),
                "lifespan": lifespan.trim() + " days",
                "quantity": "x" + quantity.trim(),
                "imgFile": "images/PlaceHolder.jpg",
                "type": type.trim()
              };
              setItemsAbc(sort_abc([...itemsAbc, item]));
              setItemsExp(sort_filter_by_expiry([...itemsExp, item]));
              setWhichPanel("");
            }
          }}>Done</button>
        </div>
      </div>
    </div >
  );
}
