import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

import React from "react";

const GPIUSQuestion = (props) => {
  return (
    <>
      <div className="bg-primary-subtle border border-primary p-3">
        <p>{props.children}</p>
      </div>
      <br />
      <br />
      <div className="d-flex flex-column align-items-center">
        <div className="w-100">
          <Slider
            aria-label="Always visible"
            defaultValue={5}
            step={1}
            marks
            min={1}
            max={8}
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
          />
        </div>
        <div className="d-block position-relative w-100 mb-5 fs-7">
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "0" }}
          >
            Definitely disagree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "12.5%" }}
          >
            Mostly Disagree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "25%" }}
          >
            Somewhat Disagree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "37.5%" }}
          >
            Slightly Disagree
          </span>
          <span
            className="position-absolute text-center text-wrap w-4"
            style={{ left: "50%" }}
          >
            Slightly Agree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "62.5%" }}
          >
            Somewhat Agree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "75%" }}
          >
            Mostly Agree
          </span>
          <span
            className="text-wrap w-4 position-absolute text-end"
            style={{ left: "90%" }}
          >
            Definitely agree
          </span>
        </div>
      </div>
      <br />
    </>
  );
};

export default GPIUSQuestion;
