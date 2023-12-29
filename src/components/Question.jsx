/* eslint-disable react/prop-types */
import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}
const Question = (props) => {
  return (
    <>
      <h5 className="secondary-color">Question {props.id} of 36</h5>
      <p className="mb-5">{props.description}</p>
      <Slider
        aria-label="Always visible"
        defaultValue={4}
        step={1}
        marks
        min={1}
        max={7}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />
      <div className="d-flex justify-content-between">
        <span>Strongly Disagree</span>
        <span>Strongly Agree</span>
      </div>
    </>
  );
};
export default Question;
