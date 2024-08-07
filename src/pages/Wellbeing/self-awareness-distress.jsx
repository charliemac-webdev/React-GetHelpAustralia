import { useEffect } from "react";
import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import Module from "@/components/Module";
import distressQuestionData from "@/data/modules/assessments/distressQuestionData";

const SelfAwarenessDistress = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
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
        <Module modules={distressQuestionData} />
        <br />
        <p>
          If you have any concerns, questions, or would just like to talk about
          what you are going through, our non-judgemental Stop It Now! Australia{" "}
          <a
            className="secondary-color"
            target="_blank"
            href="https://www.stopitnow.org.au/helpline"
          >
            helpline
          </a>{" "}
          advisors are here to support you. You can stay anonymous and don’t
          have to give your real name or any contact details. If you’re not
          ready to speak to anyone yet, you can also use the Stop It Now!
          Australia{" "}
          <a
            className=" secondary-color"
            target="_blank"
            href="https://www.stopitnow.org.au/helpline"
          >
            live chat
          </a>
          .
        </p>
      </MainContent>
    </>
  );
};
export default SelfAwarenessDistress;
