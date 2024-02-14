import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Exploration from "../../data/onlineCognition/oc-exploration";

const OnlineCognitionSurveyOne = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Online cognition scale</h2>
      </Heading>
      <MainContent>
        <Exploration />
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurveyOne;
