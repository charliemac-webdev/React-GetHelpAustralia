import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Module from "../../../components/Module";
import triggersModuleData from "../../../data/modules/UnderstandingOnlineBehaviour/triggersModuleData";

const TriggersModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Triggers</h2>
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
          <li>Your online sexual behaviour</li>
          <li>How your sexual behaviour moved into offending behaviour</li>
          <li>Your motivations for this</li>
          <li>
            Patterns and trends with your current use of the internet for sexual
            reasons
          </li>
        </ul>
        <Module modules={triggersModuleData} />
      </MainContent>
    </>
  );
};

export default TriggersModule;
