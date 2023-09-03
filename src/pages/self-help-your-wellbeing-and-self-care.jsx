import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import MiniCard from "../components/MiniCard";
import SHWellBeing from "../data/SHWellBeing";

const SelfHelpWellBeing = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Self-awareness</h2>
      </Heading>
      <MainContent>
        <SHWellBeing />
        <div className="row single-modules">
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Self-care" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Guilt and shame" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Recognising and dealing with feelings" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Opening up to others" />
          </div>
          <div className="col-6 col-lg-4 col-xl-3 mt-3 mb-4">
            <MiniCard title="Self-talk" />
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SelfHelpWellBeing;
