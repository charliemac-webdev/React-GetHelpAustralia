import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Survey from "../../components/Survey";

const InternetValuesSurvey = () => {
  return (
    <>
      <Heading>
        <Heading>
          <h2 className="secondary-color mb-3">Internet and values</h2>
        </Heading>
      </Heading>
      <MainContent>
        <Survey />
        <Link to="/internet-and-values-1">
          <Button id="submit-button" classes="btn">
            Submit
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default InternetValuesSurvey;
