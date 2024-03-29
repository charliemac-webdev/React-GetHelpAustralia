import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import ProblemOfImmediateModuleData from "../../data/modules/UnderstandingOnlineBehaviour/problemOfImmediateModuleData";

const ProblemOfImmediateModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Problem of immediate gratification</h2>
        <span className="print-button me-1" role="button">
          <FcPrint className="print-icon" /> Print
        </span>
        <span className="pdf-button" role="button">
          <FaFilePdf className="print-icon" /> PDF
        </span>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Why immediate gratification is so powerful</li>
          <li>Ways to work against the power of immediate gratification</li>
        </ul>
        <br></br>
        <Module modules={ProblemOfImmediateModuleData} />
      </MainContent>
    </>
  );
};

export default ProblemOfImmediateModule;
