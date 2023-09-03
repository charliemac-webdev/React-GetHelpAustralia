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
        <div className="row single-modules">
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Understanding why" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Triggers" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Taking responsibility" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Online world" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Fantasy" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Adult pornography" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Addiction" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Sexual communication with children online" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Problem of immediate gratification" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Images are children" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Problematic collecting" />
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SHUnderstandingBehaviour;
