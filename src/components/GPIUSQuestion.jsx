import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateGpiusScore } from "@/context/gpiusScoreSlice";

import { Slider } from "@mui/material";

const GPIUSQuestion = ({ id, children }) => {
  const [value, setValue] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateGpiusScore({ id, score: value }));
  }, [dispatch, id, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(updateGpiusScore({ id, score: newValue }));
  };
  return (
    <>
      <div className="bg-primary-subtle border border-primary p-3">
        <p>{children}</p>
      </div>
      <br />
      <br />

      <div className="w-100">
        <Slider
          value={value}
          onChange={handleChange}
          aria-label="Always visible"
          step={1}
          min={1}
          max={8}
          aria-labelledby={`slider-${id}`}
          valueLabelDisplay="on"
        />
      </div>
      <div id={`slider-${id}`} className="d-flex justify-content-between fs-7">
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
