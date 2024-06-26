import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import RecognisingAndDealingWithFeelingsModuleData from "../../data/modules/Wellbeing/recognisingAndDealingWithFeelingsModuleData";

const RecognisingAndDealingWithFeelingsModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Recognising and dealing with feelings
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>
          This module aims to help you explore and gain an understanding of the
          following:
        </p>
        <ul className="content-list">
          <li>How your emotions influence your thinking and behaviour</li>
          <li>How you cope with difficult emotions e.g. anger</li>
          <li>How to become more assertive</li>
        </ul>
        <Module modules={RecognisingAndDealingWithFeelingsModuleData} />
      </MainContent>
    </>
  );
};

export default RecognisingAndDealingWithFeelingsModule;
