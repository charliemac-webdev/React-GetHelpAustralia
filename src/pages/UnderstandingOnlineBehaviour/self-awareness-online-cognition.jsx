import { useEffect } from "react";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import onlineCognitionData from "../../data/modules/assessments/onlineCognitionData";

const SelfAwarenessOnlineCognition = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
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
        <Module modules={onlineCognitionData} />
      </MainContent>
    </>
  );
};
export default SelfAwarenessOnlineCognition;
