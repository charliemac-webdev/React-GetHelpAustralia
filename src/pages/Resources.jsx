import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import ResourcesData from "../data/page-data/ResourcesData";

const Resources = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Useful resources
        </h2>
      </Heading>
      <MainContent>
        <ResourcesData />
      </MainContent>
    </>
  );
};
export default Resources;
