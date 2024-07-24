import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import GPIUSQuestion from "../../../components/GPIUSQuestion";
import Survey from "../../../components/Survey";

const onlineCognitionData = [
  {
    id: 1,
    title: "Self-Awareness Quiz",
    description: (
      <>
        <Survey />
      </>
    ),
  },
  {
    id: 2,
    title: "Questions 1-5",
    description: (
      <>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
        </div>
        <GPIUSQuestion>
          I prefer online social interaction over face-to-face communication.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I have used the Internet to talk with others when I was feeling
          isolated.
        </GPIUSQuestion>
        <GPIUSQuestion>
          When I haven’t been online for some time, I become preoccupied with
          the thought of going online.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I have difficulty controlling the amount of time I spend online.
        </GPIUSQuestion>
        <GPIUSQuestion>
          My internet use has made it difficult for me to manage my life.
        </GPIUSQuestion>
      </>
    ),
  },
  {
    id: 3,
    title: "Questions 6-10",
    description: (
      <>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
          <div className="number">3</div>
        </div>
        <GPIUSQuestion>
          Online social interaction is more comfortable for me than face-to-face
          interaction.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I have used the Internet to make myself feel better when I was down.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I would feel lost if I was unable to go online.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I find it difficult to control my Internet use.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I have missed social engagements or activities because of my Internet
          use.
        </GPIUSQuestion>
      </>
    ),
  },
  {
    id: 4,
    title: "Questions 11-15",
    description: (
      <>
        <div className="d-flex mb-3">
          <div className="number active">1</div>
          <div className="number active">2</div>
          <div className="number active">3</div>
        </div>
        <GPIUSQuestion>
          I prefer communicating with people online rather than face-to-face.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I have used the Internet to make myself feel better when I've felt
          upset.
        </GPIUSQuestion>
        <GPIUSQuestion>
          I think obsessively about going online when I am offline.
        </GPIUSQuestion>
        <GPIUSQuestion>
          When offline, I have a hard time trying to resist the urge to go
          online.
        </GPIUSQuestion>
        <GPIUSQuestion>
          My Internet use has created problems for me in my life.
        </GPIUSQuestion>
      </>
    ),
  },
  {
    id: 5,
    title: "Results",
    description: (
      <>
        {/* <h4 className="secondary-color">Overall Score</h4>
        <div className="bg-primary-subtle border border-primary p-3">
          <p>Your GPIUS score is: </p>
        </div>
        <br /> */}
        <p>
          <span className="secondary-color fw-bold">1 - 50:</span> Your score
          indicates you are less likely to be engaging in internet use that is
          problematic to your thoughts and/or behaviour.
        </p>
        <p>
          <span className="secondary-color fw-bold">51 - 120:</span> This score
          indicates you are likely engaging in internet use that is having a
          negative impact on your thoughts and/or behaviour.
          <br />
        </p>
        Examples of this include:-
        <ul className="content-list">
          <li>Losing track of time online</li>
          <li>Having trouble completing other tasks</li>
          <li>Isolating from family or friends</li>
          <li>Only feeling good/happy when online</li>
          <li>Replacing real people with online friends</li>
          <li>Withdrawing from daily activities</li>
        </ul>
        <br />
        <Link className="text-decoration-none" to="/understanding-why">
          <div className="d-flex justify-content-end">
            <Button id="next-button" classes="btn">
              Next Module
            </Button>
          </div>
        </Link>
      </>
    ),
  },
];
export default onlineCognitionData;
