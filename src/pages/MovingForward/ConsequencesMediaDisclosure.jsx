/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import DisclosureModuleData from "@/data/modules/MovingFoward/consequencesMediaAndDisclosureModuleData";

const ConsequencesMediaDisclosureModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_criminal_justice: 3,
    understanding_other_consequences: 3,
    understanding_helpful_ways: 3,
  });
  const navigate = useNavigate();

  useEffect(() => {
    showMenu(false);
  }, []);

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "consequences-reflection-form",
        ...responses,
      }).toString(),
    })
      .then(() => {
        console.log("Thank you for your feedback!");
        navigate("/relapse-prevention"); // Navigate to the next module after successful submission
      })
      .catch((error) => console.log(error));
  };

  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
    // For example, you might want to save the current state, trigger an analytics event, etc.
  };

  const processedModules = DisclosureModuleData.map((module) => {
    if (module.description.type === "reflection") {
      return {
        ...module,
        description: {
          ...module.description,
          render: () =>
            module.description.render({
              responses,
              onQuestionChange: handleQuestionChange,
            }),
        },
      };
    }
    return module;
  });
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Consequences, media impact and disclosure
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <p>This section will help you:</p>
        <ul className="content-list">
          <li>understand the criminal justice system and sentencing</li>
          <li>
            understand the impact that your conviction can have on your family,
            insurance coverage, and employment
          </li>
          <li>develop strategies for dealing with media coverage</li>
          <li>
            learn how to tell your partner, children, employer and friends about
            your offences
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          name="consequences-reflection-form"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="consequences-reflection-form"
          />
          <Module modules={processedModules} onContinue={handleContinue} />
        </form>
      </MainContent>
    </>
  );
};
export default ConsequencesMediaDisclosureModule;
