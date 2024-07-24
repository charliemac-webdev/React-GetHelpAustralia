import React, { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import JustificationsModuleData from "@/data/modules/UnderstandingOnlineBehaviour/justificationsModuleData";

const JustificationsModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Justifications</h2>
      </Heading>
      <MainContent>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>your current sexual and non-sexual fantasies</li>
          <li>the link between your fantasies and your online behaviour</li>
        </ul>
        <Module modules={JustificationsModuleData} />
      </MainContent>
    </>
  );
};

export default JustificationsModule;
