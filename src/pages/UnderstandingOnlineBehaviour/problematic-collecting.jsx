import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import ProblematicCollectingModuleData from "../../data/modules/UnderstandingOnlineBehaviour/problematicCollectingModuleData";

const ProblematicCollectingModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Problematic collecting</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Why you collect</li>
          <li>How it links to your offending</li>
          <li>
            The relationship between collecting and some of the unsatisfactory
            aspects of your life
          </li>
        </ul>
        <br></br>
        <Module modules={ProblematicCollectingModuleData} />
      </MainContent>
    </>
  );
};

export default ProblematicCollectingModule;
