import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Module = ({
  modules,
  onContinue,
  onSubmit,
  moduleProps,
  formName,
  additionalFormFields = [],
}) => {
  const [value, setValue] = useState(0);
  const [values, setValues] = useState([]);
  const modRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    console.log(values);
  }, [values]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
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
      onContinue(value + 1, sum);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // Add any additional fields that might be specific to this module
    if (moduleProps.additionalFields) {
      Object.entries(moduleProps.additionalFields).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    // Add values to formData
    values.forEach((value, index) => {
      formData.append(`value_${index + 1}`, value);
    });

    onSubmit(formData, value === modules.length - 1);
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
          return description.render ? description.render(moduleProps) : null;
        case "content":
          return description.render
            ? description.render(moduleProps)
            : description.content;
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

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={formName} />
      {additionalFormFields.map((field) => (
        <input key={field} type="hidden" name={field} />
      ))}
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
              <article>{description}</article>
              <div className="d-flex justify-content-end">
                {value < modules.length - 1 ? (
                  <Button
                    onClick={handleClick}
                    id="continue-button"
                    classes="btn"
                    type="button"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button id="submit-button" classes="btn" type="submit">
                    Submit
                  </Button>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Module;
