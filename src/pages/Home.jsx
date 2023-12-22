import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import Introduction from "../data/Introduction";

const Home = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Concerned about your online behaviour?
        </h2>
      </Heading>
      <MainContent>
        <Introduction />
      </MainContent>
    </>
  );
};
export default Home;
