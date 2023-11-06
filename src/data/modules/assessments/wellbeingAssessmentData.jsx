import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

const wellbeingAssessmentData = [
  {
    id: 1,
    description: (
      <>
        <h4 className="secondary-color">Physical self-care</h4>
        <p>
          If we are looking after our bodies, we will be able to think and feel
          better too.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>
            are you getting enough sleep? (Seven or more hours a night is
            recommended for adults)
          </li>
          <li>
            are you eating healthily and giving your body what it needs? (Are
            you eating five portions of fruit and vegetables a day)
          </li>
          <li>
            are you exercising enough? (The NHS recommends some type of physical
            activity every day)
          </li>
          <li>
            are you looking after your health? (For example, seeing a doctor if
            you are unwell or taking prescribed medication as instructed)
          </li>
        </ul>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Considering the above what score would you give your physical
            self-care out of 10?
          </p>
        </div>
        <br />
        <br />
        <Slider
          aria-label="Always visible"
          defaultValue={5}
          step={1}
          marks
          min={1}
          max={10}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span className="w-50">I don't engage in any physical self-care</span>
          <span className="w-50">I engage in excellent physical self-care</span>
        </div>
      </>
    ),
  },
];
export default wellbeingAssessmentData;
