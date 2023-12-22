import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import PrivacyPolicy from "../data/PrivacyPolicy";

const Privacy = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Privacy policy</h2>
      </Heading>
      <MainContent>
        <PrivacyPolicy />
      </MainContent>
    </>
  );
};
export default Privacy;
