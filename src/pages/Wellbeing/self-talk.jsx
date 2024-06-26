/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import selfTalkModuleData from "../../data/modules/Wellbeing/selfTalkModuleData";

const SelfTalkModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Self-talk</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>Self-talk</li>
          <li>Complementary and critical self-talk</li>
          <li>How to change unpleasant self-talk in to pleasant self-talk’</li>
        </ul>
        <Module modules={selfTalkModuleData} />
      </MainContent>
    </>
  );
};

export default SelfTalkModule;
