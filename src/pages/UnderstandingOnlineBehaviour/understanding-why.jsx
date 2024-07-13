import React, { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import understandingWhyModuleData from "@/data/modules/UnderstandingOnlineBehaviour/understandingWhyModuleData";

const UnderstandingWhyModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
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
        <Module modules={understandingWhyModuleData} />
      </MainContent>
    </>
  );
};

export default UnderstandingWhyModule;
