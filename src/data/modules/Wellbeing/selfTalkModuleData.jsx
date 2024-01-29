import pictureTwo from "../../../images/diagrams-selftalk-2.gif";
import pictureThree from "../../../images/diagrams-selftalk-3.gif";
import pictureFour from "../../../images/diagrams-selftalk-4.gif";
import pictureFive from "../../../images/diagrams-selftalk.gif";
import pictureSix from "../../../images/diagrams-yes-or-no.gif";

import { Slider } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

function valuetext(value) {
  return value;
}

const selfTalkModuleData = [
  {
    id: 1,
    title: "Self-talk",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Self-talk</h4>
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
        <p>We can talk to ourselves in negative and positive ways.</p>
        <hr />
        <h5 className="secondary-color">Starting Point</h5>
        <p>
          Take a minute and think about what you’ve said to yourself today. Was
          it critical? Or was it kind and helpful? How did you feel after you
          engaged in this inner discussion?
        </p>
        <p>
          Your thoughts are the source of your emotions and mood. The
          conversations you have with yourself can be destructive or beneficial.
          They influence how you feel about yourself and how you respond to
          events in your life.
        </p>

        <hr />
        <h5 className="secondary-color">Negative self-talk</h5>
        <p>
          We all have an inner critic. At times this little voice can actually
          be helpful and keep us motivated toward goals—like when it reminds us
          that what we’re about to eat isn’t healthy or what we’re about to do
          may not be wise. However, this voice can often be more harmful than
          helpful.
        </p>
        <p>
          This statement show negative thoughts can grow and become
          self-defeating:
        </p>
        <p>
          “I didn’t say the right thing at work today. I never say the right
          thing. Everyone hates me. No wonder I can’t make friends. I’ll never
          have friends.”
        </p>
        <p>
          Focusing on negative thoughts may lead to decreased motivation as well
          as greater feelings of helplessness and sometimes depression. For some
          people it also contributes to their sexual offending as they use it to
          justify negative behaviours, so it’s definitely something to fix.
        </p>
        <br />
        <img
          className="mx-auto d-block"
          src={pictureTwo}
          alt="self-talk 2"
          style={{ height: "auto", maxWidth: "70%" }}
        />
        <br />
        <br></br>
        <hr />
        <h5 className="secondary-color">Positive self-talk</h5>
        <p>
          There are two kinds of positive self-talk- the kind that encourages
          healthy behaviour and the kind that enhances your self-esteem.
        </p>
        <br />
        <p>Examples of self-talk that encourage healthy behaviour:</p>
        <img
          className="mx-auto d-block"
          src={pictureThree}
          alt="Self-talk 3"
          style={{ height: "auto", maxWidth: "70%" }}
        />
        <br />
        <br />
        <br></br>
        <p>Examples of self-talk that enhances your self-esteem:</p>
        <img
          className="mx-auto d-block"
          src={pictureFour}
          alt="Self-talk 4"
          style={{ height: "auto", maxWidth: "70%" }}
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
          <b>
            Positive self-talk will help you to make positive changes in your
            life.
          </b>
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Changing negative to positive self-talk",
    description: (
      <>
        <br></br>
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
        <p>
          You should now be aware that negative thinking can lead to low mood,
          loss of motivation and that it contributes to negative unhealthy
          behaviour – including in some cases offending.
        </p>
        <p>
          Here are some methods which can help you to tackle your negative
          thinking:
        </p>
        <p>
          <span className="secondary-color">1. </span>{" "}
          <b>Challenge your thinking.</b> For each negative statement ask
          yourself these questions:
        </p>
        <ul className="content-list">
          <li>What evidence do I have for this belief?</li>
          <li>What other explanations are there?</li>
          <li>How likely is this to be the case?</li>
          <li>If it concerned someone else what would I think?</li>
        </ul>
        <p>
          <span className="secondary-color">2. </span>{" "}
          <b>
            Do something that will distract you from negative thoughts and
            feelings.
          </b>{" "}
          This might be an activity or contacting a friend.
        </p>
        <p>
          <span className="secondary-color">3. </span>
          <b>Positive reframing.</b> Try to find a positive aspect to the
          situation to focus on, rather than the negative. This is something we
          often do after a bereavement for example, remembering the positive
          life someone had rather than the loss.
        </p>
        <p>
          <span className="secondary-color">4. </span>
          <b>Use positive language.</b> If you constantly say “I can’t” you will
          convince yourself that it’s true. Replace negative words with positive
          ones.
        </p>
        <p>
          <span className="secondary-color">5. </span>
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
          <span className="secondary-color">6. </span>
          <b>Don’t be too hard on yourself.</b> It takes time, practice and
          determination to change negative thinking and adopt a more optimistic
          approach.
        </p>
        <p>
          <span className="secondary-color">7. </span>
          <b>Catch it, Check it, change it </b>– the more you start spotting and
          changing your negative talk to positive the better you will get!
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
          style={{ height: "auto", maxWidth: "70%" }}
        />
        <br></br>
        <br></br>
        <p>
          This planning can be used in any situation. Think of something you are
          doing this week that you are worried or nervous about and think of
          three positive self-talk statements you can say to yourself to help
          prepare yourself positively.
        </p>
        <hr />
        <br></br>
        <h5 className="secondary-color">
          How does this apply to looking at sexual images of children?
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
          style={{ height: "auto", maxWidth: "70%" }}
        />
        <br />
        <br></br>
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
        <br></br>
        <h4 className="secondary-color">Relfection</h4>
        <p>
          Keep a diary for a week of any negative things you say to yourself.
        </p>
        <p>
          After a week look back and see what sort of messages you give
          yourself.
        </p>
        <p>
          Would you say these things to a friend? We are often harder on
          ourselves that others. It’s time to be your new best friend and be
          kind to yourself.
        </p>
        <p>You need to start changing negative statements.</p>
        <p>
          If you want to discuss anything covered in this module, have struggled
          with working through the self-help material or just want the
          opportunity to work through the self-help site with a practitioner to
          guide you then please call the Stop It Now! Helpline for confidential
          support from our trained staff.
        </p>
        <br />
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            This module has helped me explore and understand positive and
            negative self-talk.
          </p>
        </div>
        <br />
        <br />
        <div className="d-flex flex-column align-items-center">
          <div className="w-100">
            <Slider
              aria-label="Always visible"
              defaultValue={3}
              step={1}
              marks
              min={1}
              max={5}
              getAriaValueText={valuetext}
              valueLabelDisplay="on"
            />
          </div>
          <div className="d-block position-relative w-100 mb-5">
            <span
              className="position-absolute text-wrap w-6"
              style={{ left: "0" }}
            >
              Strongly disagree
            </span>
            <span className="position-absolute" style={{ left: "20%" }}>
              Disagree
            </span>
            <span className="position-absolute" style={{ left: "46%" }}>
              Neither
            </span>
            <span
              className="position-absolute text-center"
              style={{ left: "72%" }}
            >
              Agree
            </span>
            <span
              className="text-wrap w-6 position-absolute text-end"
              style={{ left: "84%" }}
            >
              Strongly agree
            </span>
          </div>
        </div>
        <br />
        <div className="bg-primary-subtle border border-primary p-3">
          <p>
            This module has helped me to explore methods of changing negative
            self-talk to positive self-talk.{" "}
          </p>
        </div>
        <br />
        <br />
        <div className="d-flex flex-column align-items-center">
          <div className="w-100">
            <Slider
              aria-label="Always visible"
              defaultValue={3}
              step={1}
              marks
              min={1}
              max={5}
              getAriaValueText={valuetext}
              valueLabelDisplay="on"
            />
          </div>
          <div className="d-block position-relative w-100 mb-5">
            <span
              className="position-absolute text-wrap w-6"
              style={{ left: "0" }}
            >
              Strongly disagree
            </span>
            <span className="position-absolute" style={{ left: "20%" }}>
              Disagree
            </span>
            <span className="position-absolute" style={{ left: "46%" }}>
              Neither
            </span>
            <span
              className="position-absolute text-center"
              style={{ left: "72%" }}
            >
              Agree
            </span>
            <span
              className="text-wrap w-6 position-absolute text-end"
              style={{ left: "84%" }}
            >
              Strongly agree
            </span>
          </div>
        </div>
        <br />

        <Link to="/understanding-thoughts-feelings-and-behaviours">
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
