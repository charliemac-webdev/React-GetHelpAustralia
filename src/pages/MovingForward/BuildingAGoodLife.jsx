import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import BuildingAGoodLifeModuleData from "@/data/modules/MovingFoward/buildingAGoodLifeModuleData";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "good-life-reflection-form",
        ...responses,
      }).toString(),
    })
      .then(() => {
        console.log("Thank you for your feedback!");
        navigate("/"); // Navigate to the next module after successful submission
      })
      .catch((error) => console.log(error));
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
        <form
          onSubmit={handleSubmit}
          name="good-life-reflection-form"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="good-life-reflection-form"
          />
          <Module modules={processedModules} onContinue={handleContinue} />
        </form>
      </MainContent>
    </>
  );
};

export default BuildingAGoodLifeModule;
