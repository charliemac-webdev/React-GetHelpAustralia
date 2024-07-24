import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

import pictureTwo from "../../../../images/bottle-exploding.png";
import pictureOne from "../../../../images/bottle.png";
import pictureFive from "../../../../images/diagrams-i-wanted-to-talk.gif";
import pictureFour from "../../../../images/diagrams-they-are-my-friends.gif";
import pictureThree from "../../../../images/filing-cabinet.png";

const openingUpToOthersModuleData = [
  {
    id: 1,
    title: "Opening up to others",
    description: (
      <>
        <p>
          Talking to other people about your thoughts and feelings can be a
          daunting process. However it is a skill and much like any skill (tying
          your shoelace, driving a car) it is something that can be learnt and
          gets easier with practice.
        </p>
        <hr />
        {/* <OpeningUpQuiz/> module not created yet */}
        <br />
        <p>
          If you struggle some or most of the time then this module will be
          particularly relevant for you. Even if you rarely struggle we would
          encourage you to check that you use all of the skills described, as
          everyone can improve their communication.
        </p>
        <hr />
        <h5 className="secondary-color">Why talk about my feelings?</h5>
        <p>
          Some people don’t see the benefits of talking about feelings. Let’s
          look at what happens if you don’t. Imagine you are carrying around a
          bottle.
        </p>
        <img className="mx-auto d-block" src={pictureOne} alt="Bottle" />
        <p>In this bottle put your negative feelings.</p>
        <img className="mx-auto d-block" src={pictureOne} alt="Bottle" />
        <p>Over years you fill it up until it becomes too full and explodes!</p>
        <img className="mx-auto d-block" src={pictureTwo} alt="Full Bottle" />
        <p>
          The negative feelings come out, often in an unhealthy way, either by
          strong emotions (commonly an angry outburst) or through harmful
          behaviours that help distract from the emotions such as alcohol,
          drugs, gambling or sex.
        </p>
        <br />
        <p>
          <b>
            Think about your situation – is this relevant for you, does it help
            explain your online behaviour?
          </b>
        </p>
        <br />
        <h5 className="secondary-color">So how does talking help?</h5>
        <p>Imagine instead of filling your bottle you have a filing cabinet.</p>
        <img
          className="mx-auto d-block"
          src={pictureThree}
          alt="filing cabinet"
        />
        <p>
          Instead of pushing all your feelings inside, you have a system to look
          at your feelings, think about them, discuss them and file them away,
          knowing where they are and how to access them at another time if you
          need to. Does that sound more manageable?
        </p>
        <br />
        <p>
          Ever heard the saying ‘a problem shared is a problem halved’? Often
          people find that an important part of dealing with (or filing)
          feelings is to share them with someone you can trust. This can be
          helpful to allow you reflect on how you feel and make your emotions
          feel more manageable.
        </p>
        <br />
        <p>
          An added advantage is that by sharing how you feel with someone this
          helps them feel closer to you and creates intimacy in your
          relationship.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Who do I talk to",
    description: (
      <>
        <h4 className="secondary-color">Who do I talk to</h4>
        <p>
          If you don’t have a partner, family member or friend to talk to then
          there are organisations who can help. Stop It Now! offers free
          confidential advice and support for people who are concerned about
          their sexual thoughts, feelings or behaviours. You can also get
          counselling via your GP or the British Association for Counselling and
          Psychotherapy (BACP).
        </p>
        <h4 className="secondary-color">How do I talk about my feelings</h4>
        <p>
          Some emotions are more difficult to express than others. Negative ones
          can often be harder to express but there are ways to make it easier.
        </p>
        <br />
        <p>
          Setting the scene – Location is important. You want somewhere that
          offers privacy; you want to have the time to discuss the situation and
          how you feel, possibly on neutral territory. For example you might
          choose a quiet corner of a café on an afternoon when you have plenty
          of time.
        </p>
        <br />
        <p>
          Self-talk – Use positive self-talk to help yourself calm down and
          build your confidence to talk about your feelings. If you are unsure
          what positive self-talk is then read the <b>self-talk section</b>.
        </p>
        <img
          src={pictureFour}
          alt="diagram self talk"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p>
          It can be really helpful to plan out what you want to say to someone
          and how you are going to say it. You don’t want to plan out the whole
          conversation (as you need to be able to respond to what the other
          person says) but it can be helpful to have an opening line.
        </p>
        <img
          src={pictureFive}
          alt="Diagram I wanted to talk"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h5 className="secondary-color">
          What if they are causing the problem?
        </h5>
        <p>
          If your feelings stem from the other person’s behaviour then it is
          important to approach the discussion in a non-confrontational way.
          Using the following structure can be helpful:
        </p>
        <br />
        <p>
          <b>DESCRIBE THE SITUATION – “when we don’t spend time together”</b>
        </p>
        <br />
        <p>
          <b>EXPRESS YOUR FEELINGS – “I feel lonely”</b>
        </p>
        <br />
        <p>
          <b>
            SPECIFY WHAT YOU WANT TO HAPPEN – “I would like us to have at least
            one evening a week together”
          </b>
        </p>
        <br />
        <p>
          <b>
            STATE THE OUTCOME – “that way we can have quality time together”
          </b>
        </p>
        <br />
        <p>
          It is important to state how you feel using ‘I’ statements, as no one
          can disagree with how you feel and it doesn’t sound like you are
          blaming the other person. (Try practising in your head ‘you make me
          feel lonely’ versus ‘I feel lonely’ and see how it sounds to you.)
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Reflection",
    description: (
      <>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          As with the Introduction to this module, identify your confidence with
          the following skills (1 = I find it impossible; 2 = I find it hard; 3
          = I am really confident).
        </p>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                I have a clear and detailed understanding of how to talk to
                people about how I feel.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                I can share when I feel positive emotions e.g. happy, excited
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                I can share when I feel negative emotions e.g. anger, sadness,
                loneliness
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>Now, consider the following questions:</p>
        <ul className="content-list">
          <li>
            Have any of your responses changed from 1 to 2 or 2 to 3 from since
            the start of this module?
          </li>
          <li>In what ways might your confidence have changed?</li>
          <li>
            Which part of the module has had the greatest impact on your
            understanding? Why?
          </li>
          <li>
            Has anything from this module prompted or encouraged you to take
            action around your behaviour? If so, what? How do you plan to act on
            it?
          </li>
          <li>
            Has this module raised any further questions for you or made you
            want to explore any ideas further? What steps do you plan to take to
            seek out this information?
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
        <Link to="/self-help-self-talk">
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
export default openingUpToOthersModuleData;
