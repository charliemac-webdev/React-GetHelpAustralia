import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";

const GpiusQuizResults = () => {
  const scores = useSelector((state) => state.gpiusScore.scores);
  console.log("Scores from Redux store:", scores);
  const totalScore = scores.reduce((sum, item) => {
    console.log(`Adding score for ${item.id}: ${item.score}`);
    return sum + item.score;
  }, 0);
  console.log("Calculated total score:", totalScore);
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Self Awareness: K-10
        </h2>
      </Heading>
      <MainContent>
        <h4 className="secondary-color">About this self-awareness tool</h4>
        <p>
          This tool is a brief screening scale that measures non-specific
          psychological distress. Rate each question from 1 (none of the time)
          to 5 (all of the time). Your results will be scored at the end with a
          brief indication of your level of psychological distress. This is a
          version of the Kessler Psychological Distress Scale (K-10; Kessler et
          al., 2002).
        </p>
        <h4 className="secondary-color">How do I start?</h4>
        <p>Use the "Continue" button below to proceed with the questions.</p>
        <br />
        <div className="border border-primary p-3 rounded">
          <h4 className="secondary-color">Overall Score</h4>
          <div className="bg-primary-subtle border border-primary p-3">
            <p>Your K-10 score is: {totalScore}</p>
          </div>
          <br />
          <p>
            <span className="secondary-color fw-bold">1 - 50:</span> Your score
            indicates you are less likely to be engaging in internet use that is
            problematic to your thoughts and/or behaviour.
          </p>
          <p>
            <span className="secondary-color fw-bold">51 - 120:</span> This
            score indicates you are likely engaging in internet use that is
            having a negative impact on your thoughts and/or behaviour.
            <br />
          </p>
          Examples of this include:-
          <ul className="content-list">
            <li>Losing track of time online</li>
            <li>Having trouble completing other tasks</li>
            <li>Isolating from family or friends</li>
            <li>Only feeling good/happy when online</li>
            <li>Replacing real people with online friends</li>
            <li>Withdrawing from daily activities</li>
          </ul>
        </div>
        <br />
        <Link className="text-decoration-none" to="/understanding-why">
          <div className="d-flex justify-content-end">
            <Button ident="next-button" classes="btn">
              Next
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default GpiusQuizResults;
