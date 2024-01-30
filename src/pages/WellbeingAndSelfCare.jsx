import { Link } from "react-router-dom";

import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import wellbeingFolderTitles from "../data/module-folder-titles/wellbeingFolderTitles";
import WellbeingAndSelfCareData from "../data/page-data/WellbeingAndSelfCareData";

const WellbeingAndSelfCare = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Wellbeing and Self-care
        </h2>
      </Heading>
      <MainContent>
        <WellbeingAndSelfCareData />
        <div className="row single-modules p-4 bg-primary-subtle">
          {wellbeingFolderTitles.map((folder) => (
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

export default WellbeingAndSelfCare;
