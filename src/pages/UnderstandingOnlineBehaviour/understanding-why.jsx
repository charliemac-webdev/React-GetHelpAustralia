import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  submitStartingPointScoreToNetlify,
  updateStartingPointScores,
} from "@/context/startingPointScoreSlice";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import understandingWhyModuleData from "@/data/modules/UnderstandingOnlineBehaviour/understandingWhyModuleData";

const UnderstandingWhyModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    better_understanding_sexual_behaviour: 3,
    better_understanding_key_events: 3,
    patterns_of_internet_use: 3,
  });

  const [startingPointData, setStartingPointData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submissionStatus = useSelector(
    (state) => state.startingPointScore.submissionStatus
  );
  const startingPointScores = useSelector(
    (state) => state.startingPointScore.scores
  );

  useEffect(() => {
    showMenu(false);
  }, []);

  const handleContinue = (step, data) => {
    if (data && data["startingPoint-assessment"]) {
      setStartingPointData(data["startingPoint-assessment"]);
      dispatch(updateStartingPointScores(data["startingPoint-assessment"]));
    }
  };

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const submitStartingPointForm = async (formData) => {
    formData.append("form-name", "startingPoint-assessment");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error("StartingPoint form submission failed");
      console.log("StartingPoint form submitted successfully");
      return true;
    } catch (error) {
      console.error("StartingPoint form submission error:", error);
      return false;
    }
  };

  const submitReflectionForm = async () => {
    const reflectionFormData = new FormData();
    reflectionFormData.append("form-name", "understanding-why-reflection-form");
    Object.entries(responses).forEach(([key, value]) => {
      reflectionFormData.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(reflectionFormData).toString(),
      });
      if (!response.ok) throw new Error("Reflection form submission failed");
      console.log("Reflection form submitted successfully");
      return true;
    } catch (error) {
      console.error("Reflection form submission error:", error);
      return false;
    }
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      const startingPointFormData = new FormData();
      Object.entries(startingPointData).forEach(([key, value]) => {
        startingPointFormData.append(key, value);
      });
      startingPointFormData.append(
        "startingPointTotalScore",
        Object.values(startingPointData).reduce((a, b) => a + b, 0)
      );

      try {
        const startingPointSubmitted = await submitStartingPointForm(
          startingPointFormData
        );
        const reflectionSubmitted = await submitReflectionForm();

        if (startingPointSubmitted && reflectionSubmitted) {
          console.log("Both forms submitted successfully");
          dispatch(submitStartingPointScoreToNetlify(startingPointFormData));
          return true;
        } else {
          throw new Error("One or both form submissions failed");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        return false;
      }
    } else {
      // Handle intermediate submissions if needed
      console.log("Intermediate submission:", Object.fromEntries(formData));
      return true;
    }
  };

  const handlePostSubmit = () => {
    // Navigate to the next module only after successful submission
    navigate("/triggers");
  };

  const moduleProps = {
    dispatch,
    updateStartingPointScores,
    startingPointScores,
    responses,
    onQuestionChange: handleQuestionChange,
  };
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Understanding why</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Your online sexual behaviour</li>
          <li>How your sexual behaviour moved into offending behaviour</li>
          <li>Your motivations to offend</li>
          <li>
            Patterns and trends with your current use of the internet for sexual
            reasons
          </li>
        </ul>
        <Module
          modules={understandingWhyModuleData}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="startingPoint-quiz"
          additionalFormFields={[
            "startingPointScore_1",
            "startingPointScore_2",
            "startingPointScore_3",
            "startingPointScore_4",
            "startingPointScore_5",
            "startingPointTotalScore",
          ]}
        />
      </MainContent>
    </>
  );
};

export default UnderstandingWhyModule;
