import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import WCIntro from "../data/WCIntro";

const WhyChangeIntro = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Why change?</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <WCIntro />
        </MainContent>
      </div>
    </div>
  );
};
export default WhyChangeIntro;
