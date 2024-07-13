import React, { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import SexualCommunicationWithChildrenModuleData from "@/data/modules/UnderstandingOnlineBehaviour/sexualCommunicationWithChildrenModuleData";

const SexualCommunicationWithChildrenModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">
          Sexual communication with children online
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Your motivation for engaging sexually with children online</li>
          <li>How your behaviour progressed into sexual communication</li>
          <li>How you might have justified your behaviour</li>
        </ul>
        <br></br>
        <Module modules={SexualCommunicationWithChildrenModuleData} />
      </MainContent>
    </>
  );
};

export default SexualCommunicationWithChildrenModule;
