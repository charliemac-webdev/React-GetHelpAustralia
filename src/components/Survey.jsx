import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Survey = ({ nextRoute, formName }) => {
  const [shModules, setShModules] = useState(false);
  const [anotherModule, setAnotherModule] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = useRef();
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": formName,
        shModules: shModules ? "Sh Modules" : "",
        anotherModule: anotherModule ? "Another Module" : "",
      }).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        navigate(nextRoute);
      })
      .catch((error) => console.error("Form submission error:", error));
  };
  return (
    <>
      <form
        name={formName}
        method="post"
        data-netlify="true"
        action="/"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={formName} />
        <div className="row align-items-start pb-5">
          <div className="col">
            <h5 className="secondary-color fw-semibold pb-2">Gender *</h5>

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
                type="checkbox"
                name="shModules"
                id="shModules"
                checked={shModules}
                onChange={(e) => setShModules(e.target.checked)}
              />
              <label htmlFor="shModules">Sh Modules</label>
              {/* <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules[]"
                id="why"
                value="Understanding Why"
              />
              <label className="form-check-label" htmlFor="why">
                Understanding Why
              </label> */}
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="anotherModule"
                id="anotherModule"
                checked={anotherModule}
                onChange={(e) => setAnotherModule(e.target.checked)}
              />
              <label htmlFor="anotherModule">Another Module</label>
              {/* <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules[]"
                id="triggers"
                value="Triggers"
              />
              <label className="form-check-label" htmlFor="triggers">
                Triggers
              </label> */}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Images are Children"
              />
              <label className="form-check-label" htmlFor="Images are Children">
                Images are Children
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Addiction[]"
                id="Addiction"
                value="Addiction"
              />
              <label className="form-check-label" htmlFor="Addiction">
                Addiction
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Online Relationships[]"
                id="Online Relationships"
              />
              <label
                className="form-check-label"
                htmlFor="Online Relationships"
              >
                Online Relationships
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Dealing with Feelings[]"
                id="Dealing with Feelings"
                value="Dealing with Feelings"
              />
              <label
                className="form-check-label"
                htmlFor="Dealing with Feelings"
              >
                Dealing with Feelings
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Problem Solving"
                value="Problem Solving"
              />
              <label className="form-check-label" htmlFor="Problem Solving">
                Problem Solving
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Relapse Prevention"
                value="Relapse Prevention"
              />
              <label className="form-check-label" htmlFor="Relapse Prevention">
                Relapse Prevention
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Problem of Immediate Gratification"
                value="Problem of Immediate Gratification"
              />
              <label
                className="form-check-label"
                htmlFor="Problem of Immediate Gratification"
              >
                Problem of Immediate Gratification
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Taking Responsibility"
                value="Taking Responsibility"
              />
              <label
                className="form-check-label"
                htmlFor="Taking Responsibility"
              >
                Taking Responsibility
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Fantasy"
                value="Fantasy"
              />
              <label className="form-check-label" htmlFor="Fantasy">
                Fantasy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Problematic Collecting"
                value="Problematic Collecting"
              />
              <label
                className="form-check-label"
                htmlFor="Problematic Collecting"
              >
                Problematic Collecting
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Talking to Others"
                value="Talking to Others"
              />
              <label className="form-check-label" htmlFor="Talking to Others">
                Talking to Others
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Self Esteem and Assertiveness"
                value="Self Esteem and Assertiveness"
              />
              <label
                className="form-check-label"
                htmlFor="Self Esteem and Assertiveness"
              >
                Self Esteem and Assertiveness
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Self-Talk"
                value="Self-Talk"
              />
              <label className="form-check-label" htmlFor="Self-Talk">
                Self-Talk
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Completed Modules"
                id="Building a Good Life"
                value="Building a Good Life"
              />
              <label
                className="form-check-label"
                htmlFor="Building a Good Life"
              >
                Building a Good Life
              </label>
            </div>
          </div>
        </div>
        <Button type="submit" id="continue-button" classes="btn">
          Continue
        </Button>
      </form>
    </>
  );
};
export default Survey;
