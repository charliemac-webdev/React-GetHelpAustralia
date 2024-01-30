import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";

const triggersModuleData = [
  {
    id: 1,
    title: "Triggers",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">
          What can trigger the urge to offend?
        </h4>
        <p>
          A ‘trigger’ is also called a cue, prompt or call to action. Triggers
          are what come before thoughts, feelings and behaviour and can lead to
          a response or change in emotion and behaviour.
        </p>
        <p>There are different types of triggers:</p>
        <p>
          <h5 className="secondary-color">Internal triggers</h5>
        </p>
        <p>
          These are triggers that come from within you. This includes thoughts,
          feelings and attitudes linked to lifestyle problems.
        </p>
        <p>
          Examples include feeling unhappy, frustrated, bored, resentful,
          stressed and anxious.
        </p>
        <p>
          <h5 className="secondary-color">External triggers</h5>
        </p>
        <p>
          These are triggers that come from outside of you. They are like an
          alarm sounding and could be something you see or hear.
        </p>
        <p>
          They might come from different situations and come from our daily
          routines. For example walking through the kitchen might trigger us to
          open the fridge, or going onto adult pornography websites might
          trigger sexual thoughts about accessing sexual images of children.
        </p>
        <br></br>
        <h4 className="secondary-color">What are your triggers?</h4>
        <p>
          Triggers often appear at the beginning of the cycle of offending and
          can prompt behavioural responses. Being aware of your triggers is
          essential to increase your ability to stop the cycle as early as
          possible.
        </p>
        <p>
          On the downloadable worksheet identify your triggers – internal which
          includes emotional, and external which include situations, sights and
          sounds.
        </p>
        <p>
          It is likely that you will have several triggers. Sometimes these will
          work by themselves and sometimes they will work as a combination.
        </p>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>Internal</th>
              <th>External</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <em>Lonely</em>
              </td>
              <td>
                <em>Pop-ups</em>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/triggers-exercise-1editable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Download printable template</strong>
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Situational and environmental risks",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Managing triggers and risks</h4>
        <p>
          Some places and situations present specific risks and triggers for
          people, for example being alone at home late at night with internet
          access. These can become more risky if combined with risky thoughts,
          feelings and behaviours, and can provide the beginning of a chain of
          unhealthy behaviour.
        </p>
        <p>
          That’s why it is so important to recognise what your triggers are, and
          situations and environments that are risky for you.
        </p>
        <p>
          On the downloadable worksheet list what these triggers and situations
          are and why they are risky. Then identify what you can do to manage
          them.
        </p>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>Triggers – internal and external, including situations</th>
              <th>How to manage</th>
            </tr>
            <tr>
              <td>
                <em>Feeling lonely.</em>
              </td>
              <td>
                <em>Pick up the phone and call a friend.</em>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/triggers-exercise-2editable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Download printable template</strong>
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Reflection",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>Think about the triggers you have identified.</p>
        <ul className="content-list">
          <li>
            Are they things you can address on your own or do you need
            specialist support?
          </li>
          <li>Are you always aware of your moods and how to deal with them?</li>
          <li>
            Can you make changes to your environment and situations to reduce
            your risks?
          </li>
        </ul>
        <p>
          Recognising triggers to your illegal online behaviour is an important
          part of being able to change your behaviour.
        </p>
        <p>
          We now need to start looking at managing these triggers as this can
          help you minimise the risk of repeating your behaviour in the future.
        </p>
        <br />
        <ReflectionQuestion>
          This module has helped me explore and understand the different types
          of triggers{" "}
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me to explore and understand my own triggers
        </ReflectionQuestion>
        <Link to="/self-help-taking-responsibility">
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
export default triggersModuleData;
