import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import MotivationForChangeModuleData from "../../data/modules/Wellbeing/motivationForChangeModuleData";

const MotivationForChangeModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Helping you motivate yourself and manage change
        </h2>
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
        <p>This module aims to help you:</p>
        <ul className="content-list">
          <li>Understand the stages of change</li>
          <li>Start goal setting</li>
          <li>Introduce short term changes to reduce risk of offending</li>
        </ul>
        <Module modules={MotivationForChangeModuleData} />
      </MainContent>
    </>
  );
};
export default MotivationForChangeModule;
