import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import SexualCommunicationWithChildrenModuleData from "@/data/modules/UnderstandingOnlineBehaviour/sexualCommunicationWithChildrenModuleData";

const SexualCommunicationWithChildrenModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    online_engagement_with_children: 3,
    understanding_harmful_online_communicating: 3,
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
            "form-name": "sexual-communication-with-children-reflection-form",
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
    navigate("/problem-of-immediate-gratification"); // Replace with the correct path to the next module
  };

  const processedModules = SexualCommunicationWithChildrenModuleData.map(
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
        <h2 className="secondary-color">
          Sexual communication with children online
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Your motivation for engaging sexually with children online</li>
          <li>How your behaviour progressed into sexual communication</li>
          <li>How you might have justified your behaviour</li>
        </ul>
        <br></br>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="sexual-communication-with-children-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default SexualCommunicationWithChildrenModule;
