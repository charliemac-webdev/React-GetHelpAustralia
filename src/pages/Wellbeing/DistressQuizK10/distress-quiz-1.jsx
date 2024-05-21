import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import DistressQuestion from "../../../components/DistressQuestion";
import Heading from "../../../components/Heading";
import MainContent from "../../../components/MainContent";
import ScoreContext from "./distressContext";

const DistressQuizOne = () => {
  const [sliderValues, setSliderValues] = useState(Array(5).fill(0));
  const [totalScore, setTotalScore] = useState(0);

  const handleSliderChange = (index, newValue) => {
    setSliderValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };

  useEffect(() => {
    // Calculate total score whenever sliderValues change
    const newTotalScore = sliderValues.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    setTotalScore(newTotalScore);
  }, [sliderValues]);
  return (
    <ScoreContext.Provider value={totalScore}>
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
            to 5 (all of the time). Your results will be scored at the end with
            a brief indication of your level of psychological distress. This is
            a version of the Kessler Psychological Distress Scale (K-10; Kessler
            et al., 2002).
          </p>
          <h4 className="secondary-color">How do I start?</h4>
          <p>Use the "Continue" button below to proceed with the questions.</p>
          <br />
          <div className="d-flex mb-3">
            <div className="number active">1</div>
            <div className="number">2</div>
          </div>
          <DistressQuestion
            index={0}
            onChange={(newValue) => handleSliderChange(0, newValue)}
          >
            1. In the past 4 weeks, about how often did you feel tired out for
            no good reason?
          </DistressQuestion>
          <DistressQuestion
            index={1}
            onChange={(newValue) => handleSliderChange(0, newValue)}
          >
            2. In the past 4 weeks, about how often did you feel nervous?
          </DistressQuestion>
          <DistressQuestion
            index={2}
            onChange={(newValue) => handleSliderChange(0, newValue)}
          >
            3. In the past 4 weeks, about how often did you feel so nervous that
            nothing could calm you down?
          </DistressQuestion>
          <DistressQuestion
            index={3}
            onChange={(newValue) => handleSliderChange(0, newValue)}
          >
            4. In the past 4 weeks, about how often did you feel hopeless?
          </DistressQuestion>
          <DistressQuestion
            index={4}
            onChange={(newValue) => handleSliderChange(0, newValue)}
          >
            5. In the past 4 weeks, about how often did you feel restless or
            fidgety?
          </DistressQuestion>
          <br />
          <Link className="text-decoration-none" to="/distress-quiz-2">
            <div className="d-flex justify-content-end">
              <Button ident="continue-button" classes="btn">
                Continue
              </Button>
            </div>
          </Link>
        </MainContent>
      </>
    </ScoreContext.Provider>
  );
};
export default DistressQuizOne;
