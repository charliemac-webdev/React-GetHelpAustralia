/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import ManagingThoughtsModuleData from "@/data/modules/Wellbeing/managingThoughtsModuleData";

const ManagingThoughtsModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">
          Managing thoughts, feelings and behaviours
        </h2>
      </Heading>
      <MainContent>
        <br></br>
        <h4 className="secondary-color">Objectives</h4>
        <p>This module aims to help you to:</p>
        <ul className="content-list">
          <li>
            Develop strategies to manage unhealthy sexual thoughts and
            behaviours
          </li>
          <li>Understand how common thinking errors can affect progress</li>
        </ul>
        <Module modules={ManagingThoughtsModuleData} />
      </MainContent>
    </>
  );
};

export default ManagingThoughtsModule;
