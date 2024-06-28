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
        <div className="row single-modules p-4 bg-primary-subtle rounded">
          {wellbeingFolderTitles.map((folder) => (
            <div key={folder.id} className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
              <Link to={folder.link}>
                <MiniCard title={folder.title} />
              </Link>
            </div>
          ))}
        </div>
        <br />
        <p>
          If you have any concerns, questions, or would just like to talk about
          what you are going through, our non-judgemental Stop It Now! Australia{" "}
          <a
            className="secondary-color"
            target="_blank"
            href="https://www.stopitnow.org.au/helpline"
          >
            helpline
          </a>{" "}
          advisors are here to support you. You can stay anonymous and don’t
          have to give your real name or any contact details. If you’re not
          ready to speak to anyone yet, you can also use the Stop It Now!
          Australia{" "}
          <a
            className=" secondary-color"
            target="_blank"
            href="https://www.stopitnow.org.au/helpline"
          >
            live chat
          </a>
          .
        </p>
      </MainContent>
    </>
  );
};

export default WellbeingAndSelfCare;
