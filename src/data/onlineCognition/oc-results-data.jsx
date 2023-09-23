const Results = () => {
  return (
    <>
      <p>
        This exploration divides your answers into four scales – each scale
        represents how you have used the internet to meet certain needs. The
        graph converts your answers into a bar chart.
      </p>
      <br />
      <p>
        You can see from the graph below whether your score is ‘normal’ compared
        to the ‘average’ person, or whether it is extremely low or extremely
        high. If any of your individual scores are over 50, you should make a
        note of this and refer back to it when addressing your needs when you
        complete the <b>Building a Good Life module</b>.
      </p>
      <br />
      <p>
        Now you have completed the online cognition scale, understand more about
        your use of the internet and how it may affect your life, by going
        through our self-help module <b>Online world</b>.
      </p>
      <br />
      <p>
        You can <b>print your results</b> to keep a record if you wish.
      </p>
      <br />
      <table
        id="results"
        className="internet-values-results table table-borderless"
      >
        <thead>
          <tr>
            <td style={{ width: "30%" }}></td>
            <td style={{ width: "70%" }}>
              <div className="d-flex justify-content-between">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Social Comfort </td>
            <td>
              <div className="chart-box">
                <span className="chart-column" style={{ width: "82%" }}></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Lonely/Depressed </td>
            <td>
              <div className="chart-box">
                <span className="chart-column" style={{ width: "38%" }}></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Impulsive </td>
            <td>
              <div className="chart-box">
                <span className="chart-column" style={{ width: "63%" }}></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Distraction </td>
            <td>
              <div className="chart-box">
                <span className="chart-column" style={{ width: "44%" }}></span>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <div className="d-flex justify-content-between">
                <span>Extremely Low</span>
                <span>Extremely High</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default Results;
