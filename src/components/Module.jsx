import { useEffect, useRef, useState } from "react";
import Button from "./Button";

// Define a functional component called Module that takes modules as a prop
const Module = ({ modules }) => {
  // Define state variables using the useState hook
  const [value, setValue] = useState(0); // value is the index of the currently selected module
  const [values, setValues] = useState([]); // values is an array to store the sum of numbers from slider labels
  const { description } = modules[value]; // destructure the description from the module at the current value index
  let sum = values.reduce((acc, curr) => acc + curr, 0);
  // This useEffect hook will be called whenever the 'values' dependency changes
  useEffect(() => {
    // Log the current value of 'values' to the console
    console.log(values);
  }, [values]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount
  const modRef = useRef(null);
  // Define a function to handle the button click event
  const handleClick = () => {
    // Get all elements with class MuiSlider-valueLabelLabel
    const elements = document.querySelectorAll(".MuiSlider-valueLabelLabel");
    // console.log(elements);

    // Convert the contents of the elements to numbers and store in an array
    const numbers = Array.from(elements).map((element) =>
      Number(element.textContent)
    );
    // console.log(numbers);

    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    // If the current value is less than the length of modules array - 1, increment the value
    if (value < modules.length - 1) {
      setValue(value + 1);
    }
    // console.log(sum);

    // Update the values array with the new sum
    setValues((prevValues) => [...prevValues, sum]);
  };

  const [modRefReady, setModRefReady] = useState(false);

  // useEffect to update modRefReady when modRef.current is set
  useEffect(() => {
    if (modRef.current) {
      setModRefReady(true);
    }
  }, [modRef.current]);

  // Handle click event
  const handleClickAndScroll = () => {
    handleClick();
    if (modRefReady) {
      modRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define a new value based on the current value
  const newValue =
    value < modules.length - 1 ? (
      <Button
        onClick={handleClickAndScroll}
        ident="continue-button"
        classes="btn"
      >
        Continue
      </Button>
    ) : null;

  // Return the JSX for the Module component
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
                {modules.map((module, index) => {
                  return (
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
                  );
                })}
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
              <div className="d-flex justify-content-end">{newValue}</div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Module component as the default export
export default Module;
