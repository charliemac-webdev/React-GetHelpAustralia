import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import SHUnderstanding from "../data/SHUnderstanding";

const SHUnderstandingBehaviour = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Understanding the behaviour</h2>
      </Heading>
      <MainContent>
        <SHUnderstanding />
        <div className="row single-modules bg-primary-subtle p-4">
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-understanding-why">
              <MiniCard title="Understanding why" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-triggers">
              <MiniCard title="Triggers" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-taking-responsibility">
              <MiniCard title="Taking responsibility" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-online-world">
              <MiniCard title="Online world" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-fantasy">
              <MiniCard title="Fantasy" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-adult-pornography">
              <MiniCard title="Adult pornography" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-addiction">
              <MiniCard title="Addiction" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-sexual-communication-with-children-online">
              <MiniCard title="Sexual communication with children online" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-problem-of-immediate-gratification">
              <MiniCard title="Problem of immediate gratification" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-images-are-children">
              <MiniCard title="Images are children" />
            </Link>
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <Link to="/self-help-problematic-collecting">
              <MiniCard title="Problematic collecting" />
            </Link>
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SHUnderstandingBehaviour;
