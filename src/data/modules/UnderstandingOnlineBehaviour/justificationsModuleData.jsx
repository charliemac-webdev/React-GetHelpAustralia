import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";
import image from "../../../images/justifications.gif";

const JustificationsModuleData = [
  {
    id: 1,
    title: "Justifications",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Justifications</h4>
          <p>
            When we encounter a situation in which our behaviour is inconsistent
            with our own or others’ beliefs and values, our minds tend to come
            up with false reasons for why our behaviour is okay. These reasons
            are called ‘justifications’, and they serve to make us feel more
            comfortable and give us permission to keep engaging in the behaviour
            even when it is harmful. It is a way to deflect responsibility.
          </p>
          <p>
            If we think back to the{" "}
            <Link to="/understanding-thoughts-feelings-and-behaviours">
              thoughts, feelings and behaviour section
            </Link>
            , we know our behaviour is the consequence of what we think and
            feel. So, if we are telling ourselves that something is okay, we are
            more likely to engage in that behaviour, even when it is harmful.
            These ‘making it okay’ statements we tell ourselves are
            justifications.
          </p>
          <p>
            It can sometimes be like having an internal monologue where you are
            battling between unhelpful and helpful thinking, like{" "}
            <Link to="/self-talk">self-talk</Link>. Justifications are unhelpful
            thinking as they give permission to do something we shouldn’t be
            doing. We can use helpful thinking to challenge these
            justifications.
          </p>
          <p>Here's an example</p>
          <img
            className="mx-auto d-block"
            src={image}
            alt="Justifications"
            height="auto"
            width="60%"
          />
          <br />
          <p>
            People will be persuaded by their unhelpful thinking if their ‘yes’
            justifications in favour of doing the behaviour are stronger than
            their ‘no’ challenges against the behaviour.
          </p>
          <p>
            Justifications include things like excuses, minimisations,
            exaggerations, denial and bits of information we choose to miss out
            or ignore.
          </p>
          <p>
            We all use justifications every day. If it’s raining outside, we
            might tell ourselves that we can’t run today. Justifications can be
            a barrier to making positive changes. The more you are aware of your
            unhelpful and helpful thinking, and the negative effects of
            offending for yourself and others, you will increase your ability
            and motivation to avoid further offending.
          </p>
          <p>
            Here are some examples of statements that represent justification of
            behaviours. Have a think about what justifications you have used.
          </p>
          <ul className="content-list">
            <li>“It was only once in a while.”</li>
            <li>“At least I’m not as bad as so-and-so.”</li>
            <li>“I’m dealing with a lot of stress and need to unwind.”</li>
          </ul>
          <p>
            If you identify with the statements in the list then justification
            could be helping you to keep doing a behaviour that you know is
            harmful.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Identifying and challenging your justifications",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">
          Exercise 1: Identifying and challenging your justifications
        </h4>
        <p>
          Use the table below to consider your justifications at the time you
          were engaging in harmful behaviour. Once you have identified what
          justifications you are using, it is important to think about how you
          can challenge these. For example, if you are justifying the behaviour
          by saying &quot;it was only once in a while&quot;, a potential
          challenge could be &quot;even if it&#39;s once in a while, it is still
          illegal and harmful&quot;. Once you begin to challenge these
          justifications, they have less power.
        </p>
        <p>
          You should repeat all the phrases you write in the “Challenges” column
          in your head, so that this sort of thinking becomes automatic if you
          start to experience the justifications again.
        </p>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Justifications</th>
              <th>Challenges</th>
            </tr>
            <tr>
              <td>
                <em>I’m dealing with a lot of stress and need to unwind.</em>
              </td>
              <td>
                <em>
                  It is important for me to manage my stress in a healthy way
                  that does not harm others. Every time I engage in this
                  behaviour, it is very harmful to children and myself
                </em>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Download a printable version</p>
        <p>
          As you work through the modules, have this list with you. The more you
          understand about your offending behaviours, the more unhelpful
          thinking you should recognise. By recognising and challenging these
          unhelpful thoughts the more likely you will be to manage your
          behaviours.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Reflection",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">Reflections</h4>

        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.
        </p>
        <ReflectionQuestion>
          I can now recognise how justifications are used to allow problematic
          behaviour to continue.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I can recognise the justifications I may have used to engage in
          harmful behaviour
        </ReflectionQuestion>
        <ReflectionQuestion>
          I can recognise challenges to my justifications to help me stop
          engaging in harmful behaviour.
        </ReflectionQuestion>
        <Link className="default-link" to="/problematic-collecting">
          <div className="d-flex justify-content-end">
            <Button ident="next-button" classes="btn">
              Next Module
            </Button>
          </div>
        </Link>
      </div>
    ),
  },
];

export default JustificationsModuleData;
