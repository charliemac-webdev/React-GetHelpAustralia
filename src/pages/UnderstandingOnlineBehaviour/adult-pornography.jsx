import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import AdultPornographyModuleData from "../../data/modules/UnderstandingOnlineBehaviour/adultPornographyModuleData";

const AdultPornographyModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Adult Pornography</h2>
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
          <li>
            your use of legal pornography, which we will call adult pornography
          </li>
          <li>why you look at adult pornography</li>
          <li>whether your use of adult pornography is a problem</li>
          <li>techniques to reduce or stop using adult pornography</li>
        </ul>
        <Module modules={AdultPornographyModuleData} />
      </MainContent>
    </>
  );
};

export default AdultPornographyModule;
