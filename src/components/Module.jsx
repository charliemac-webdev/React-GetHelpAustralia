import { useState } from "react";
import Button from "./Button";

const Module = ({ modules }) => {
  const [value, setValue] = useState(0);
  const { id, title, description } = modules[value];

  return (
    <>
      <div className="container">
        <div
          className="row align-items-start"
          style={{ border: "1px solid #004c97", height: "100vh" }}
        >
          <div className="col p-0 bg-primary-subtle h-100">
            <div className="btn-container">
              {modules.map((module, index) => {
                return (
                  <div
                    key={module.id}
                    onClick={() => setValue(index)}
                    className="bg-primary text-light p-4 border border-light"
                    role="button"
                  >
                    {module.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col h-100 overflow-auto pt-2">
            <article>{description}</article>
            <div className="d-flex justify-content-end">
              <Button ident="continue-button" classes="btn">
                Continue
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Module;
