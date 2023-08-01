import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFInvestigation from "../data/GTFInvestigation";

const GetTheFactsInvestigation = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Get the facts</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <GTFInvestigation />
        </MainContent>
      </div>
    </div>
  );
};
export default GetTheFactsInvestigation;
