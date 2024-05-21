import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import DistressQuestion from "../../../components/DistressQuestion";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";

const DistressQuizTwo = () => {
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
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
        </div>
        <DistressQuestion>
          6. In the past 4 weeks, about how often did you feel so restless you
          could not sit still?
        </DistressQuestion>
        <DistressQuestion>
          7. In the past 4 weeks, about how often did you feel depressed?
        </DistressQuestion>
        <DistressQuestion>
          8. In the past 4 weeks, about how often did you feel that everything
          was an effort?
        </DistressQuestion>
        <DistressQuestion>
          9. In the past 4 weeks, about how often did you feel so sad that
          nothing could cheer you up?
        </DistressQuestion>
        <DistressQuestion>
          10. In the past 4 weeks, about how often did you feel worthless?
        </DistressQuestion>
        <br />
        <Link className="text-decoration-none" to="/distress-quiz-results">
          <div className="d-flex justify-content-end">
            <Button ident="submit-button" classes="btn">
              Submit
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default DistressQuizTwo;
