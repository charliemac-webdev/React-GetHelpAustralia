const Survey = () => {
  return (
    <>
      <div className="row align-items-start pb-5">
        <div className="col">
          <h5 className="secondary-color fw-semibold pb-2">Gender *</h5>
          <form name="k10-survey" method="post">
            <div className="form-check form-check-inline">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-male"
                  value="male"
                />
                <label className="form-check-label" htmlFor="gender-male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-female"
                  value="female"
                />
                <label className="form-check-label" htmlFor="gender-female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-non-binary"
                  value="non-binary"
                />
                <label className="form-check-label" htmlFor="gender-non-binary">
                  Non-Binary
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-other"
                  value="other"
                />
                <label className="form-check-label" htmlFor="gender-other">
                  I prefer to be described in a different way
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="col">
          <h5 className="secondary-color fw-semibold">Age *</h5>
          <select
            name="age"
            id="select-age"
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              Please select your age range
            </option>
            <option value="Under 15">Under 15</option>
            <option value="15-19">15-19</option>
            <option value="20-24">20-24</option>
            <option value="25-29">25-29</option>
            <option value="30-34">30-34</option>
            <option value="35-39">35-39</option>
            <option value="40-44">40-44</option>
            <option value="45-49">45-49</option>
            <option value="50-54">50-54</option>
            <option value="55-59">55-59</option>
            <option value="60-64">60-64</option>
            <option value="65-69">65-69</option>
            <option value="70-74">70-74</option>
            <option value="75-79">75-79</option>
            <option value="80+">80+</option>
          </select>
        </div>
      </div>
      <div className="row pb-2">
        <h5 className="secondary-color fw-semibold">
          Which of the Self-help modules have you completed (if any)?
        </h5>
      </div>
      <div className="row align-items-start pb-5">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radiowhy"
              value=""
            />
            <label className="form-check-label" htmlFor="radiowhy">
              Understanding Why
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radiotriggers"
              value=""
            />
            <label className="form-check-label" htmlFor="radiotriggers">
              Triggers
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-images"
            />
            <label className="form-check-label" htmlFor="radio-images">
              Images are Children
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-addiction"
            />
            <label className="form-check-label" htmlFor="radio-addiction">
              Addiction
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-online"
            />
            <label className="form-check-label" htmlFor="radio-online">
              Online Relationships
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-dealing"
            />
            <label className="form-check-label" htmlFor="radio-dealing">
              Dealing with Feelings
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-problem"
            />
            <label className="form-check-label" htmlFor="radio-problem">
              Problem Solving
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-relapse"
            />
            <label className="form-check-label" htmlFor="radio-relapse">
              Relapse Prevention
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-gratification"
            />
            <label className="form-check-label" htmlFor="radio-gratification">
              Problem of Immediate Gratification
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-responsibility"
            />
            <label className="form-check-label" htmlFor="radio-responsibility">
              Taking Responsibility
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-fantasy"
            />
            <label className="form-check-label" htmlFor="radio-fantasy">
              Fantasy
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-collecting"
            />
            <label className="form-check-label" htmlFor="radio-collecting">
              Problematic Collecting
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-talking"
            />
            <label className="form-check-label" htmlFor="radio-talking">
              Talking to Others
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-assertiveness"
            />
            <label className="form-check-label" htmlFor="radio-assertiveness">
              Self Esteem and Assertiveness
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-self-talk"
            />
            <label className="form-check-label" htmlFor="radio-self-talk">
              Self-Talk
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="shModules"
              id="radio-building"
            />
            <label className="form-check-label" htmlFor="radio-building">
              Building a Good Life
            </label>
          </div>
        </div>
      </div>
      {/* <Button ident="submit-button" classes="btn">
        Submit
      </Button> */}
    </>
  );
};
export default Survey;
