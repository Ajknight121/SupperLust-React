import { Link } from "react-router-dom";
import "./pantry.css";
import HorizontalScroll from './components/HorizScroll'
import items from "./item_data.json"
import Timeline from "./components/Timeline";
import ItemFocus from "../../ItemFocus";
import { useState } from "react";

export default function Pantry() {
  let sort_filter_by_expiry = function (items_) {
    let items__ = [...items_];
    items__.sort(function (a, b) {
      let a_ls = parseInt(a.lifespan.split(" ")[0].replace("+", ""));
      let b_ls = parseInt(b.lifespan.split(" ")[0].replace("+", ""));
      return a_ls - b_ls;
    })
    return items__.filter((a) => {
      let ls = parseInt(a.lifespan.split(" ")[0].replace("+", ""));
      return ls < 12
    });
  };
  const [itemsExp, setItemsExp] = useState(sort_filter_by_expiry(items));

  let sort_abc = function (items_) {
    let items__ = [...items_];
    items__.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    return items__;
  };
  const [itemsAbc, setItemsAbc] = useState(sort_abc(items));

  const [pastMeals, setPastMeals] = useState([{
    "id": "1",
    "planned": "3 days",
    "scheduled": "2 days",
    "present_ingred": [{
      "lifespan": "9 days",
      "quantity": "x8",
      "name": "Carrots (whole)",
      "imgFile": "images/carrot.png",
      "type": "Produce, Vegetable"
    }, {
      "lifespan": "30 days",
      "quantity": "x1",
      "name": "Ranch dressing",
      "imgFile": "images/dressing-ranch.png",
      "type": "Dressing, Sauce"
    }
    ],
    "missing_ingred": []
  }]);
  const [futureMeals, setFutureMeals] = useState([]);

  const [showPanel, setShowPanel] = useState(false);
  const [selItem, setSelItem] = useState(itemsAbc[0]);
  const [mealCon, setMealCon] = useState([]);

  return (
    <div className="page">
      {showPanel ?
        <ItemFocus item={selItem} itemType="not_created"
          setShowPanel={setShowPanel} mealCon={mealCon} setMealCon={setMealCon}
          itemsExp={itemsExp} setItemsExp={setItemsExp}
          itemsAbc={itemsAbc} setItemsAbc={setItemsAbc} /> : ""}
      <div className="uppermost-nav">
        <div className="shape-1" id="explore-bttn">
          <img src="images/explore-button.png" />
          <Link to="/explore">Explore</Link>
        </div>
        <div className="shape-1" id="quick-bites-bttn">
          <img src="images/quick-bites-button.png" />
          <Link to="/quickbites">
            Quick
            <br />
            Bites
          </Link>
        </div>
        <span>Pantry</span>
        <img className="add-item" src="images/solid-brown-ellipse-3.png" />
        <Link className="add-item" to="/additem">
          Add Item
        </Link>
        <img id="bottom-oval" src="images/solid-brown-ellipse-1.png" />
        <img id="center-oval" src="images/solid-brown-shaded-ellipse-2.png" />
      </div>
      <div className="lower">
        <div id="timelines-hdr">
          <h4>Past</h4>
          <h4>Future</h4>
        </div>
        <div id="timelines">
          <Timeline id="timeline-past" meals={pastMeals} past={true} />
          <Timeline id="timeline-future" meals={futureMeals} past={false} />
        </div>
        <img id="shelf-first" src="images/shelf-1.png" />
        {mealCon.length === 0 ?
          (<div className="rows">
            <h4>Expiring Soon!</h4>
            <HorizontalScroll id="expiring-soon-hscroll" items={itemsExp} urgent={true}
              setSelItem={setSelItem} setShowPanel={setShowPanel} />
            <img id="shelf-second" src="images/shelf-2.png" />
            <h4>Alphabetical</h4>
            <HorizontalScroll id="alphabetical-hscroll" items={itemsAbc} urgent={false}
              setSelItem={setSelItem} setShowPanel={setShowPanel} /></div>) :
          (<div className="rows">
            <h4>Alphabetical</h4>
            <HorizontalScroll id="alphabetical-hscroll" items={itemsAbc} urgent={false}
              setSelItem={setSelItem} setShowPanel={setShowPanel} />
            <h4>Ingredients You've Selected</h4>
            <HorizontalScroll id="current-meal-hscroll" items={mealCon} urgent={false}
              setSelItem={setSelItem} setShowPanel={setShowPanel} />
            <div className="lowermostNav">
              <div className="shape-1" id="eat-now-bttn">
                <img src="images/explore-button.png" />
                <span onClick={() => 1}>
                  Eat Now
                </span>
              </div>
              <div className="shape-1" id="eat-later-bttn">
                <img src="images/quick-bites-button.png" />
                <span onClick={() => 1}>
                  Eat Later
                </span>
              </div>

            </div>
          </div>)}
      </div>
    </div>
  );
}
