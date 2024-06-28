import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import Survey from "../../../components/Survey";

const DistressQuizSurvey = () => {
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
          <Survey />
        </div>
        <br />
        <Link className="text-decoration-none" to="/distress-quiz-1">
          <div className="d-flex justify-content-end">
            <Button ident="continue-button" classes="btn">
              Continue
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default DistressQuizSurvey;
