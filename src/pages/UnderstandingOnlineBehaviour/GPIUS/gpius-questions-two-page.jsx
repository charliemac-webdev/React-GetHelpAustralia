import { Link } from "react-router-dom";
import Button from "@/components/Button";
import GPIUSQuestion from "@/components/GPIUSQuestion";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";

const GpiusQuizTwo = () => {
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
            <div className="number">3</div>
          </div>
          <GPIUSQuestion id="gpius-q1p2">
            Online social interaction is more comfortable for me than
            face-to-face interaction.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q2p2">
            I have used the Internet to make myself feel better when I was down.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q3p2">
            I would feel lost if I was unable to go online.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q4p2">
            I find it difficult to control my Internet use.
          </GPIUSQuestion>
          <GPIUSQuestion id="gpius-q5p2">
            I have missed social engagements or activities because of my
            Internet use.
          </GPIUSQuestion>
        </div>
        <br />
        <Link className="text-decoration-none" to="/gpius-quiz-3">
          <div className="d-flex justify-content-end">
            <Button id="continue-button" classes="btn">
              Continue
            </Button>
          </div>
        </Link>
      </MainContent>
    </>
  );
};
export default GpiusQuizTwo;
