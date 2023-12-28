import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import AddictionModuleData from "../../data/modules/UnderstandingOnlineBehaviour/addictionModuleData";

const AddictionModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Addiction</h2>
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
          <li>The difference between addiction and compulsion</li>
          <li>What role addiction played in your on-line behaviour</li>
          <li>How you can start to address your addictions</li>
        </ul>
        <br></br>
        <p>
          <i>
            “This has helped me so much and really opened my eyes to the reasons
            behind the offending and the understanding of addiction. I feel more
            prepared to go forward”
          </i>
        </p>
        <br></br>
        <Module modules={AddictionModuleData} />
      </MainContent>
    </>
  );
};

export default AddictionModule;
