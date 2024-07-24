import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Question from "../../components/Question";
import questions from "../../data/onlineCognition/questions";

const selectedQuestions = questions.filter(
  (question) => question.id > 30 && question.id < 37
);
const OnlineCognitionSurveySeven = () => {
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
          <div className="number active">5</div>
          <div className="number active">6</div>
          <div className="number active">7</div>
        </div>
        <hr />
        {selectedQuestions.map((question) => (
          <>
            <Question id={question.id} description={question.description} />
            <hr />
          </>
        ))}
        <Link to="/online-cognition-scale-result">
          <Button id="submit-button" classes="btn">
            Submit
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurveySeven;
