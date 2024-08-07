import Heading from "@/components/Heading";
import MainContent from "@/components/MainContent";
import PrivacyPolicyData from "@/data/page-data/PrivacyPolicyData";

const PrivacyPolicy = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">
          Get Help! Australia - Concerned about your online behaviour?
        </h2>
      </Heading>
      <MainContent>
        <PrivacyPolicyData />
      </MainContent>
    </>
  );
};
export default PrivacyPolicy;
