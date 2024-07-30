import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

const emotionsQuizData = [
  {
    id: 1,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q1: I can recognise changes in my body and identify how I feel</p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={2}
          step={1}
          marks
          min={1}
          max={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">No confidence</span>
          <span className="w-20">Some confidence</span>
          <span className="w-50 text-end">Very confident</span>
        </div>
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Q2: I can understand how my emotions influence my thinking and
            behaviour
          </p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={2}
          step={1}
          marks
          min={1}
          max={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">No confidence</span>
          <span className="w-20">Some confidence</span>
          <span className="w-50 text-end">Very confident</span>
        </div>
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q3: I know how to manage negative emotions</p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={2}
          step={1}
          marks
          min={1}
          max={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">No confidence</span>
          <span className="w-20">Some confidence</span>
          <span className="w-50 text-end">Very confident</span>
        </div>
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Q4: I can identifying the warning signs when I am becoming angry and
            upset
          </p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={2}
          step={1}
          marks
          min={1}
          max={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">No confidence</span>
          <span className="w-20">Some confidence</span>
          <span className="w-50 text-end">Very confident</span>
        </div>
      </>
    ),
  },
  {
    id: 5,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q5: I know how to be assertive</p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={2}
          step={1}
          marks
          min={1}
          max={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">No confidence</span>
          <span className="w-20">Some confidence</span>
          <span className="w-50 text-end">Very confident</span>
        </div>
      </>
    ),
  },
  {
    id: 6,
    description: (
      <>
        <div className="results-quiz-main-wrapper form-17-results">
          <div className="row">
            <div className="col">
              <h2>Your results</h2>
            </div>
          </div>
        </div>
      </>
    ),
  },
];
export default emotionsQuizData;
