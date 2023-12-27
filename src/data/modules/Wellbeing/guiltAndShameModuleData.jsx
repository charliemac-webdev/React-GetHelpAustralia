import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import picture from "../../../images/shame-spiral.png";

const GuiltAndShameModuleData = [
  {
    id: 1,
    title: "What is guilt and shame",
    description: (
      <>
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
          <li>
            Shame is the belief that we have done something wrong and that makes
            us a bad person. Someone experiencing shame may not be able to
            identify their positive qualities or see themselves in a good light.
          </li>
        </ul>
        <br />
        <p>
          We’ve worked with thousands of people who have committed offences
          online and have experienced guilt and shame. Feeling guilt and shame
          are normal reactions. But these emotions can be incredibly difficult
          to cope with and can lead to feeling overwhelmed and hopeless.
        </p>
        <br />
        <p>
          When we behave in a way that goes against our values and moral code,
          we can push away feelings of guilt and shame by convincing ourselves
          that what we are doing is ok. For example, someone who is committing
          sexual offences online might be aware that their behaviour is illegal
          and harmful, but tell themselves they are not directly hurting a
          child.
        </p>
        <br />
        <p>
          Thinking like this can help us protect ourselves from feeling guilt
          and shame (find out more about this in the{" "}
          <b>taking responsibility</b>
          module). But when our behaviour is discovered and we see other
          people’s reaction to this discovery, those feelings of guilt and shame
          come flooding in and we can be less able to push them away.
        </p>
        <br />
        <p>
          People we work with tell us about various reasons for experiencing
          guilt and shame, including:
        </p>
        <ul className="content-list">
          <li>
            damage to their reputation after friends, family, colleagues and the
            local community find out
          </li>
          <li>media coverage about their offending</li>
          <li>stigma – the ‘sex offender’ label</li>
          <li>fear of losing their family, friends, jobs, social activities</li>
          <li>realising the impact of the behaviour.</li>
        </ul>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Exercise 1: recognising shame",
    description: (
      <>
        <h4 className="secondary-color">Exercise 1: recognising shame</h4>
        <p>
          We can experience and recognise shame in different ways, including
          physical, emotional and behavioural signs. Being able to recognise
          when you feel ashamed is the first step in being able to manage that
          feeling so that it doesn’t become unhelpful.
        </p>
        <br />
        <p>
          There are some examples in the table below of how some people
          recognise if they are experiencing shame, and some might apply to you.
          Try to identify other signs and add them to the table.
        </p>
        <table className="table table-bordered">
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
        </table>
        <p>
          If you struggle to identify your feelings then please see the module
          <b>recognising and dealing with feelings</b>.
        </p>
        <br />
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
        <br />
        <p>
          But shame is unhelpful, especially if we experience it for a long
          time. If someone sees themselves as a bad person, they might not see a
          way out of their situation or feel unable to change their behaviour.
          This can make them more likely to re-offend and potentially more
          likely to harm themselves.
        </p>
        <br />
        <p>
          Reflecting on what we have covered so far, ask yourself: which do you
          think you are experiencing – guilt or shame?
        </p>
        <br />
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
        <h4 className="secondary-color">How to deal with shame</h4>
        <p>
          We know that moving away from shame is not easy, even if you
          understand and believe that it is necessary. The shame spiral below
          outlines many people’s experiences of shame. It also includes
          suggestions for how to deal with shame.
        </p>
        <img src={picture} alt="Shame Spiral" height="auto" width="100%" />
        <p>
          <i>Adapted from Self Love and Rainbows</i>
        </p>
        <p>
          Here are some techniques you can use to manaage your feelings of
          shame.
        </p>
        <br />
        <h5 className="secondary-color">
          Accept responsibility for you mistake
        </h5>
        <p>
          Facing what you have done is the first step toward forgiving yourself.
          Don’t make excuses or try to justify your actions.
        </p>
        <br />
        <p>
          See this as an opportunity to learn and grow as a person. Identify
          where you could have done better and make a plan for how to handle
          similar situations in the future. This can help give you the
          confidence that you won’t repeat your mistakes.
        </p>
        <br />
        <h5 className="secondary-color">Talk about your feelings</h5>
        <p>
          It can be really helpful to talk to someone else about how you feel.
          Other people are often good at challenging you or pointing out things
          that you do well. They will see the whole person and not just the
          behaviour. By sharing how you feel, the emotions can become easier to
          manage. If you need help with talking about your thoughts and
          feelings, visit our <b>opening up to others</b> module.
        </p>
        <br />
        <h5 className="secondary-color">Find an emotional outlet</h5>
        <p>
          Making changes in your life can cut down on negative emotions, but it
          won’t eliminate them. As you make changes in your life to reduce
          <b>negative</b> emotions such as shame, you will also need to find
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
        <br />
        <p>
          Find a few of these outlets, and you’ll feel less overwhelmed when
          having negative emotions.
        </p>
        <br />
        <h5 className="secondary-color">Work on your self-talk</h5>
        <p>
          What you say to yourself in your mind is called self-talk. It can have
          a really great impact on your self-esteem and confidence.
        </p>
        <br />
        <p>
          When we feel shame, it can be difficult to see the good things about
          ourselves and our lives. The shame spiral can make us only focus on
          the negatives. We might, for example, expect others to only think
          badly about us. It is important to get yourself out of the spiral.
        </p>
        <br />
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
    title: "Exercise 2: moving forward",
    description: (
      <>
        <h4 className="secondary-color">Exercise 2: moving forward</h4>
        <p>
          Holding on to shame can affect your ability to move forward
          positively. Please write down three examples of positive self-talk
          that help you to see that you and your offending are not the same.
        </p>
        <br />
      </>
    ),
  },
  {
    id: 5,
    title: "Reflections",
    description: (
      <>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          Here are the key ways for you to address your feelings of shame and
          move on from them:
        </p>
        <ul className="content-list">
          <li>positive self-talk</li>
          <li>listening to people who care about you​</li>
          <li>remembering that you are more than ​your mistakes​</li>
          <li>
            using feelings of guilt to fuel changes ​you might need to make​
          </li>
          <li>do things that help you feel ​better about yourself.</li>
        </ul>
        <br />
        <h5 className="secondary-color">Talk to us if you need support</h5>
        <p>
          The experienced advisors on our <b>confidential helpline</b> can
          support you if you want to discuss anything covered in this module,
          have struggled when working through it, or want to go through the
          information with a practitioner to guide you. You can stay anonymous
          and don’t have to give your real name, location, or any contact
          details. If you’re not ready to speak to anyone yet, you can also{" "}
          <b>use our live chat or send a secure email</b>.
        </p>
        <br />
        <Link to="/self-help-recognising-and-dealing-with-feelings">
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
