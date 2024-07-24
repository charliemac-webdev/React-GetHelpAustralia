import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import DistressQuestion from "../../../components/DistressQuestion";
import Survey from "../../../components/Survey";

const distressQuestionData = [
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
        <p>
          <span className="secondary-color fw-bold">10-19:</span> This score
          indicates you are well and likely experiencing low or no psychological
          distress. That’s great news. Let’s move on to the next module.
        </p>
        <p>
          <span className="secondary-color fw-bold">20-24:</span> This score
          indicates you are experiencing a mild level of psychological distress.
          That’s okay. As we navigate the ups and downs of life, periods of
          distress are to be expected sometimes, but there are ways to help
          manage these experiences. It may be useful to come up with a self-care
          plan.
        </p>
        <p>
          <span className="secondary-color fw-bold">25-29:</span> This score
          indicates you are experiencing a high level of psychological distress.
          It sounds like things are pretty tough for you right now. It’s
          important to remember that it’s okay to not be okay. As we navigate
          the ups and downs of life, periods of distress are to be expected
          sometimes, but there are ways to help manage these experiences. It may
          be useful to come up with a self-care plan. It can also be useful to
          get additional support. Our non-judgemental Stop It Now! Australia
          helpline advisors are here to support you. You can stay anonymous and
          don’t have to give your real name or any contact details. If you’re
          not ready to speak to anyone yet, you can also use the Stop It Now!
          Australia live chat.
        </p>
        <p>
          <span className="secondary-color fw-bold">30-50:</span> This score
          indicates you are experiencing a very high level of psychological
          distress. It sounds like things are really tough for you right now.
          It’s important to remember that it’s okay to not be okay. As we
          navigate the ups and downs of life, periods of distress are to be
          expected sometimes, but there is support available and what you’re
          experiencing right now is not forever. We’d encourage you to reach out
          - Our non-judgemental Stop It Now! Australia helpline advisors are
          here to support you. You can stay anonymous and don’t have to give
          your real name or any contact details. If you’re not ready to speak to
          anyone yet, you can also use the Stop It Now! Australia live chat.
          Outside of our hours of operation, there are other support options
          available. Additionally, it may be useful to come up with a self-care
          plan.
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
            <Button id="next-button" classes="btn">
              Next Module
            </Button>
          </div>
        </Link>
      </>
    ),
  },
];
export default distressQuestionData;
