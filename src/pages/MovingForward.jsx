import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import movingForwardFolderTitles from "../data/module-folder-titles/movingForwardFolderTitles";
import MovingFowardData from "../data/page-data/MovingFowardData";

const MovingForward = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Moving Forward
        </h2>
      </Heading>
      <MainContent>
        <MovingFowardData />
        <div className="row single-modules p-4 bg-primary-subtle">
          {movingForwardFolderTitles.map((folder) => (
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

export default MovingForward;
