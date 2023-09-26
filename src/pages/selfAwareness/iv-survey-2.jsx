import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MainContent from "../../components/MainContent";

// Need script to make sure something selected

const InternetValuesTwo = () => {
  return (
    <>
      <Heading>
        <h2 className="secondary-color mb-3">Internet and values</h2>
      </Heading>
      <MainContent>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
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
        <h4 className="secondary-color">What do you value in life? *</h4>
        <p>
          Given the following list of life domains, mark those areas which you
          consider important in your life:
        </p>
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="marriage-check"
              />
              <label htmlFor="marriage-check" className="form-check-label">
                Marriage or Intimate Relationships
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="family-check"
              />
              <label htmlFor="family-check" className="form-check-label">
                Family Relationships
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="employment-check"
              />
              <label htmlFor="employment-check" className="form-check-label">
                Employment
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="education-check"
              />
              <label htmlFor="education-check" className="form-check-label">
                Education/Training
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="spirituality-check"
              />
              <label htmlFor="spirituality-check" className="form-check-label">
                Spirituality
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="sexual-check"
              />
              <label htmlFor="sexual-check" className="form-check-label">
                Sexual Relationships
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="friends-check"
              />
              <label htmlFor="friends-check" className="form-check-label">
                Friends/Social Relationships
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="physical-check"
              />
              <label htmlFor="physical-check" className="form-check-label">
                Physical Well-being
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="recreation-check"
              />
              <label htmlFor="recreation-check" className="form-check-label">
                Recreation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="citizenship-check"
              />
              <label htmlFor="citizenship-check" className="form-check-label">
                Citizenship
              </label>
            </div>
          </div>
        </div>
        <hr />
        <Link to="/internet-and-values-3">
          <Button ident="continue-button" classes="btn">
            Continue
          </Button>
        </Link>
      </MainContent>
    </>
  );
};
export default InternetValuesTwo;
