import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import IntroductionData from "../data/page-data/IntroductionData";

const Home = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Concerned about your online behaviour?
        </h2>
      </Heading>
      <MainContent>
        <IntroductionData />
      </MainContent>
    </>
  );
};
export default Home;
