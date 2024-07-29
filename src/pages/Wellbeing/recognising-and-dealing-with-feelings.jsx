import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import RecognisingAndDealingWithFeelingsModuleData from "@/data/modules/Wellbeing/recognisingAndDealingWithFeelingsModuleData";

const RecognisingAndDealingWithFeelingsModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_emotions: 3,
    strategies_difficult_emotions: 3,
  });

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
            "form-name": "recognising-and-dealing-with-feelings-form",
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

  const processedModules = RecognisingAndDealingWithFeelingsModuleData.map(
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
        <h2 className="secondary-color">
          Recognising and dealing with feelings
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>How your emotions influence your thinking and behaviour</li>
          <li>How you cope with difficult emotions e.g. anger</li>
          <li>How to become more assertive</li>
        </ul>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          moduleProps={moduleProps}
          formName="recognising-and-dealing-with-feelings-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default RecognisingAndDealingWithFeelingsModule;
