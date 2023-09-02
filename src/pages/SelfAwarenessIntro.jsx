import Card from "../components/Card";
import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import SAIntro from "../data/SAIntro";

const SelfAwarenessIntro = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Self-awareness</h2>
      </Heading>
      <MainContent>
        <SAIntro />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card title="Online cognition scale">Start exploration</Card>
          </div>
          <div className="col">
            <Card title="Internet and values">Start exploration</Card>
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SelfAwarenessIntro;
