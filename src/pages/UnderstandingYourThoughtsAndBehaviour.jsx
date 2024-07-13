import { Link } from "react-router-dom";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import MiniCard from "@/components/MiniCard";
import understandingThoughtsFolderTitles from "@/data/module-folder-titles/understandingThoughtsFolderTitles";
import UnderstandingYourThoughtsAndBehaviourData from "@/data/page-data/UnderstandingYourThoughtsAndBehaviourData";

const UnderstandingYourThoughtsAndBehaviour = () => {
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Understanding Your Thoughts and Behaviour
        </h2>
      </Heading>
      <MainContent>
        <UnderstandingYourThoughtsAndBehaviourData />
        <div className="row single-modules p-4 bg-primary-subtle rounded">
          {understandingThoughtsFolderTitles.map((folder) => (
            <div key={folder.id} className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
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

export default UnderstandingYourThoughtsAndBehaviour;
