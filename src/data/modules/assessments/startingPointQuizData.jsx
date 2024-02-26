import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

const startingPointQuizData = [
  {
    id: 1,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q1: I can identify my motivations for illegal online behaviour</p>
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
          <span className="w-50">Very little knowledge</span>
          <span className="w-50 text-end">Secure understanding</span>
        </div>
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q2: I can name triggers for my illegal online behaviour</p>
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
          <span className="w-50">Very little knowledge</span>
          <span className="w-50 text-end">Secure understanding</span>
        </div>
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Q3: I can identify other life experiences that may influence my
            online behaviour
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
          <span className="w-50">Very little knowledge</span>
          <span className="w-50 text-end">Secure understanding</span>
        </div>
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Q4: I understand how I came to first behave illegally online</p>
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
          <span className="w-50">Very little knowledge</span>
          <span className="w-50 text-end">Secure understanding</span>
        </div>
      </>
    ),
  },
  {
    id: 5,
    description: (
      <>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Q5: I am aware of my patterns of internet use and when I am most
            likely to behave illegally
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
          <span className="w-50">Very little knowledge</span>
          <span className="w-50 text-end">Secure understanding</span>
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
export default startingPointQuizData;
