import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";
import picture from "../../../images/shame-spiral.png";

const GuiltAndShameModuleData = [
  {
    id: 1,
    title: "What is guilt and shame?",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">What are guilt and shame?</h4>
        <p>
          Guilt and shame are often talked about as the same emotions but there
          are some key differences.
        </p>
        <ul className="content-list">
          <li>
            Guilt is the acknowledgement that we have done something wrong, but
            that behaviour does not define who we are as a person. Someone
            experiencing guilt is able to recognise their positive qualities and
            still see themselves in a good light.
          </li>
          <br></br>
          <li>
            Shame is the belief that we have done something wrong and that makes
            us a bad person. Someone experiencing shame may not be able to
            identify their positive qualities or see themselves in a good light.
          </li>
        </ul>
        <p>
          We’ve worked with thousands of people who have committed offences
          online and have experienced guilt and shame. Feeling guilt and shame
          are normal reactions. But these emotions can be incredibly difficult
          to cope with and can lead to feeling overwhelmed and hopeless. This is
          sometimes referred to as the shame spiral.
        </p>
        <img
          className="mx-auto d-block"
          src={picture}
          alt="Shame Spiral"
          height="auto"
          width="50%"
        />
        <p className="text-center">
          <i>Adapted from Self Love and Rainbows</i>
        </p>
        <br />
        <p>
          This module aims to help you recognise if you’re feeling shame and
          ways you can overcome it so that you can build a positive and offence
          free life.
        </p>
        <h5 className="secondary-color">
          Why is it important to manage these emotions?
        </h5>
        <p>
          We can think about guilt as a helpful emotion because it helps us to
          behave in line with our values and moral code. For example, if we
          value loyalty but behave in a way that is not loyal to friends or
          family (such as criticising them behind their back), we might feel
          guilt. This can then motivate us to be more loyal in the future in
          line with our values.
        </p>
        <p>
          But shame is unhelpful, especially if we experience it for a long
          time. If someone sees themselves as a bad person, they might not see a
          way out of their situation or feel unable to change their behaviour.
          This can make them more likely to re-offend and potentially more
          likely to harm themselves.
        </p>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Exercise 1: recognising shame",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Exercise 1: recognising shame</h4>
        <p>
          We can experience and recognise shame in different ways, including
          physical, emotional and behavioural signs. Being able to recognise
          when you feel ashamed is the first step in being able to manage that
          feeling so that it doesn’t become unhelpful.
        </p>
        <p>
          There are some examples in the table below of how some people
          recognise if they are experiencing shame, and some might apply to you.
          Try to identify other signs and add them to the table.
        </p>
        <br></br>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Physical cues (how our body reacts)</th>
              <th>Emotional cues (how we feel)</th>
              <th>Cognitive cues (what we think)</th>
              <th>Behavioural cues (how we behave)</th>
            </tr>
            <tr>
              <td>Feeling sick</td>
              <td>Feeling worthless</td>
              <td>I am a terrible person</td>
              <td>Drinking more</td>
            </tr>
            <tr>
              <td>Sweating</td>
              <td>Feeling rejected</td>
              <td>I don't deserve support</td>
              <td>Avoiding people</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          If you struggle to identify your feelings then please see the module
          <Link to="/recognising-and-dealing-with-feelings">
            <b> recognising and dealing with feelings</b>
          </Link>
          .
        </p>
        <p>
          Reflecting on what we have covered so far, ask yourself: which do you
          think you are experiencing – guilt or shame?
        </p>
        <p>
          We strongly encourage the people we work with to try to move away from
          shame. Sometimes people are reluctant to do this, believing that they
          should feel bad because of what they have done. We are not excusing
          offending or suggesting people should not feel regret or guilt. But
          shame is not helpful. It makes it more difficult for you to move
          forwards – away from the offending behaviour – and towards making a
          valuable contribution to your family, friends and society.
        </p>
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "How to deal with shame",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">How to deal with shame</h4>
        <p>
          We’ve worked with thousands of people who have committed sexual
          offences and have experienced guilt and shame. These feelings are
          normal and feeling guilty can help make sure you don’t engage in
          harmful behaviour in the future. However, shame can be incredibly
          difficult to cope with and can lead to feeling overwhelmed and
          hopeless, which can prevent you from moving to an offence free life.
        </p>
        <p>
          Here are some techniques you can use to manage your feelings of shame.
        </p>
        <h5 className="secondary-color">
          Accept responsibility for you mistake
        </h5>
        <p>
          Facing what you have done is the first step toward forgiving yourself.
          Don’t make excuses or try to justify your actions.
        </p>
        <p>
          See this as an opportunity to learn and grow as a person. Identify
          where you could have done better and make a plan for how to handle
          similar situations in the future. This can help give you the
          confidence that you won’t repeat your mistakes.
        </p>
        <h5 className="secondary-color">Talk about your feelings</h5>
        <p>
          It can be really helpful to talk to someone else about how you feel.
          Other people are often good at challenging you or pointing out things
          that you do well. They will see the whole person and not just the
          behaviour. By sharing how you feel, the emotions can become easier to
          manage. If you need help with talking about your thoughts and
          feelings, visit our{" "}
          <Link to="/recognising-and-dealing-with-feelings">
            <b>opening up to others</b>
          </Link>
        </p>
        <h5 className="secondary-color">Find an emotional outlet</h5>
        <p>
          Making changes in your life can cut down on negative emotions, but it
          won’t eliminate them. As you make changes in your life to reduce
          <b> negative</b> emotions such as shame, you will also need to find
          healthy outlets for dealing with these emotions, for example:
        </p>
        <ul className="content-list">
          <li>
            regular <b>exercise</b> provides an emotional lift and an outlet for
            negative emotions
          </li>
          <li>
            <b>meditation</b> can help stop you from feeling overwhelmed
          </li>
          <li>
            finding opportunities for having fun and getting more{" "}
            <b>laughter</b> in your life can also change your perspective and
            relieve stress.
          </li>
        </ul>
        <p>
          Find a few of these outlets, and you’ll feel less overwhelmed when
          having negative emotions.
        </p>
        <h5 className="secondary-color">Work on your self-talk</h5>
        <p>
          What you say to yourself in your mind is called self-talk. It can have
          a really great impact on your self-esteem and confidence.
        </p>
        <p>
          When we feel shame, it can be difficult to see the good things about
          ourselves and our lives. The shame spiral can make us only focus on
          the negatives. We might, for example, expect others to only think
          badly about us. It is important to get yourself out of the spiral.
        </p>
        <p>
          One way of doing this is to recognise your negative thoughts and
          balance them with a more realistic view. To do this, remind yourself
          of the positives about yourself and your life. Make a list of things
          you like about yourself, things you are good at, things you have
          achieved, and things other people like about you. It can be useful to
          carry the list around with you and look at it when you feel shame.
          Keep adding to the list and keep reminding yourself of the positives.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Reflection",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          Holding on to shame can affect your ability to move forward
          positively. Think about three examples of positive self-talk that help
          you to see that you and your offending are not the same.
        </p>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.
        </p>
        <br />
        <ReflectionQuestion>
          I now have a better understanding of my own feelings of guilt and/or
          shame.
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me to identify ways to overcome feelings of
          guilt/shame.
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me explore and understand how to deal with
          shame.
        </ReflectionQuestion>
        <Link className="text-decoration-none" to="/motivation-for-change">
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

export default GuiltAndShameModuleData;
