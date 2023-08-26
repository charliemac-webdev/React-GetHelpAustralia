import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFConsequences from "../data/GTFConsequences";

const GetTheFactsConsequences = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Consequences</h2>
      </Heading>
      <MainContent>
        <GTFConsequences />
      </MainContent>
    </>
  );
};
export default GetTheFactsConsequences;
