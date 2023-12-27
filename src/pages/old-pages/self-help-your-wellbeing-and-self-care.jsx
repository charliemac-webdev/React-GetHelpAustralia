import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import MiniCard from "../../components/MiniCard";
import SHWellBeing from "../../data/old-data-files/SHWellBeing";

const SelfHelpWellBeing = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Self-awareness</h2>
      </Heading>
      <MainContent>
        <SHWellBeing />
        <div className="row single-modules bg-primary-subtle p-4">
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-self-care">
              <MiniCard title="Self-care" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-guilt-and-shame">
              <MiniCard title="Guilt and shame" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-recognising-and-dealing-with-feelings">
              <MiniCard title="Recognising and dealing with feelings" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-opening-up-to-others">
              <MiniCard title="Opening up to others" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-self-talk">
              <MiniCard title="Self-talk" />
            </Link>
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SelfHelpWellBeing;
