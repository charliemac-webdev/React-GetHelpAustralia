import { Slider } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateDistressScore } from "../context/distressScoreSlice";
import { useState, useEffect } from "react";

const DistressQuestion = ({ id, children }) => {
  const [value, setValue] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateDistressScore({ id, score: value }));
  }, [dispatch, id, value]);

  const handleChange = (event, newValue) => {
    console.log(`Question ${id} new value: ${newValue}`);
    setValue(newValue);
    dispatch(updateDistressScore({ id, score: newValue }));
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
          max={5}
          aria-labelledby={`slider-${id}`}
          valueLabelDisplay="on"
        />
      </div>
      <div id={`slider-${id}`} className="d-flex justify-content-between fs-6">
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
