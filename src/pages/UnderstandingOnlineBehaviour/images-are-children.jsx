import React, { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import ImagesAreChildrenModuleData from "../../data/modules/UnderstandingOnlineBehaviour/imagesAreChildrenModuleData";

const ImagesAreChildrenModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <h2 className="secondary-color">Images are children</h2>
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
            the false reasoning some people use to justify offending behaviour
            and avoid taking responsibilty for their actions
          </li>
          <li>that these images are of real children being abused</li>
          <li>the impacts on the children in the image</li>
        </ul>
        <br></br>
        <Module modules={ImagesAreChildrenModuleData} />
      </MainContent>
    </>
  );
};

export default ImagesAreChildrenModule;
