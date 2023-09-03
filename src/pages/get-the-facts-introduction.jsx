import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFIntroduction from "../data/GTFIntroduction";

const GetTheFactsIntro = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Get the facts</h2>
      </Heading>
      <MainContent>
        <GTFIntroduction />
      </MainContent>
    </>
  );
};
export default GetTheFactsIntro;
