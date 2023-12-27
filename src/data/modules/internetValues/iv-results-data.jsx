const IVResults = () => {
  return (
    <>
      <p>
        This exploration is designed to help you identify the areas in life that
        you value and to let you see just how far you have tried to meet these
        values through your use of the internet during the last year. It was
        developed by Luciano and Ortega in 2004 and is based on the work of
        Wilson et al. (2002).
      </p>
      <p>
        Now you have completed the Internet and Values scale, you may like to
        review the Good Lives Model within our{" "}
        <b>Building a good life module</b>.
      </p>
      <p>
        You can <b>print your results</b> to keep a record if you wish.
      </p>
      <div id="results" className="internet-values-results">
        <ul className="chart">
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Marriage or Intimate Relationships</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Sexual Relationships</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Family Relationships</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Friends/Social Relationships</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Employment</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Physical Well-being</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Education/Training</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Recreation</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Spirituality</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Citizenship</small>
          </li>
          <li className="chart-group">
            <span className="chart-column" style={{ height: "50%" }}></span>

            <span className="chart-column" style={{ height: "50%" }}></span>

            <small>Other</small>
          </li>
        </ul>

        <div className="keys-legend">
          <ul>
            <li>
              <span className="blue"></span>
              <p>Amount of effort made to be the person you would like to be</p>
            </li>
            <li>
              <span className="red"></span>
              <p>Influence of illegal images on your life</p>
            </li>
            <li>
              <span className="gold"></span>
              <p>
                The highlighted areas are those that you ticked as being
                important at the start of the exercise
              </p>
            </li>
          </ul>
        </div>

        <div className="average-results mt-5">
          <h4 className="secondary-color">Average Results</h4>
          <p>
            This graph shows the average level of influence that accessing
            illegal images on the Internet has had on your life and the average
            level of effort you have made to be the person you would like to be.
          </p>

          <ul className="chart">
            <li className="chart-group">
              <span className="chart-column" style={{ height: "55%" }}></span>
              <span className="chart-column" style={{ height: "55%" }}></span>
              <small>Average Results</small>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default IVResults;
