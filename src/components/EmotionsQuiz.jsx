import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import emotionsQuizData from "../data/modules/assessments/emotionsQuizData";
import Button from "./Button";

const EmotionsQuiz = () => {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState({ 1: 0, 2: 0, 3: 0 });
  const { description } = emotionsQuizData[active];

  const handleClick = () => {
    const selectedValue = Number(
      document.querySelector(".MuiSlider-valueLabelLabel").textContent
    );

    setValues((prevValues) => ({
      ...prevValues,
      [selectedValue]: prevValues[selectedValue] + 1,
    }));

    if (active <= emotionsQuizData.length - 1) {
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

      {active === emotionsQuizData.length - 1 && (
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
                  data: ["No confidence", "Some confidence", "Very confident"],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [values[1], values[2], values[3]],
                  color: "#004c97",
                },
              ]}
              leftAxis={null}
              width={500}
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
export default EmotionsQuiz;
