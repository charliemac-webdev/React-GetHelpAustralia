import Button from "../../components/Button";

const InternetValuesExploration = () => {
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
        <div className="number">8</div>
        <div className="number">9</div>
        <div className="number">10</div>
        <div className="number">11</div>
        <div className="number">12</div>
        <div className="number">13</div>
      </div>
      <hr />
      <h4 className="secondary-color">About this Exploration</h4>
      <p>
        This exploration is designed to help you identify the areas in life that
        you value and to let you see just how far you have tried to meet these
        values during the last year. It was developed by Luciano and Ortega in
        2004 and is based on the work of Wilson et al. (2002).
      </p>
      <p>Before you start, take note of the following points:</p>
      <ul className="content-list">
        <li>
          Once you answer a question you cannot go back and change it, so think
          carefully before answering each question.
        </li>
        <li>
          At the end you will be shown your results and told how to interpret
          them.
        </li>
      </ul>
      <h4 className="secondary-color">How do I start?</h4>
      <p>Use the "Begin" button below to begin the exploration.</p>
      <hr />
      <Button ident="explore-button" classes="btn">
        Begin the Exploration
      </Button>
    </>
  );
};
export default InternetValuesExploration;
