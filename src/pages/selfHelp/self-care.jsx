import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import SelfCareModuleData from "../../data/modules/self-help/yourWellBeingAndSelfCare/selfCare";

const SelfCareModule = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Heading>
        <h2 className="secondary-color">Self care</h2>
        <FcPrint />
        <FaFilePdf />
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
