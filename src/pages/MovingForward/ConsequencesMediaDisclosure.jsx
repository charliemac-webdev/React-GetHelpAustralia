/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import DisclosureModuleData from "../../data/modules/MovingFoward/consequencesMediaAndDisclosureModuleData";

const ConsequencesMediaDisclosureModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Consequences, media impact and disclosure
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <p>This section will help you:</p>
        <ul className="content-list">
          <li>understand the criminal justice system and sentencing</li>
          <li>
            understand the impact that your conviction can have on your family,
            insurance coverage, and employment
          </li>
          <li>develop strategies for dealing with media coverage</li>
          <li>
            learn how to tell your partner, children, employer and friends about
            your offences
          </li>
        </ul>
        <Module modules={DisclosureModuleData} />
      </MainContent>
    </>
  );
};
export default ConsequencesMediaDisclosureModule;
