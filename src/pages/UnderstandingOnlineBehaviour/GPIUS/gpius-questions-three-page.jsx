import { Link } from "react-router-dom";
import Button from "@/components/Button";
import GPIUSQuestion from "@/components/GPIUSQuestion";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";

const GpiusQuizThree = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Self Awareness: GPIUS
        </h2>
      </Heading>
      <MainContent>
        <h4 className="secondary-color">About this self-awareness tool</h4>
        <p>
          This tool is designed to allow you to understand your use of the
          internet to further explore how this affects your thoughts and
          behaviour. Rate each question from 1-8 whether you definitely agree or
          disagree. At the end your results will be provided with a brief
          explanation of what your score means. This is a version of the
          Generalised Problematic Internet Use Scale 2 (GPIUS 2. Caplan, 2010).
        </p>
        <h4 className="secondary-color">How do I start?</h4>
        <p>Use the "Continue" button below to proceed with the questions.</p>
        <br />
        <div className="border border-primary p-3 rounded">
          <div className="d-flex mb-3">
            <div className="number active">1</div>
            <div className="number active">2</div>
            <div className="number active">3</div>
          </div>
          <GPIUSQuestion id="gpius-q1p3">
            I prefer communicating with people online rather than face-to-face.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q2p3">
            I have used the Internet to make myself feel better when I've felt
            upset.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q3p3">
            I think obsessively about going online when I am offline.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q4p3">
            When offline, I have a hard time trying to resist the urge to go
            online.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q5p3">
            My Internet use has created problems for me in my life.
          </GPIUSQuestion>
        </div>
        <br />
        <Link className="text-decoration-none" to="/gpius-quiz-results">
          <div className="d-flex justify-content-end">
            <Button id="submit-button" classes="btn">
              Continue
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default GpiusQuizThree;
