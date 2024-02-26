import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import startingPointQuizData from "../data/modules/assessments/startingPointQuizData";
import Button from "./Button";

const StartingPointQuiz = () => {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState([]);
  const [tally, setTally] = useState({});
  const { description } = startingPointQuizData[active];

  const handleClick = () => {
    const selectedValue = Number(
      document.querySelector(".MuiSlider-valueLabelLabel").textContent
    );

    setValues([...values, selectedValue]); // Update the values state using setValues

    const newTally = { ...tally }; // Make a copy of the current tally object
    newTally[selectedValue] = (newTally[selectedValue] || 0) + 1; // Increment the count for the selected value
    setTally(newTally);

    if (active <= startingPointQuizData.length - 1) {
      setActive(active + 1);
    }
  };

  return (
    <>
      <h4 className="secondary-color">Starting point</h4>
      <p>
        Using the quiz below, select your current level of knowledge and
        understanding about your online behaviour.
      </p>
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

      {active === startingPointQuizData.length - 1 && (
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
                    "Very little knowledge",
                    "Some understanding",
                    "Secure understanding",
                  ],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [tally[1], tally[2], tally[3]],
                  color: "#004c97",
                },
              ]}
              leftAxis={null}
              width={600}
              height={300}
            />
          </div>
        </>
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

export default StartingPointQuiz;
