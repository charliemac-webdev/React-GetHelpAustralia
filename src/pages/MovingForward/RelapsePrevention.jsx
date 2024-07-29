import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import RelapsePreventionModuleData from "@/data/modules/MovingFoward/relapsePreventionModuleData";

const RelapsePreventionModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_relapse: 3,
    understanding_relapse_risk_factors: 3,
    ways_to_cope: 3,
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
        "form-name": "relapse-reflection-form",
        ...responses,
      }).toString(),
    })
      .then(() => {
        console.log("Thank you for your feedback!");
        navigate("/building-a-good-life"); // Navigate to the next module after successful submission
      })
      .catch((error) => console.log(error));
  };

  const handleContinue = (newModuleIndex) => {
    console.log(`Moving to module ${newModuleIndex}`);
    // You can add any additional logic here that needs to run when the user moves to the next module
    // For example, you might want to save the current state, trigger an analytics event, etc.
  };

  const processedModules = RelapsePreventionModuleData.map((module) => {
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
        <h2 className="secondary-color">Relapse prevention</h2>
      </Heading>
      <MainContent>
        <br></br>
        <p>
          Old patterns of behaviour can be returned to, especially at times of
          stress. This section is all about relapse prevention – how to prevent
          a relapse, and if you do slip, how to pick yourself up and get
          building again.
        </p>
        <form
          onSubmit={handleSubmit}
          name="relapse-reflection-form"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="relapse-reflection-form"
          />
          <Module modules={processedModules} onContinue={handleContinue} />
        </form>
      </MainContent>
    </>
  );
};
export default RelapsePreventionModule;
