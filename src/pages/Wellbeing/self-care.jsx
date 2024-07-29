import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  submitWellbeingScoreToNetlify,
  updateWellbeingScores,
} from "@/context/wellbeingScoreSlice";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import SelfCareModuleData from "@/data/modules/Wellbeing/selfCareModuleData";

const SelfCareModule = ({ showMenu }) => {
  const [responses, setResponses] = useState({
    understanding_self_care: 3,
    self_care_plan: 3,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submissionStatus = useSelector(
    (state) => state.wellbeingScore.submissionStatus
  );
  const wellbeingScores = useSelector((state) => state.wellbeingScore.scores);

  useEffect(() => {
    showMenu(false);
  }, []);

  const handleContinue = (step, score) => {
    dispatch(updateWellbeingScores([...wellbeingScores, score]));
  };

  const handleQuestionChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const submitWellbeingForm = async (formData) => {
    formData.append("form-name", "wellbeing-assessment");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error("Wellbeing form submission failed");
      console.log("Wellbeing form submitted successfully");
    } catch (error) {
      console.error("Wellbeing form submission error:", error);
    }
  };

  const submitReflectionForm = async () => {
    const reflectionFormData = new FormData();
    reflectionFormData.append("form-name", "self-care-reflection");
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
    } catch (error) {
      console.error("Reflection form submission error:", error);
    }
  };

  const handleSubmit = async (formData, isFinalSubmission) => {
    if (isFinalSubmission) {
      try {
        await submitWellbeingForm(formData);
        await submitReflectionForm();
        console.log("Both forms submitted successfully");
        dispatch(submitWellbeingScoreToNetlify(formData));
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
    navigate("/guilt-and-shame"); // Replace with the correct path to the next module
  };

  const moduleProps = {
    dispatch,
    updateWellbeingScores,
    wellbeingScores,
    responses,
    onQuestionChange: handleQuestionChange,
  };

  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Self care</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>what self-care is and why it's important</li>
          <li>basic self-care strategies</li>
          <li>how to create a self-care plan.</li>
        </ul>
        <Module
          modules={SelfCareModuleData}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
          onPostSubmit={handlePostSubmit}
          moduleProps={moduleProps}
          formName="wellbeing-assessment"
          additionalFormFields={[
            "wellbeingScore_1",
            "wellbeingScore_2",
            "wellbeingScore_3",
            "wellbeingScore_4",
            "wellbeingScore_5",
            "wellbeingTotalScore",
          ]}
        />
        {submissionStatus === "succeeded" && (
          <p>Forms submitted successfully!</p>
        )}
        {submissionStatus === "failed" && (
          <p>Form submission failed. Please try again.</p>
        )}
      </MainContent>
    </>
  );
};

export default SelfCareModule;
