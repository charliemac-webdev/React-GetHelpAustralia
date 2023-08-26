import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import Resources from "../data/Resources";

const UsefulResources = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Useful resources</h2>
      </Heading>
      <MainContent>
        <Resources />
      </MainContent>
    </>
  );
};
export default UsefulResources;
