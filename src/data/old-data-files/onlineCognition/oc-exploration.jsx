import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Exploration = () => {
  return (
    <>
      <div className="d-flex mb-3">
        <div className="number active">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
        <div className="number">7</div>
      </div>
      <hr />
      <h4 className="secondary-color">About this Exploration</h4>
      <p>
        This exploration is designed to allow you to understand your use of the
        Internet. You should take note of the following points before you start:
      </p>
      <br />
      <ul className="content-list">
        <li>
          You will be shown 36 statements and asked to rate from 1-7 whether you
          strongly agree or disagree with them.
        </li>
        <li>You will be shown one statement at a time.</li>
        <li>
          You cannot go back to change your response to a previous statement.
        </li>
        <li>
          At the end you will be shown your results and told how to interpret
          them.
        </li>
      </ul>
      <br />
      <p>
        This is a version of the Online Cognition Scale developed by Davis,
        Flett and Besser (2002) and used here with kind permission of the
        authors.
      </p>
      <h4 className="secondary-color">How do I start?</h4>
      <p>Use the "Begin" button below to begin the exploration.</p>
      <br />
      <Link to="/online-cognition-scale-2">
        <Button id="explore-button" classes="btn">
          Begin the Exploration
        </Button>
      </Link>
    </>
  );
};
export default Exploration;
