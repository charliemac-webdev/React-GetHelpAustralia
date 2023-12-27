import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import understandingOnlineBehaviourFolderTitles from "../data/module-folder-titles/understandingOnlineBehaviourFolderTitles";
import UnderstandingYourOnlineBehaviourData from "../data/page-data/UnderstandingYourOnlineBehaviourData";

const UnderstandingYourOnlineBehaviour = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Understanding Your Online Behaviour
        </h2>
      </Heading>
      <MainContent>
        <UnderstandingYourOnlineBehaviourData />
        <div className="row single-modules p-4 bg-primary-subtle">
          {understandingOnlineBehaviourFolderTitles.map((folder) => (
            <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
              <Link to={folder.link}>
                <MiniCard title={folder.title} />
              </Link>
            </div>
          ))}
        </div>
      </MainContent>
    </>
  );
};

export default UnderstandingYourOnlineBehaviour;
