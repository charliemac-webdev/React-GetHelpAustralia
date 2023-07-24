import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import Introduction from "../data/Introduction";

const Home = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">
          Concerned about your online behaviour
        </h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <Introduction />
        </MainContent>
      </div>
    </div>
  );
};
export default Home;
