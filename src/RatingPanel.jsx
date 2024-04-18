import { useState } from "react"
import blankStar from "./images/hollow-star.png"
import fullStar from "./images/full-star.png"

export default function RatingPopup() {
    let [prepareRating, setPrepareRating] = useState(1);
    let [eatRating, setEatRating] = useState(1);
    let [difficultyRating, setDifficultyRating] = useState(1);

    let prepRate = [1,2,3,4,5];


  return (
    <div className="Panel">
        <div className="ratings-panel">
            <div className="exit" onClick={() => console.log("Close rating panel")}>X</div>
            <h1>How would you rate this meal?</h1>
            <div className="ratings">
                <div className="rate">
                    Enjoyed Preparing
                    <br/>
                    {prepRate.map((val) => (<img key={val} src={prepareRating >= val ? fullStar : blankStar} width={"50px"} height={"50px"} onClick={() => setPrepareRating(val)}/>))}
                </div>
                <div className="rate">
                    Enjoyed Eating
                    <br/>
                    {prepRate.map((val) => (<img key={val} src={eatRating >= val ? fullStar : blankStar} width={"50px"} height={"50px"} onClick={() => setEatRating(val)}/>))}
                </div>
                <div className="rate">
                    How Difficult
                    <br/>
                    {prepRate.map((val) => (<img key={val} src={difficultyRating >= val ? fullStar : blankStar} width={"50px"} height={"50px"} onClick={() => setDifficultyRating(val)}/>))}
                </div>
            </div>
            <button className="submit-rating" onClick={() => console.log("submit Rating")}>Submit</button>
        </div>
    </div>
  )
}
