/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import BuildingAGoodLifeModuleData from "@/data/modules/MovingFoward/buildingAGoodLifeModuleData";

const BuildingAGoodLifeModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Building a good life</h2>
      </Heading>
      <MainContent>
        <br></br>
        <p>
          People from all over the world tend to want similar things in life in
          order to feel happy and satisfied. When people are happy with their
          lives, they’re less likely to get into trouble.
        </p>
        <Module modules={BuildingAGoodLifeModuleData} />
      </MainContent>
    </>
  );
};
export default BuildingAGoodLifeModule;
