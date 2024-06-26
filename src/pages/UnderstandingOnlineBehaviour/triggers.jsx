import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import triggersModuleData from "../../data/modules/UnderstandingOnlineBehaviour/triggersModuleData";

const TriggersModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Triggers</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>the different types of triggers</li>
          <li>your own triggers</li>
          <li>different ways to manage your own triggers</li>
        </ul>
        <Module modules={triggersModuleData} />
      </MainContent>
    </>
  );
};

export default TriggersModule;
