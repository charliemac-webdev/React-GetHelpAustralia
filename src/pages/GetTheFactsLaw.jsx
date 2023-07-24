import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFLaw from "../data/GTFLaw";

const GetTheFactsLaw = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">
          UK law – sexual offences relating to the internet
        </h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <GTFLaw />
        </MainContent>
      </div>
    </div>
  );
};
export default GetTheFactsLaw;
