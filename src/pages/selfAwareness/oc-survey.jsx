import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Survey from "../../components/Survey";

const OnlineCognitionSurvey = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Online cognition scale</h2>
      </Heading>
      <MainContent>
        <Survey />
        <Button ident="submit-button" classes="btn">
          Submit
        </Button>
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurvey;
