import pictureOne from "../../../images/diagrams-selftalk-1.gif";
import pictureTwo from "../../../images/diagrams-selftalk-2.gif";
import pictureThree from "../../../images/diagrams-selftalk-3.gif";
import pictureFour from "../../../images/diagrams-selftalk-4.gif";
import pictureFive from "../../../images/diagrams-selftalk.gif";
import pictureSix from "../../../images/diagrams-yes-or-no.gif";

import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const selfTalkModuleData = [
  {
    id: 1,
    title: "Self-talk",
    description: (
      <>
        <p>
          What you say to yourself in your mind is called self-talk. It can have
          a really great impact on your self-esteem and confidence. How you talk
          to yourself in your mind affects:
        </p>
        <ul className="content-list">
          <li>your attitude</li>
          <li>your feelings</li>
          <li>your self-image</li>
          <li>your behaviour</li>
          <li>your view of the world</li>
        </ul>
        <br />
        <p>We can talk to ourselves in negative and positive ways.</p>
        <hr />
        <h5 className="secondary-color">Starting Point</h5>
        <p>
          Identify your current level of knowledge and understanding around your
          use of self-talk (1 = very little understanding; 2 = some
          understanding; 3 = secure understanding).
        </p>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                I have a clear understanding of the self-talk messages I give
                myself.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                I can see how my self-talk gives me permission to engage in
                illegal online sexual behaviour.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>I understand how to start changing my self-talk.</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          If you have scored yourself as 1 or 2, then this module will be
          particularly helpful for you.
        </p>
        <hr />
        <h5 className="secondary-color">Negative self-talk</h5>
        <p>
          There are two kinds of negative self-talk; the kind that justifies
          inappropriate or unhealthy behaviour and the type that makes you feel
          useless or small.
        </p>
        <br />
        <p>
          Examples of self-talk that justify inappropriate or unhealthy
          behaviour:
        </p>
        <img
          src={pictureOne}
          alt="self-talk 1"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <br />
        <br />
        <p>
          Examples of self-talk statements that make you feel useless or small
          include:
        </p>
        <img
          src={pictureTwo}
          alt="self-talk 2"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <br />
        <br />
        <p>Negative self-talk = </p>
        <ul className="content-list">
          <li>negative attitude</li>
          <li>negative feelings</li>
          <li>negative self-image</li>
          <li>negative behaviour</li>
          <li>a negative view of the world</li>
        </ul>
        <hr />
        <h5 className="secondary-color">Positive self-talk</h5>
        <p>
          There are two kinds of positive self-talk- the kind that encourages
          healthy behaviour and the kind that enhances your self-esteem.
        </p>
        <br />
        <p>Examples of self-talk that encourage healthy behaviour:</p>
        <img
          src={pictureThree}
          alt="Self-talk 3"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <br />
        <br />
        <p>Examples of self-talk that enhances your self-esteem:</p>
        <img
          src={pictureFour}
          alt="Self-talk 4"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <br />
        <br />
        <p>Positive self-talk =</p>
        <ul className="content-list">
          <li>positive attitude</li>
          <li>positive feelings</li>
          <li>positive self-image</li>
          <li>positive behaviour</li>
          <li>a positive view of the world</li>
        </ul>
        <br />
        <p>
          Positive self-talk will help you to make positive changes in your
          life.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Changing negative to positive self-talk",
    description: (
      <>
        <h4 className="secondary-color">
          Changing negative to positive self-talk
        </h4>
        <p>
          You need to be aware of the nature of your self-talk and be determined
          to shift any negative thinking to positive. This is not always easy as
          even though you will have a number of positive qualities you may
          struggle to recognise them and find it hard to give yourself credit
          for them.
        </p>
        <br />
        <p>
          Keep a diary for a week of any negative things you say to yourself.
        </p>
        <br />
        <p>
          After a week look back and see what sort of messages you give
          yourself.
        </p>
        <br />
        <p>
          Would you say these things to a friend? We are often harder on
          ourselves that others. It’s time to be your new best friend and be
          kind to yourself.
        </p>
        <br />
        <p>You need to start changing negative statements.</p>
        <br />
        <p>
          You should now be aware that negative thinking can lead to low mood,
          loss of motivation and that it contributes to negative unhealthy
          behaviour – including in some cases offending.
        </p>
        <br />
        <p>
          Here are some methods which can help you to tackle your negative
          thinking:
        </p>
        <p>
          <span className="secondary-color">1</span>{" "}
          <b>Challenge your thinking.</b> For each negative statement ask
          yourself these questions:
        </p>
        <ul className="content-list">
          <li>What evidence do I have for this belief?</li>
          <li>What other explanations are there?</li>
          <li>How likely is this to be the case?</li>
          <li>If it concerned someone else what would I think?</li>
        </ul>
        <br />
        <p>
          <span className="secondary-color">2</span>{" "}
          <b>
            Do something that will distract you from negative thoughts and
            feelings.
          </b>{" "}
          This might be an activity or contacting a friend.
        </p>
        <p>
          <span className="secondary-color">3</span>
          <b>Positive reframing.</b> Try to find a positive aspect to the
          situation to focus on, rather than the negative. This is something we
          often do after a bereavement for example, remembering the positive
          life someone had rather than the loss.
        </p>
        <p>
          <span className="secondary-color">4</span>
          <b>Use positive language.</b> If you constantly say “I can’t” you will
          convince yourself that it’s true. Replace negative words with positive
          ones.
        </p>
        <p>
          <span className="secondary-color">5</span>
          <b>
            Reflect on what has contributed to the negative thoughts and
            feelings.
          </b>{" "}
          Positive thinking is not about denying that anything is or can go
          wrong. If something goes wrong then take the time to consider what
          went wrong in order to avoid future mistakes and look forward more
          positively.
        </p>
        <p>
          <span className="secondary-color">6</span>
          <b>Don’t be too hard on yourself.</b> It takes time, practice and
          determination to change negative thinking and adopt a more optimistic
          approach.
        </p>
        <hr />
        <h5 className="secondary-color">Planning to be positive</h5>
        <p>
          If you know you have to deal with a potentially difficult situation
          identify and rehearse some positive self-talk statements that you can
          employ before during and after the situation.
        </p>
        <p>For example going on a first date:</p>
        <img
          src={pictureFive}
          alt="self-talk"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <p>
          This planning can be used in any situation. Think of something you are
          doing this week that you are worried or nervous about and think of
          three positive self-talk statements you can say to yourself to help
          prepare yourself positively.
        </p>
        <hr />
        <h5 className="secondary-color">
          How does this apply to illegal online sexual behaviour?
        </h5>
        <p>
          This model is used to explain the internal argument or self-talk
          someone uses to give themself permission to engage in illegal online
          sexual behaviour. By increasing your awareness of this process and the
          negative effects of offending for yourself and others, you increase
          your ability and motivation to avoid offending.
        </p>
        <img
          src={pictureSix}
          alt="self-talk yes or no"
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <br />
        <p>
          <b>Please consider the following questions:</b>
        </p>
        <ul className="content-list">
          <li>How has your self-talk allowed you to offend?</li>
          <li>What will your future self-talk be?</li>
        </ul>
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Reflection",
    description: (
      <>
        <p>
          As with the Introduction to this module, identify your level of
          knowledge and understanding around the following aspects of how you
          use illegal images (1 = very little understanding; 2 = some
          understanding; 3 = secure understanding).
        </p>
        <table className="table table-bordered">
          <tr>
            <td>
              I have a clear understanding of the self-talk messages I give
              myself.
            </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              I can see how my self-talk gives me permission to engage in
              illegal online sexual behaviour.
            </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>I understand how to start changing my self-talk.</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
        <br />
        <p>Now, consider the following questions:</p>
        <ul className="content-list">
          <li>
            Have any of your responses changed from 1 to 2 or 2 to 3 from the
            start of this module?
          </li>
          <li>
            Which part of the module has had the greatest impact on your
            understanding? Why?
          </li>
          <li>
            Has anything from this module prompted or encouraged you to take
            action around your thinking? If so, what? Has this module raised any
            further questions for you or made you want to explore any ideas
            further? What steps do you plan to take to seek out this
            information?
          </li>
        </ul>
        <br />
        <p>
          If you want to discuss anything covered in this module, have struggled
          with working through the self-help material or just want the
          opportunity to work through the self-help site with a practitioner to
          guide you then please call the Stop It Now! Helpline for confidential
          support from our trained staff.
        </p>
        <br />
        <Link to="/self-help-understanding-why">
          <div className="d-flex justify-content-end">
            <Button ident="next-button" classes="btn">
              Next Module
            </Button>
          </div>
        </Link>
      </>
    ),
  },
];
export default selfTalkModuleData;
