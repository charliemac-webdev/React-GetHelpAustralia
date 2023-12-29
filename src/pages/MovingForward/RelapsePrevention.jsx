import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FcPrint } from "react-icons/fc";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";
import Module from "../../components/Module";
import RelapsePreventionModuleData from "../../data/modules/MovingFoward/relapsePreventionModuleData";

const RelapsePreventionModule = ({ showMenu }) => {
  useEffect(() => {
    showMenu(false);
  }, []);
  return (
    <>
      <Heading>
        <br></br>
        <br></br>
        <h2 className="secondary-color">Relapse prevention</h2>
        <span className="print-button me-1" role="button">
          <FcPrint className="print-icon" /> Print
        </span>
        <span className="pdf-button" role="button">
          <FaFilePdf className="print-icon" /> PDF
        </span>
      </Heading>
      <MainContent>
        <br></br>
        <p>
          Old patterns of behaviour can be returned to, especially at times of
          stress. This section is all about relapse prevention – how to prevent
          a relapse, and if you do slip, how to pick yourself up and get
          building again.
        </p>
        <Module modules={RelapsePreventionModuleData} />
      </MainContent>
    </>
  );
};
export default RelapsePreventionModule;
