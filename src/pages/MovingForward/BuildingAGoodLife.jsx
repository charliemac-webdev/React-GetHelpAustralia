import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import BuildingAGoodLifeModuleData from "@/data/modules/MovingFoward/buildingAGoodLifeModuleData";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BuildingAGoodLifeModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_harmful_needs: 3,
    strategies_for_healthy_needs: 3,
  });
  const navigate = useNavigate();

  useEffect(() => {
    showMenu(false);
  }, []);

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      console.log("Submitting form...");
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "good-life-reflection-form",
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

  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
    // For example, you might want to save the current state, trigger an analytics event, etc.
  };

  const processedModules = BuildingAGoodLifeModuleData.map((module) => {
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

  const handlePostSubmit = () => {
    // Navigate to the next module
    navigate("/"); // Replace with the correct path to the next module
  };

  const moduleProps = {
    responses,
    onQuestionChange: handleQuestionChange,
  };

  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Building a good life</h2>
      </Heading>
      <MainContent>
        <br></br>
        <p>
          People from all over the world tend to want similar things in life in
          order to feel happy and satisfied. When people are happy with their
          lives, they're less likely to get into trouble.
        </p>
        <Module
          modules={processedModules}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="good-life-reflection-form"
          additionalFormFields={Object.keys(responses)}
        />
      </MainContent>
    </>
  );
};

export default BuildingAGoodLifeModule;
