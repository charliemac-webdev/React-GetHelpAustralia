import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

import React from "react";

const DistressQuestion = ({ children }) => {
  return (
    <>
      <div className="bg-primary-subtle border border-primary p-3">
        <p>{children}</p>
      </div>
      <br />
      <br />

      <div className="w-100">
        <Slider
          aria-label="Always visible"
          defaultValue={3}
          step={1}
          min={1}
          max={5}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
      </div>
      <div className="d-flex justify-content-between fs-6">
        <div className="pe-1 text-start">None of the time</div>
        <div className="px-2">A little of the time</div>
        <div className="px-5">Some of the time</div>
        <div className="px-2">Most of the time</div>
        <div className="ps-1 text-end">All of the time</div>
      </div>
      <br />
    </>
  );
};

export default DistressQuestion;
