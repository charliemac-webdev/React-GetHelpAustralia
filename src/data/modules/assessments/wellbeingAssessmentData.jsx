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
  {
    id: 2,
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
          <span className="w-50">I don't engage in any social self-care</span>
          <span className="w-50">I engage in excellent social self-care</span>
        </div>
      </>
    ),
  },
  {
    id: 3,
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
          <span className="w-50">I don't engage in any mental self-care</span>
          <span className="w-50">I engage in excellent mental self-care</span>
        </div>
      </>
    ),
  },
  {
    id: 4,
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
          <span className="w-50">
            I don't engage in any spiritual self-care
          </span>
          <span className="w-50">
            I engage in excellent spiritual self-care
          </span>
        </div>
      </>
    ),
  },
  {
    id: 5,
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
          <span className="w-50">
            I don't engage in any emotional self-care
          </span>
          <span className="w-50">
            I engage in excellent emotional self-care
          </span>
        </div>
      </>
    ),
  },
  {
    id: 6,
    description: (
      <>
        <h4 className="secondary-color">Wellbeing assessment complete</h4>
        <p>
          <b>Your results</b>
        </p>
        <div className="results-quiz-main-wrapper">
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row results-quiz-3-wrapper">
            <div className="col">
              <ul className="m-0 p-0 list-unstyled d-flex flex-column">
                <li style={{ width: 10 }}>
                  <span>physical</span>
                </li>
                <li style={{ width: 20 }}>
                  <span>social</span>
                </li>
                <li style={{ width: 30 }}>
                  <span>mental</span>
                </li>
                <li style={{ width: 40 }}>
                  <span>spiritual</span>
                </li>
                <li style={{ width: 60 }}>
                  <span>emotional</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="results-quiz-3-graph mb-5">
                <ul className="m-0 p-0 list-unstyled d-flex flex-column">
                  <li style={{ width: 10 }}>
                    <span>1</span>
                  </li>
                  <li style={{ width: 20 }}>
                    <span>2</span>
                  </li>
                  <li style={{ width: 30 }}>
                    <span>3</span>
                  </li>
                  <li style={{ width: 40 }}>
                    <span>4</span>
                  </li>
                  <li style={{ width: 60 }}>
                    <span>6</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];
export default wellbeingAssessmentData;
