import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Question from "../../components/Question";
import questions from "../../data/onlineCognition/questions";

const selectedQuestions = questions.filter(
  (question) => question.id > 12 && question.id < 19
);
const OnlineCognitionSurveyFour = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Online cognition scale</h2>
      </Heading>
      <MainContent>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
          <div className="number active">3</div>
          <div className="number active">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="number">7</div>
        </div>
        <hr />
        {selectedQuestions.map((question) => (
          <>
            <Question id={question.id} description={question.description} />
            <hr />
          </>
        ))}
        <Link to="/online-cognition-scale-5">
          <Button ident="continue-button" classes="btn">
            Continue
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurveyFour;
