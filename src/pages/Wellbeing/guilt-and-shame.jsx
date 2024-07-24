import { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import GuiltAndShameModuleData from "@/data/modules/Wellbeing/guiltAndShameModuleData";

const GuiltAndShameModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Guilt and shame</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module will help you explore and understand:</p>
        <ul className="content-list">
          <li>what guilt and shame are and why we have these emotions</li>
          <li>why it is important to manage these emotions</li>
          <li>how to deal with shame</li>
        </ul>
        <Module modules={GuiltAndShameModuleData} />
      </MainContent>
    </>
  );
};
export default GuiltAndShameModule;
