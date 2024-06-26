/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import ProblemSolvingModuleData from "../../data/modules/MovingFoward/problemSolvingModuleData";

const ProblemSolvingModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Problem solving</h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>
            The benefits of problem solving and how it can be applied to a range
            of different types of problems
          </li>
          <li>Ways to avoid acting on impulse</li>
        </ul>
        <Module modules={ProblemSolvingModuleData} />
      </MainContent>
    </>
  );
};
export default ProblemSolvingModule;
