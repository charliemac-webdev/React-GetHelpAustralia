import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import takingResponsibilityModuleData from "../../data/modules/UnderstandingOnlineBehaviour/takingResponsibilityModuleData";

const TakingResponsibilityModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br />
        <br />
        <h2 className="secondary-color">
          Taking control of your online behaviour
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>
            Your level of control over your current online sexual behaviours
          </li>
          <li>
            The potential role of justifications in your problematic behaviour
          </li>
          <li>How to make immediate changes to start the change process</li>
        </ul>
        <Module modules={takingResponsibilityModuleData} />
      </MainContent>
    </>
  );
};

export default TakingResponsibilityModule;
