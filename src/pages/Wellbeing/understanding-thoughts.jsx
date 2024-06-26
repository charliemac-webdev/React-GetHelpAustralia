/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import UnderstandingThoughtsModuleData from "../../data/modules/Wellbeing/understandingThoughtsModuleData";

const UnderstandingThoughtsModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Understanding thoughts, feelings and behaviours
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>
            The difference between thoughts, feelings and behaviours and how
            they influence each other
          </li>
          <li>Common thinking errors</li>
          <li>The link between sexual fantasies and arousal</li>
        </ul>
        <Module modules={UnderstandingThoughtsModuleData} />
      </MainContent>
    </>
  );
};

export default UnderstandingThoughtsModule;
