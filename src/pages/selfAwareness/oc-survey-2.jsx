import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Question from "../../components/Question";
import questions from "../../data/onlineCognition/questions";

const selectedQuestions = questions.filter((question) => question.id < 7);
const OnlineCognitionSurveyTwo = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Online cognition scale</h2>
      </Heading>
      <MainContent>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
          <div className="number">3</div>
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="number">7</div>
        </div>
        {selectedQuestions.map((question) => (
          <Question id={question.id} description={question.description} />
        ))}
      </MainContent>
    </>
  );
};
export default OnlineCognitionSurveyTwo;
