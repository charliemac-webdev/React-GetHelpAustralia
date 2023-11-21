import { useState } from "react";
import wellbeingAssessmentData from "../data/modules/assessments/wellbeingAssessmentData";
import Button from "./Button";

const WellbeingAssessment = () => {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState([]);
  const { id, description } = wellbeingAssessmentData[active];

  const handleClick = () => {
    const value = Number(
      document.querySelector(".MuiSlider-valueLabelLabel").textContent
    );

    setValues((prevValues) => {
      const newValues = [...prevValues, value];
      console.log(newValues);
      return newValues;
    });

    if (active <= wellbeingAssessmentData.length - 1) {
      setActive(active + 1);
    }
  };

  const total = values.reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="d-flex mb-3">
        <div className={`number ${active >= 0 ? "active" : ""}`}>1</div>
        <div className={`number ${active >= 1 ? "active" : ""}`}>2</div>
        <div className={`number ${active >= 2 ? "active" : ""}`}>3</div>
        <div className={`number ${active >= 3 ? "active" : ""}`}>4</div>
        <div className={`number ${active >= 4 ? "active" : ""}`}>5</div>
      </div>
      <hr />
      <div>{description}</div>
      <br />

      {active === wellbeingAssessmentData.length - 1 && (
        <div>The total is: {total}</div>
      )}

      <div className="d-flex justify-content-between">
        {active <= 3 ? (
          <Button ident="next-button" classes="btn" onClick={handleClick}>
            Next
          </Button>
        ) : active === 4 ? (
          <Button ident="submit-button" classes="btn" onClick={handleClick}>
            Submit
          </Button>
        ) : null}
      </div>
    </>
  );
};
export default WellbeingAssessment;
