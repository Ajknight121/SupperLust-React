import { Link } from "react-router-dom";
import "./pantry.css";
import HorizontalScroll from './components/HorizScroll'
import items from "./item_data.json"
import Timeline from "./components/Timeline";
import ItemFocus from "../../ItemFocus";
import { useState } from "react";

export default function Pantry() {
  let items_expiring_soon = [...items];
  items_expiring_soon.sort(function (a, b) {
    let a_ls = parseInt(a.lifespan.split(" ")[0].replace("+", ""));
    let b_ls = parseInt(b.lifespan.split(" ")[0].replace("+", ""));
    return a_ls - b_ls;
  })
  let items_expiring_soon_ = items_expiring_soon.filter((a) => {
    let ls = parseInt(a.lifespan.split(" ")[0].replace("+", ""));
    return ls < 12;
  })

  const items_alphabetized = [...items];
  items_alphabetized.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })

  const past_meals = [
    {
      "id": "1",
      "planned": "3 days",
      "scheduled": "2 days",
      "present_ingred": [{
        "lifespan": "9 days",
        "quantity": "x8",
        "name": "Carrots (whole)",
        "imgFile": "images/carrot.png"
      }, {
        "lifespan": "30 days",
        "quantity": "x1",
        "name": "Ranch dressing",
        "imgFile": "images/dressing-ranch.png"
      }
      ],
      "missing_ingred": []
    },
    {
      "id": "2",
      "planned": "3 days",
      "scheduled": "2 days",
      "present_ingred": [{
        "lifespan": "9 days",
        "quantity": "x8",
        "name": "Carrots (whole)",
        "imgFile": "images/carrot.png"
      }, {
        "lifespan": "30 days",
        "quantity": "x1",
        "name": "Ranch dressing",
        "imgFile": "images/dressing-ranch.png"
      }
      ],
      "missing_ingred": []
    },
    {
      "id": "3",
      "planned": "3 days",
      "scheduled": "2 days",
      "present_ingred": [{
        "lifespan": "9 days",
        "quantity": "x8",
        "name": "Carrots (whole)",
        "imgFile": "images/carrot.png"
      }, {
        "lifespan": "30 days",
        "quantity": "x1",
        "name": "Ranch dressing",
        "imgFile": "images/dressing-ranch.png"
      }
      ],
      "missing_ingred": []
    }
  ]

  const [showPanel, setShowPanel] = useState(false);
  const [selItem, setSelItem] = useState(items_alphabetized[0]);

  return (
    <div className="page">
      {showPanel ? <ItemFocus item={selItem} /> : ""}
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
          <Timeline id="timeline-past" meals={past_meals} past={true} />
          <Timeline id="timeline-future" meals={past_meals} past={false} />
        </div>
        <img id="shelf-first" src="images/shelf-1.png" />
        <h4>Expiring Soon!</h4>
        <HorizontalScroll id="expiring-soon-hscroll" items={items_expiring_soon_} urgent={true}
          setSelItem={setSelItem} setShowPanel={setShowPanel} />
        <img id="shelf-second" src="images/shelf-2.png" />
        <h4>Alphabetical</h4>
        <HorizontalScroll id="alphabetical-hscroll" items={items_alphabetized} urgent={false}
          setSelItem={setSelItem} setShowPanel={setShowPanel} />
        <Link to="/item">Item Focus</Link>
      </div>
    </div>
  );
}
