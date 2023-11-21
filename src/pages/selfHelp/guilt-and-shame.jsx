import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import GuiltAndShameModuleData from "../../data/modules/self-help/yourWellBeingAndSelfCare/guiltAndShameModuleData";

const GuiltAndShameModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Guilt and shame</h2>
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
          <li>what guilt and shame are and why we have these emotions</li>
          <li>why it is important to manage these emotions</li>
          <li>how to deal with shame.</li>
        </ul>
        <Module modules={GuiltAndShameModuleData} />
      </MainContent>
    </>
  );
};
export default GuiltAndShameModule;
