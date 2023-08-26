import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFLaw from "../data/GTFLaw";

const GetTheFactsLaw = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          UK law – sexual offences relating to the internet
        </h2>
      </Heading>
      <MainContent>
        <GTFLaw />
      </MainContent>
    </>
  );
};
export default GetTheFactsLaw;
