/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import ProblemSolvingModuleData from "@/data/modules/MovingFoward/problemSolvingModuleData";

const ProblemSolvingModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_problem_solving: 3,
    acting_on_impulse: 3,
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
        "form-name": "problem-solving-reflection-form",
        ...responses,
      }).toString(),
    })
      .then(() => {
        console.log("Thank you for your feedback!");
        navigate("/consequences-media-impact-and-disclosure"); // Navigate to the next module after successful submission
      })
      .catch((error) => console.log(error));
  };
  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
    // For example, you might want to save the current state, trigger an analytics event, etc.
  };

  const processedModules = ProblemSolvingModuleData.map((module) => {
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
        <h2 className="secondary-color">Problem solving</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>
            The benefits of problem solving and how it can be applied to a range
            of different types of problems
          </li>
          <li>Ways to avoid acting on impulse</li>
        </ul>
        <form
          onSubmit={handleSubmit}
          name="problem-solving-reflection-form"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="problem-solving-reflection-form"
          />
          <Module modules={processedModules} onContinue={handleContinue} />
        </form>
      </MainContent>
    </>
  );
};
export default ProblemSolvingModule;
