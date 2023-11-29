import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Module from "../../../components/Module";
import ProblemOfImmediateModuleData from "../../../data/modules/self-help/understandingTheBehaviour/problemOfImmediateModuleData";

const ProblemOfImmediateModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">
          Problem with immediate gratification
        </h2>
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
          <li></li>
        </ul>
        <Module modules={ProblemOfImmediateModuleData} />
      </MainContent>
    </>
  );
};

export default ProblemOfImmediateModule;
