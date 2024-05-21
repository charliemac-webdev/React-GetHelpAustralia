import React, { useEffect } from "react";
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
