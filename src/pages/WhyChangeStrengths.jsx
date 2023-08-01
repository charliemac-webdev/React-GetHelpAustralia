import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import WCStrengths from "../data/WCStrengths";

const WhyChangeStrengths = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Identifying strengths</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <WCStrengths />
        </MainContent>
      </div>
    </div>
  );
};
export default WhyChangeStrengths;
