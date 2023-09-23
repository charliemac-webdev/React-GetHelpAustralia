import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Results from "../../data/onlineCognition/oc-results-data";

const InternetValuesResult = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Internet and values</h2>
      </Heading>
      <MainContent>
        <Results />
      </MainContent>
    </>
  );
};
export default InternetValuesResult;
