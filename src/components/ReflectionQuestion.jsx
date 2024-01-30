import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

import React from "react";

const ReflectionQuestion = (props) => {
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
        <div className="d-block position-relative w-100 mb-5">
          <span
            className="position-absolute text-wrap w-6"
            style={{ left: "0" }}
          >
            Strongly disagree
          </span>
          <span className="position-absolute" style={{ left: "20%" }}>
            Disagree
          </span>
          <span className="position-absolute" style={{ left: "46%" }}>
            Neither
          </span>
          <span
            className="position-absolute text-center"
            style={{ left: "72%" }}
          >
            Agree
          </span>
          <span
            className="text-wrap w-6 position-absolute text-end"
            style={{ left: "84%" }}
          >
            Strongly agree
          </span>
        </div>
      </div>
      <br />
    </>
  );
};

export default ReflectionQuestion;
