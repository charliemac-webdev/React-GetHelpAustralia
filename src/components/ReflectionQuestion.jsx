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
      <div className="d-flex justify-content-between">
        <span className="text-start text-wrap w-6">Strongly disagree</span>
        <span className="text-wrap w-6">Disagree</span>
        <span className="text-wrap w-6 text-center">Neutral</span>
        <span className="text-wrap w-6 text-end">Agree</span>
        <span className="text-wrap w-6 text-end">Strongly agree</span>
      </div>

      <br />
    </>
  );
};

export default ReflectionQuestion;
