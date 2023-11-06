import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import SHMovingForward from "../data/SHMovingForward";

const SHForward = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Understanding the behaviour</h2>
      </Heading>
      <MainContent>
        <SHMovingForward />
        <div className="row single-modules bg-primary-subtle p-4">
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Problem solving" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Self-esteem and assertiveness" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Disclosure" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Relapse prevention" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Building a good life" />
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SHForward;
