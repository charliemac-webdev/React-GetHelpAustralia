import { Link } from "react-router-dom";
import Card from "../components/Card";
import Heading from "../components/Heading";
import MainContent from "../components/MainContent";
import SHIntro from "../data/SHIntro";

const SelfHelpIntro = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Self-help</h2>
      </Heading>
      <MainContent>
        <SHIntro />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Link to="/self-help-your-wellbeing-and-self-care">
              <Card
                title="Your wellbeing and self-care"
                subtitle="Help with looking after yourself and understanding and dealing with emotions."
              >
                Select Module
              </Card>
            </Link>
          </div>
          <div className="col">
            <Link to="/self-help-understanding-the-behaviour">
              <Card
                title="Understanding the behaviour"
                subtitle="Understand your online sexual behaviours, motivations, trends and patterns - and how to stop."
              >
                Select Module
              </Card>
            </Link>
          </div>
          <div className="col">
            <Link to="/self-help-moving-forward">
              <Card
                title="Moving forward"
                subtitle="How to continue moving forward, disclose your offending and build a fulfilling life."
              >
                Select Module
              </Card>
            </Link>
          </div>
        </div>
      </MainContent>
    </>
  );
};
export default SelfHelpIntro;
