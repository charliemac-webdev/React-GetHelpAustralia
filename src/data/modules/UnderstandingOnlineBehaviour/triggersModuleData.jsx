import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";

import documentOne from "@/documents/Triggers_Exercise_Identifying triggers.pdf";
import documentTwo from "@/documents/Triggers_Exercise_Managing triggers.pdf";

const triggersModuleData = [
  {
    id: 1,
    title: "Triggers",
    description: {
      type: "content",
      content: (
        <>
          <br></br>
          <h4 className="secondary-color">
            What can trigger the urge to offend?
          </h4>
          <p>
            A ‘trigger’ is also called a cue, prompt or call to action. Triggers
            are what come before thoughts, feelings and behaviour and can lead
            to a response or change in emotion and behaviour.
          </p>
          <p>There are different types of triggers:</p>

          <h5 className="secondary-color">Internal triggers</h5>

          <p>
            These are triggers that come from within you. This includes
            thoughts, emotions and physical feelings.
          </p>
          <p>
            Examples include emotions such as unhappy, frustrated, bored,
            resentful, stressed and anxious; physical feelings such as arousal;
            or thoughts such as ‘I don’t like this feeling’ and ‘she is going to
            leave me’.
          </p>

          <h5 className="secondary-color">External triggers</h5>

          <p>
            These are triggers that come from outside of you. These might be
            related to a specific situation or an environment.
          </p>
          <p>
            Situational triggers may include stressful life events or stressors
            (e.g., argument with partner, work pressure, friend cancelling a
            plan), and environmental triggers may include general elements of
            the environment including your daily routine (e.g., working alone
            late at night, accessing pornography website or using phone/computer
            in isolated location).
          </p>
          <p>
            It is also useful to highlight that external triggers (e.g., annoyed
            look from a partner) can trigger internal triggers such as emotions
            (e.g., anxiety, anger) and thoughts (“it’s not fair”, “I need a
            release”), all of which are relevant when understanding your
            triggers.
          </p>

          <br></br>
          <h4 className="secondary-color">What are your triggers?</h4>
          <p>
            Identifying triggers and ways to manage them can help you to avoid
            situations that are riskier for you and build your skills to manage
            triggers as they arise.{" "}
          </p>
          <p>
            Triggers often appear at the beginning of the cycle of offending and
            can prompt behavioural responses. Being aware of your triggers is
            essential to increase your ability to stop the cycle as early as
            possible.
          </p>
          <p>
            On the downloadable worksheet identify your triggers – internal
            which includes emotional, and external which include situations,
            sights and sounds.
          </p>
          <p>
            It is likely that you will have several triggers. Sometimes these
            will work by themselves and sometimes they will work as a
            combination.
          </p>
          <table className="table table-bordered">
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
            <a href={documentOne} target="_blank" rel="noopener noreferrer">
              <strong>Download printable template</strong>
            </a>
            .
          </p>
        </>
      ),
    },
  },
  {
    id: 2,
    title: "Situational and environmental risks",
    description: {
      type: "content",
      content: (
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
            That’s why it is so important to recognise what your triggers are,
            and situations and environments that are risky for you.
          </p>
          <p>
            On the downloadable worksheet list what these triggers and
            situations are and why they are risky. Then identify what you can do
            to manage them.
          </p>
          <table className="table table-bordered">
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
            <a href={documentTwo} target="_blank" rel="noopener noreferrer">
              <strong>Download printable template</strong>
            </a>
            .
          </p>
          <br></br>
          <p>
            It can be difficult to consider a variety of different management
            strategies for each of your triggers, so we encourage you to contact
            the helpline advisors who are here to support you and help you
            further explore your learnings. You can stay anonymous and don’t
            have to give your real name or any contact details. If you’re not
            ready to speak to anyone yet, you can also use the Stop It Now!
            Australia live chat.
          </p>
        </>
      ),
    },
  },
  {
    id: 3,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <>
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>Think about the triggers you have identified.</p>
          <ul className="content-list">
            <li>
              Are they things you can address on your own or do you need
              specialist support?
            </li>
            <li>
              Are you always aware of your moods and how to deal with them?
            </li>
            <li>
              Can you make changes to your environment and situations to reduce
              your risks?
            </li>
          </ul>
          <p>
            Recognising triggers to your illegal online behaviour is an
            important part of being able to change your behaviour. We now need
            to start looking at managing these triggers as this can help you
            minimise the risk of repeating your behaviour in the future.
          </p>
          <br />
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="different_triggers"
            value={responses.different_triggers}
            onChange={onQuestionChange}
          >
            I now have a better understanding of the different types of
            triggers.{" "}
          </ReflectionQuestion>
          <ReflectionQuestion
            id="identify_own_triggers"
            value={responses.identify_own_triggers}
            onChange={onQuestionChange}
          >
            I can now identify my own triggers.
          </ReflectionQuestion>
        </>
      ),
    },
  },
];
export default triggersModuleData;
