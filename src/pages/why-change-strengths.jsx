import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import WCStrengths from "../data/WCStrengths";

const WhyChangeStrengths = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Identifying strengths</h2>
      </Heading>
      <MainContent>
        <WCStrengths />
      </MainContent>
    </>
  );
};
export default WhyChangeStrengths;
