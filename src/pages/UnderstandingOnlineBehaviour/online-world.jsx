import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import onlineWorldModuleData from "../../data/modules/UnderstandingOnlineBehaviour/onlineWorldModuleData";

const OnlineWorldModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Online World</h2>
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
          <li>The relationship between your online and offline social lives</li>
          <li>How the internet can be used as a social outlet in your life</li>
          <li>Problematic online relationships</li>
        </ul>
        <Module modules={onlineWorldModuleData} />
      </MainContent>
    </>
  );
};

export default OnlineWorldModule;
