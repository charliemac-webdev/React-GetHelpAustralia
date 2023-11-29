import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Module from "../../../components/Module";
import selfTalkModuleData from "../../../data/modules/self-help/yourWellBeingAndSelfCare/selfTalkModuleData";

const SelfTalkModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Self-talk</h2>
        <span className="print-button me-1" role="button">
          <FcPrint className="print-icon" /> Print
        </span>
        <span className="pdf-button" role="button">
          <FaFilePdf className="print-icon" /> PDF
        </span>
      </Heading>
      <MainContent>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Self-talk</li>
          <li>Positive and negative self-talk</li>
          <li>How to change negative Self-talk in to positive Self-talk’</li>
        </ul>
        <Module modules={selfTalkModuleData} />
      </MainContent>
    </>
  );
};

export default SelfTalkModule;
