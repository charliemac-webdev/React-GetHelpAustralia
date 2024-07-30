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

  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      console.log("Submitting form...");
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "consequences-reflection-form",
            ...Object.fromEntries(formData),
            ...responses,
          }).toString(),
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        console.log(
          "Form submitted successfully. Thank you for your feedback!"
        );
      } catch (error) {
        console.error("Form submission error:", error);
      }
    } else {
      // Handle intermediate submissions if needed
      console.log("Intermediate submission:", Object.fromEntries(formData));
    }
  };

  const handlePostSubmit = () => {
    // Navigate to the next module
    navigate("/relapse-prevention"); // Replace with the correct path to the next module
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

  const moduleProps = {
    responses,
    onQuestionChange: handleQuestionChange,
  };
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
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="consequences-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};
export default ConsequencesMediaDisclosureModule;
