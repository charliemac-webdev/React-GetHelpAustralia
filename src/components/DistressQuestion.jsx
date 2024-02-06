import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

import React from "react";

const DistressQuestion = (props) => {
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
            defaultValue={3}
            step={1}
            marks
            min={1}
            max={5}
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
          />
        </div>
        <div className="d-block position-relative w-100 mb-5 fs-7">
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "0" }}
          >
            None of the time
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "12.5%" }}
          >
            A little of the time
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "25%" }}
          >
            Some of the time
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "37.5%" }}
          >
            Most of the time
          </span>
          <span
            className="position-absolute text-center text-wrap w-4"
            style={{ left: "50%" }}
          >
            All of the time
          </span>
        </div>
      </div>
      <br />
    </>
  );
};

export default DistressQuestion;
