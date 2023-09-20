import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const Question = (props) => {
  const slider = document.getElementById("slider");

  noUiSlider.create(slider, {
    start: [4],
    tooltips: [true],
    connect: true,
    range: {
      min: 1,
      max: 7,
    },
  });
  return (
    <>
      <h4 className="secondary-color">{props.title}</h4>
      <p>{props.content}</p>
      <div id="slider"></div>
      <div className="d.flex justify-content-between">
        <span>Strongly Disagree</span>
        <span>Strongly Agree</span>
      </div>
    </>
  );
};
export default Question;
