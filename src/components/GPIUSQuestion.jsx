import { Slider } from "@mui/material";
import React from "react";

function valuetext(value) {
  return value;
}

const GPIUSQuestion = (props) => {
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
          defaultValue={5}
          step={1}
          marks
          min={1}
          max={8}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
      </div>
      <div className="d-flex justify-content-between fs-7">
        <span className="text-start w-4">Definitely disagree</span>
        <span className=" text-wrap w-4">Mostly Disagree</span>
        <span className=" text-wrap w-4">Somewhat Disagree</span>
        <span className=" text-wrap w-4">Slightly Disagree</span>
        <span className=" text-center text-wrap w-4">Slightly Agree</span>
        <span className="text-end text-wrap w-4">Somewhat Agree</span>
        <span className="text-end text-wrap w-4">Mostly Agree</span>
        <span className="text-wrap w-4  text-end">Definitely agree</span>
      </div>

      <br />
    </>
  );
};

export default GPIUSQuestion;
