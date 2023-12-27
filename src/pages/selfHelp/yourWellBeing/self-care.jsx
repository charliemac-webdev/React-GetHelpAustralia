import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Module from "../../../components/Module";
import SelfCareModuleData from "../../../data/modules/self-help/yourWellBeingAndSelfCare/selfCareModuleData";

const SelfCareModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);

  return (
    <>
      <Heading>
        <h2 className="secondary-color">Self care</h2>
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
          <li>what self-care is and why it's important</li>
          <li>basic self-care strategies</li>
          <li>how to create a self-care plan.</li>
        </ul>
        <Module modules={SelfCareModuleData} />
      </MainContent>
    </>
  );
};
export default SelfCareModule;