import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import GTFIntroduction from "../data/GTFIntroduction";

const GetTheFactsIntro = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Get the facts</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <GTFIntroduction />
        </MainContent>
      </div>
    </div>
  );
};
export default GetTheFactsIntro;
