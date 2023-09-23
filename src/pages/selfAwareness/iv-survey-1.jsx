import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import InternetValuesExploration from "../../data/internetValues/iv-exploration";

const InternetValuesOne = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Internet and values</h2>
      </Heading>
      <MainContent>
        <InternetValuesExploration />
        <Button ident="explore-button" classes="btn">
          Begin the Exploration
        </Button>
      </MainContent>
    </>
  );
};
export default InternetValuesOne;
