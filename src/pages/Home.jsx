import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import IntroductionData from "../data/page-data/IntroductionData";

const Home = () => {
  return (
    <>
      <Heading>
        <br></br>
        <h2 className="secondary-color mb-3">
          Concerned about your online behaviour?
        </h2>
      </Heading>
      <MainContent>
        <IntroductionData />
      </MainContent>
    </>
  );
};
export default Home;
