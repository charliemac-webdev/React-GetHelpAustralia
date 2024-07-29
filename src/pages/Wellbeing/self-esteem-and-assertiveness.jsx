import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import selfEsteemAndAssertivenessModuleData from "@/data/modules/Wellbeing/selfEsteemAndAssertivenessModuleData";

const SelfEsteemAndAssertivenessModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_of_self_esteem: 3,
    importance_of_being_healthy: 3,
    ways_to_be_more_assertive: 3,
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
            "form-name": "self-esteem-reflection-form",
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
    navigate("/self-talk"); // Replace with the correct path to the next module
  };

  const processedModules = selfEsteemAndAssertivenessModuleData.map(
    (module) => {
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
    }
  );

  const moduleProps = {
    responses,
    onQuestionChange: handleQuestionChange,
  };
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Self esteem and assertiveness</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>What self-esteem is and how to increase it</li>
          <li>Importance of being healthy and positive</li>
          <li>How to become more assertive</li>
        </ul>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="self-esteem-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default SelfEsteemAndAssertivenessModule;
