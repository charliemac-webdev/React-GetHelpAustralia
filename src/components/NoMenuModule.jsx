import { useState } from "react";
import Button from "./Button";

const NoMenuModule = ({ modules }) => {
  const [value, setValue] = useState(0);
  const { description } = modules[value];

  const handleClick = () => {
    if (value < modules.length - 1) {
      setValue(value + 1);
    }
  };
  const newValue =
    value < modules.length - 1 ? (
      <Button onClick={handleClick} ident="continue-button" classes="btn">
        Continue
      </Button>
    ) : null;

  return (
    <>
      <div className="container-fluid">
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
            <div className="col-8 p-2">
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

export default NoMenuModule;
