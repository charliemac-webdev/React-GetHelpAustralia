import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import Resources from "../data/Resources";

const UsefulResources = () => {
  return (
    <div className="wrapper">
      <Heading>
        <h2 className="secondary-color mb-3">Useful resources</h2>
      </Heading>
      <div className="mainBlock">
        <MainContent>
          <Resources />
        </MainContent>
      </div>
    </div>
  );
};
export default UsefulResources;
