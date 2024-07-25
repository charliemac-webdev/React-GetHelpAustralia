import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Survey = ({ nextRoute, formName }) => {
  const [formData, setFormData] = useState({
    gender: "",
    modules: [],
    age: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        modules: checked
          ? [...prevState.modules, value]
          : prevState.modules.filter((module) => module !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const dataToSubmit = {
      "form-name": formName,
      name: `${formName} - ${timestamp}`,
      ...formData,
    };
    console.log("Submitting form data:", dataToSubmit);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log("Form submission result:", result);
      navigate(nextRoute);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <>
      <form name={formName} onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value={formName} />
        <input
          type="hidden"
          name="name"
          value={`${formName} - ${new Date().toISOString()}`}
        />
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
                  checked={formData.gender === "male"}
                  onChange={handleChange}
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
                  checked={formData.gender === "female"}
                  onChange={handleChange}
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
                  checked={formData.gender === "non-binary"}
                  onChange={handleChange}
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
                  checked={formData.gender === "other"}
                  onChange={handleChange}
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
              value={formData.age}
              onChange={handleChange}
            >
              <option value="">Please select your age range</option>
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
                name="modules"
                id="why"
                value="Understanding Why"
                checked={formData.modules.includes("Understanding Why")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="why">
                Understanding Why
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="triggers"
                value="Triggers"
                checked={formData.modules.includes("Triggers")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="triggers">
                Triggers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Images are Children"
                value="Images are Children"
                checked={formData.modules.includes("Images are Children")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Images are Children">
                Images are Children
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Addiction"
                value="Addiction"
                checked={formData.modules.includes("Addiction")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Addiction">
                Addiction
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Online Relationships"
                value="Online Relationships"
                checked={formData.modules.includes("Online Relationships")}
                onChange={handleChange}
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
                name="modules"
                id="Dealing with Feelings"
                value="Dealing with Feelings"
                checked={formData.modules.includes("Dealing with Feelings")}
                onChange={handleChange}
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
                name="modules"
                id="Problem Solving"
                value="Problem Solving"
                checked={formData.modules.includes("Problem Solving")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Problem Solving">
                Problem Solving
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Relapse Prevention"
                value="Relapse Prevention"
                checked={formData.modules.includes("Relapse Prevention")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Relapse Prevention">
                Relapse Prevention
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Problem of Immediate Gratification"
                value="Problem of Immediate Gratification"
                checked={formData.modules.includes(
                  "Problem of Immediate Gratification"
                )}
                onChange={handleChange}
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
                name="modules"
                id="Taking Responsibility"
                value="Taking Responsibility"
                checked={formData.modules.includes("Taking Responsibility")}
                onChange={handleChange}
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
                name="modules"
                id="Fantasy"
                value="Fantasy"
                checked={formData.modules.includes("Fantasy")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Fantasy">
                Fantasy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Problematic Collecting"
                value="Problematic Collecting"
                checked={formData.modules.includes("Problematic Collecting")}
                onChange={handleChange}
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
                name="modules"
                id="Talking to Others"
                value="Talking to Others"
                checked={formData.modules.includes("Talking to Others")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Talking to Others">
                Talking to Others
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Self Esteem and Assertiveness"
                value="Self Esteem and Assertiveness"
                checked={formData.modules.includes(
                  "Self Esteem and Assertiveness"
                )}
                onChange={handleChange}
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
                name="modules"
                id="Self-Talk"
                value="Self-Talk"
                checked={formData.modules.includes("Self-Talk")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Self-Talk">
                Self-Talk
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="modules"
                id="Building a Good Life"
                value="Building a Good Life"
                checked={formData.modules.includes("Building a Good Life")}
                onChange={handleChange}
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
