import React, { useState } from "react";

const SelfCare = () => {
  const [understandingSelfCare, setUnderstandingSelfCare] = useState("");
  const [selfCarePlan, setSelfCarePlan] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "self-care-reflection-form");
    formData.append("understanding_self_care", understandingSelfCare);
    formData.append("self_care_plan", selfCarePlan);

    // Log form data before submission
    console.log("Submitting form data:", Object.fromEntries(formData));

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const result = await response.text();
        console.log("Form submission successful:", result);
        setStatus("Form submitted successfully!");
      } else {
        const errorText = await response.text();
        console.error("Failed to submit form:", response.status, errorText);
        setStatus("Failed to submit form.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      setStatus("An error occurred during form submission.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Understanding Self Care:
        <input
          type="text"
          value={understandingSelfCare}
          onChange={(e) => setUnderstandingSelfCare(e.target.value)}
        />
      </label>
      <label>
        Self Care Plan:
        <input
          type="text"
          value={selfCarePlan}
          onChange={(e) => setSelfCarePlan(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default SelfCare;
