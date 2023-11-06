import { useState } from "react";
import wellbeingAssessmentData from "../data/modules/assessments/wellbeingAssessmentData";
import Button from "./Button";

const WellbeingAssessment = () => {
  const { id, description } = wellbeingAssessmentData[0];
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="d-flex mb-3">
        <div className="number active">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="number">4</div>
        <div className="number">5</div>
      </div>
      <hr />
      <div>{description}</div>
      <br />
      <div className="d-flex justify-content-between">
        <Button ident="previous-button" classes="btn">
          Previous
        </Button>
        <Button ident="next-button" classes="btn">
          Next
        </Button>
      </div>
    </>
  );
};
export default WellbeingAssessment;
