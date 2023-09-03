import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFGrey from "../data/GTFGrey";

const GetTheFactsGrey = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">No &#39;grey area&#39;</h2>
      </Heading>
      <MainContent>
        <GTFGrey />
      </MainContent>
    </>
  );
};
export default GetTheFactsGrey;
