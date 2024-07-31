import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Module = ({
  modules,
  onContinue,
  onSubmit,
  moduleProps,
  formName,
  additionalFormFields = [],
  onPostSubmit,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({});
  const modRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAssessmentData = (data) => {
    setAssessmentData((prevData) => ({
      ...prevData,
      [modules[currentStep].id]: data,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const currentModule = modules[currentStep];

    if (currentModule.type === "assessment") {
      const assessmentElements = document.querySelectorAll(
        currentModule.dataSelector
      );
      const assessmentData = Array.from(assessmentElements).map((element) =>
        currentModule.dataExtractor
          ? currentModule.dataExtractor(element)
          : element.value
      );
      handleAssessmentData(assessmentData);
    }

    if (currentStep < modules.length - 1) {
      setCurrentStep(currentStep + 1);
      if (onContinue) {
        onContinue(currentStep + 1, assessmentData);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all steps are completed
    if (currentStep < modules.length - 1) {
      console.log("Please complete all steps before submitting.");
      return;
    }

    const formData = new FormData(formRef.current);

    if (moduleProps.additionalFields) {
      Object.entries(moduleProps.additionalFields).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    // Append all assessment data to formData
    Object.entries(assessmentData).forEach(([moduleId, data]) => {
      if (Array.isArray(data)) {
        data.forEach((value, index) => {
          formData.append(`${moduleId}_${index + 1}`, value);
        });
      } else {
        formData.append(moduleId, JSON.stringify(data));
      }
    });

    try {
      await onSubmit(formData, true);
      if (onPostSubmit) {
        onPostSubmit();
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  useEffect(() => {
    if (modRef.current) {
      modRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  const renderDescription = (description) => {
    if (typeof description === "object" && description !== null) {
      switch (description.type) {
        case "reflection":
        case "assessment":
        case "quiz":
          return description.render
            ? description.render({
                ...moduleProps,
                onDataChange: handleAssessmentData,
              })
            : null;
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

  const currentModule = modules[currentStep];
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
        <input key={field} type="hidden" name={`${formName}-${field}`} />
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
                    onClick={() => setCurrentStep(index)}
                    className={`${
                      index === currentStep
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
                {currentStep < modules.length - 1 ? (
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
