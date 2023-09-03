import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import WCIntro from "../data/WCIntro";

const WhyChangeIntro = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Why change?</h2>
      </Heading>
      <MainContent>
        <WCIntro />
      </MainContent>
    </>
  );
};
export default WhyChangeIntro;
