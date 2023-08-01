import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFConsequences from "../data/GTFConsequences";

const GetTheFactsConsequences = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Consequences</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <GTFConsequences />
        </MainContent>
      </div>
    </div>
  );
};
export default GetTheFactsConsequences;
