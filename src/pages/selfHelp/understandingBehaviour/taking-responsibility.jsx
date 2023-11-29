import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Module from "../../../components/Module";
import takingResponsibilityModuleData from "../../../data/modules/self-help/understandingTheBehaviour/takingResponsibilityModuleData";

const TakingResponsibilityModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Taking Responsibility</h2>
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
          <li>
            Your level of control over your current online sexual behaviours
          </li>
          <li>
            How you have used denial to allow your problematic behaviour to
            continue
          </li>
          <li>How to make immediate changes to start the change process</li>
        </ul>
        <Module modules={takingResponsibilityModuleData} />
      </MainContent>
    </>
  );
};

export default TakingResponsibilityModule;
