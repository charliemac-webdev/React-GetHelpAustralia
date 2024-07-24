import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import wellbeingAssessmentData from "../data/modules/assessments/wellbeingAssessmentData";
import Button from "./Button";

const WellbeingAssessment = () => {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState([]);
  const [sum, setSum] = useState(0);
  const { description } = wellbeingAssessmentData[active];

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

    if (active <= wellbeingAssessmentData.length - 1) {
      setActive(active + 1);
    }
  };

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
        <>
          <div className="d-flex justify-content-center">
            <BarChart
              axisHighlight={{
                x: "none",
                y: "none",
              }}
              xAxis={[
                {
                  id: "barCategories",
                  data: [
                    "Physical",
                    "Social",
                    "Mental",
                    "Spiritual",
                    "Emotional",
                  ],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [values[0], values[1], values[2], values[3], values[4]],
                  color: "#004c97",
                },
              ]}
              // leftAxis={null}
              width={500}
              height={300}
            />
          </div>
          <div>Your total score: {sum}</div>
          {sum >= 0 && sum <= 10 && (
            <div className="bg-primary-subtle border border-primary p-3">
              Your score suggests self-care hasn’t been important to you. A good
              starting point would be focusing on healthy eating, daily exercise
              (a 10-minute walk counts), and a healthy sleep routine.
            </div>
          )}
          {sum >= 11 && sum <= 30 && (
            <div className="bg-primary-subtle border border-primary p-3">
              You’re engaging in some self-care behaviours but there’s room for
              improvement. Begin working on recognising the importance of
              self-care and try to factor it into your daily life.
            </div>
          )}
          {sum >= 31 && sum <= 40 && (
            <div className="bg-primary-subtle border border-primary p-3">
              It sounds like you’re consciously incorporating self-care into
              your daily life. Perhaps there is one particular area that is low
              scoring where you could focus your attention.
            </div>
          )}
          {sum >= 41 && sum <= 50 && (
            <div className="bg-primary-subtle border border-primary p-3">
              Self-care must be important to you and an area that you
              consciously give attention to. Keep prioritising it. Read the
              strategies below to see if there’s anything you could add to what
              you are already doing.
            </div>
          )}
        </>
      )}

      <div className="d-flex justify-content-between">
        {active <= 3 ? (
          <Button id="next-button" classes="btn" onClick={handleClick}>
            Next
          </Button>
        ) : active === 4 ? (
          <Button id="submit-button" classes="btn" onClick={handleClick}>
            Submit
          </Button>
        ) : null}
      </div>
    </>
  );
};
export default WellbeingAssessment;
