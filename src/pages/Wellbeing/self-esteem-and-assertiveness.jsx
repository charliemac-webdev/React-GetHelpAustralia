import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import selfEsteemAndAssertivenessModuleData from "../../data/modules/Wellbeing/selfEsteemAndAssertivenessModuleData";

const SelfEsteemAndAssertivenessModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Self esteem and assertiveness</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>What self-esteem is and how to increase it</li>
          <li>Importance of being healthy and positive</li>
          <li>How to become more assertive</li>
        </ul>
        <Module modules={selfEsteemAndAssertivenessModuleData} />
      </MainContent>
    </>
  );
};

export default SelfEsteemAndAssertivenessModule;
