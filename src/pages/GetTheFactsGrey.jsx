import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFGrey from "../data/GTFGrey";

const GetTheFactsGrey = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">No &#39;grey area&#39;</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <GTFGrey />
        </MainContent>
      </div>
    </div>
  );
};
export default GetTheFactsGrey;
