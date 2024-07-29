import { Slider } from "@mui/material";

function valuetext(value) {
  return value;
}

const wellbeingAssessmentData = [
  {
    id: 0,
    description: (
      <>
        <h4 className="secondary-color">Physical self-care</h4>
        <p>
          If we are looking after our bodies, we will be able to think and feel
          better too.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>are you getting enough sleep? (7+ hours a night)</li>
          <li>
            are you eating healthily and giving your body what it needs? (5+
            portions of fruit and vegetables per day)
          </li>
          <li>
            are you exercising enough? (Any type of physical activity every day)
          </li>
          <li>
            are you looking after your health? (Seeing a GP when required, and
            taking prescribed medication)
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
          <span className="w-25">I don't engage in any physical self-care</span>
          <span className="w-25">I engage in excellent physical self-care</span>
        </div>
      </>
    ),
  },
  {
    id: 1,
    description: (
      <>
        <h4 className="secondary-color">Social self-care</h4>
        <p>
          We all have different needs but connection with other people can help
          deal with stress, reduce loneliness and help to have fun.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>do you give enough time to connect with others?</li>
          <li>do all of your connections leave you feeling positive?</li>
          <li>do some of your connections leave you feeling not so good?</li>
        </ul>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Considering the above what score would you give your social
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
          <span className="w-25">I don't engage in any social self-care</span>
          <span className="w-25">I engage in excellent social self-care</span>
        </div>
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        <h4 className="secondary-color">Mental self-care</h4>
        <p>
          The way that we think influences our psychological wellbeing. Mental
          self-care includes taking part in activities or hobbies that we enjoy
          and using positive self-talk.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>
            are you making enough time for activities that mentally stimulate
            you?
          </li>
          <li>are you doing proactive things to stay well mentally?</li>
          <li>is your self-talk generally positive or negative?</li>
        </ul>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Considering the above what score would you give your mental
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
          <span className="w-25">I don't engage in any mental self-care</span>
          <span className="w-25">I engage in excellent mental self-care</span>
        </div>
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        <h4 className="secondary-color">Spiritual self-care</h4>
        <p>
          Whether we draw strength from meditation, taking a walk in the park,
          attending a religious service or praying, spiritual self-care is
          important too.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>
            are you engaging in any activities or practices that you find
            fulfilling?
          </li>
          <li>
            are you involved in anything that helps you develop a deeper sense
            of meaning, understanding, or connection?
          </li>
        </ul>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Considering the above what score would you give your spiritual
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
          <span className="w-25">
            I don't engage in any spiritual self-care
          </span>
          <span className="w-25">
            I engage in excellent spiritual self-care
          </span>
        </div>
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        <h4 className="secondary-color">Emotional self-care</h4>
        <p>
          It is important for us to recognise, acknowledge and express our
          feelings on a regular basis. These help us to better understand
          ourselves.
        </p>
        <p>Ask yourself these questions:</p>
        <ul className="content-list">
          <li>do you feel able to share your feelings with others?</li>
          <li>
            do you have healthy coping mechanisms to deal with difficult
            emotions, anxiety, or low self-esteem?
          </li>
          <li>
            do you have activities in your life that help to make you feel
            revitalised?
          </li>
        </ul>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            Considering the above what score would you give your emotional
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
          <span className="w-25">
            I don't engage in any emotional self-care
          </span>
          <span className="w-25">
            I engage in excellent emotional self-care
          </span>
        </div>
      </>
    ),
  },
  {
    id: 5,
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
export default wellbeingAssessmentData;
