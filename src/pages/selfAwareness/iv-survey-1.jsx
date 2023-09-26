import { Link } from "react-router-dom";
import Button from "../../components/Button";
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
        <Link to="/internet-and-values-2">
          <Button ident="explore-button" classes="btn">
            Begin the Exploration
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default InternetValuesOne;
