/* eslint-disable react/prop-types */
import { Slider } from "@mui/material";
import { useState } from "react";
import Button from "./Button";

function valuetext(value) {
  return value;
}

const EmotionsQuiz = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="d-flex mb-3">
        <div className={`number ${active >= 0 ? "active" : ""}`}>1</div>
        <div className={`number ${active >= 1 ? "active" : ""}`}>2</div>
        <div className={`number ${active >= 2 ? "active" : ""}`}>3</div>
        <div className={`number ${active >= 3 ? "active" : ""}`}>4</div>
        <div className={`number ${active >= 4 ? "active" : ""}`}>5</div>
      </div>
      <hr />
      <div className="bg-primary-subtle border border-primary p-3">
        <p>Q1: I can recognise changes in my body and identify how I feel</p>
      </div>
      <br />
      <br />
      <Slider
        aria-label="Always visible"
        defaultValue={2}
        step={1}
        marks
        min={1}
        max={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />
      <div className="d-flex justify-content-between">
        <span className="w-50">No confidence</span>
        <span className="w-50">Very confident</span>
      </div>
      <div className="d-flex justify-content-between">
        {active <= 3 ? (
          <Button ident="next-button" classes="btn" onClick={handleClick}>
            Next
          </Button>
        ) : active === 4 ? (
          <Button ident="submit-button" classes="btn" onClick={handleClick}>
            Submit
          </Button>
        ) : null}
      </div>
    </>
  );
};
export default EmotionsQuiz;
