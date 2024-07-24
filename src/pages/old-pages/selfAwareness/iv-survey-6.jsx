import { Slider } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";

function valuetext(value) {
  return value;
}
const InternetValuesSix = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Internet and values</h2>
      </Heading>
      <MainContent>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
          <div className="number active">3</div>
          <div className="number active">4</div>
          <div className="number active">5</div>
          <div className="number active">6</div>
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="number">10</div>
          <div className="number">11</div>
          <div className="number">12</div>
          <div className="number">13</div>
        </div>
        <hr />
        <h5 className="secondary-color">
          Question 4 of 11 - Friends/Social Relationships
        </h5>
        <p>
          What would you like your friends to say about you, long-term, given
          the type of friend you would like to be?
        </p>
        <p className="mb-5">
          <b>
            How much effort have you made in an attempt to be this person, in
            this area, over the last year?
          </b>
        </p>
        <Slider
          aria-label="Always visible"
          defaultValue={4}
          step={1}
          marks
          min={1}
          max={7}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span>No Effort</span>
          <span>Extreme Effort</span>
        </div>
        <p className="mb-5">
          <b>
            How much has accessing child pornography on the Internet influenced
            this area of your life?
          </b>
        </p>
        <Slider
          aria-label="Always visible"
          defaultValue={4}
          step={1}
          marks
          min={1}
          max={7}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
        <div className="d-flex justify-content-between">
          <span>No Effort</span>
          <span>Extreme Effort</span>
        </div>
        <hr />
        <Link to="/internet-and-values-7">
          <Button id="continue-button" classes="btn">
            Continue
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default InternetValuesSix;
