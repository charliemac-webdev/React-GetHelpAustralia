import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Results from "../../data/onlineCognition/oc-results-data";

const OnlineCognitionSurveyResults = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Online cognition scale</h2>
      </Heading>
      <MainContent>
        <Results />
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurveyResults;
