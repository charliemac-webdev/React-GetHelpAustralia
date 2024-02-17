import DistressQuestion from "../../../components/DistressQuestion";
import Survey from "../../../components/Survey";

const onlineCognitionData = [
  {
    id: 1,
    title: "Self-Awareness Quiz",
    description: (
      <>
        <Survey />
      </>
    ),
  },
  {
    id: 2,
    title: "Questions 1-5",
    description: (
      <>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number">2</div>
        </div>
        <DistressQuestion>
          1. In the past 4 weeks, about how often did you feel tired out for no
          good reason?
        </DistressQuestion>
        <DistressQuestion>
          2. In the past 4 weeks, about how often did you feel nervous?
        </DistressQuestion>
        <DistressQuestion>
          3. In the past 4 weeks, about how often did you feel so nervous that
          nothing could calm you down?
        </DistressQuestion>
        <DistressQuestion>
          4. In the past 4 weeks, about how often did you feel hopeless?
        </DistressQuestion>
        <DistressQuestion>
          5. In the past 4 weeks, about how often did you feel restless or
          fidgety?
        </DistressQuestion>
      </>
    ),
  },
  {
    id: 3,
    title: "Questions 6-10",
    description: (
      <>
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
      </>
    ),
  },
  {
    id: 4,
    title: "Results",
    description: (
      <>
        {/* <h4 className="secondary-color">Overall Score - Sum of answers</h4>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Your score is: {values}</p>
        </div>
        <br /> */}
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
      </>
    ),
  },
];
export default onlineCognitionData;
