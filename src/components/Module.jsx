import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Module = ({ modules, onContinue }) => {
  const [value, setValue] = useState(0);
  const [values, setValues] = useState([]);
  const modRef = useRef(null);

  useEffect(() => {
    console.log(values);
  }, [values]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    const elements = document.querySelectorAll(".MuiSlider-valueLabelLabel");
    const numbers = Array.from(elements).map((element) =>
      Number(element.textContent)
    );
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    if (value < modules.length - 1) {
      setValue(value + 1);
    }

    setValues((prevValues) => [...prevValues, sum]);
    if (onContinue) {
      onContinue(value + 1);
    }
  };

  useEffect(() => {
    if (modRef.current) {
      modRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [value]);

  const renderDescription = (description) => {
    if (typeof description === "object" && description !== null) {
      switch (description.type) {
        case "reflection":
          return description.render ? description.render() : null;
        case "content":
        default:
          return description.content;
      }
    }
    return description;
  };

  const currentModule = modules[value];
  const description = currentModule
    ? renderDescription(currentModule.description)
    : null;

  const sum = values.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className="container-fluid" ref={modRef}>
        <div
          className="row align-items-start"
          style={{ border: "1px solid #004c97" }}
        >
          <div className="d-flex flex-row m-0 p-0 h-100">
            <div className="col p-0 flex-grow-1 bg-primary-subtle">
              <div className="btn-container">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    onClick={() => setValue(index)}
                    className={`${
                      index === value
                        ? "semi-blue-background fs-5 text-light p-4 border border-light"
                        : "blue-background fs-5 text-dark p-4 border border-light"
                    }`}
                    role="button"
                  >
                    {module.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-8 p-2">
              {sum > 0 && value === modules.length - 1 ? (
                <>
                  <h4 className="secondary-color">Overall Score</h4>
                  <div className="bg-primary-subtle border border-primary p-3">
                    <p>Your score is: {sum}</p>
                  </div>
                  <br />
                </>
              ) : null}
              <article>{description}</article>
              <div className="d-flex justify-content-end">
                {value < modules.length - 1 && (
                  <Button
                    onClick={handleClick}
                    id="continue-button"
                    classes="btn"
                  >
                    Continue
                  </Button>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
