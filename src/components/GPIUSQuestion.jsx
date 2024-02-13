import { Slider } from "@mui/material";
import React, { useState } from "react";

function valuetext(value) {
  return value;
}

const GPIUSQuestion = (props) => {
  const [values, setValues] = useState([]);
  const [sum, setSum] = useState(0);
  const handleClick = () => {
    const selectedValue = Number(
      document.querySelector(".MuiSlider-valueLabelLabel").textContent
    );

    setValues([...values, selectedValue]); // Update the values state using setValues

    const newSum = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setSum(newSum);
  };

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
            style={{ left: "40%" }}
          >
            Slightly Disagree
          </span>
          <span
            className="position-absolute text-center text-wrap w-4"
            style={{ left: "52%" }}
          >
            Slightly Agree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "67%" }}
          >
            Somewhat Agree
          </span>
          <span
            className="position-absolute text-wrap w-4"
            style={{ left: "83%" }}
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
