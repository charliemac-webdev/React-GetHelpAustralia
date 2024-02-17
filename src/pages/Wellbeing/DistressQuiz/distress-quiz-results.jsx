import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";

const DistressQuizResults = () => {
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
        <h4 className="secondary-color">Overall Score - Sum of answers</h4>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Your K-10 score is: </p>
        </div>
        <br />
        <p>
          <span className="secondary-color fw-bold">10-19:</span> This score
          indicates you are well and likely experiencing low or no psychological
          distress.
        </p>
        <p>
          <span className="secondary-color fw-bold">20-24:</span> This score
          indicates you are experiencing a mild level of psychological distress.
        </p>
        <p>
          <span className="secondary-color fw-bold">25-29:</span> This score
          indicates you are experiencing a high level of psychological distress.
        </p>
        <p>
          <span className="secondary-color fw-bold">30-50:</span> This score
          indicates you are experiencing a very high level of psychological
          distress.
        </p>
        <p>
          Now you have completed the psychological distress scale, understand
          more about recognising and dealing with feelings, by going through our
          self-help module.
        </p>
        <br />
        <Link
          className="text-decoration-none"
          to="/recognising-and-dealing-with-feelings"
        >
          <div className="d-flex justify-content-end">
            <Button ident="next-button" classes="btn" onClick={handleClick}>
              Next
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default DistressQuizResults;
