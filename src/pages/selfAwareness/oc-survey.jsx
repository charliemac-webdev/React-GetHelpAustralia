import { Link } from "react-router-dom";
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
        <Link to="/online-cognition-scale-1">
          <Button ident="submit-button" classes="btn">
            Submit
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurvey;
