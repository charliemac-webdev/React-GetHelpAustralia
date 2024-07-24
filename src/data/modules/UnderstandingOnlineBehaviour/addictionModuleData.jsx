import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";
import document from "../../../documents/Addiction_Exercise_Addiction diary.pdf";

const AddictionModuleData = [
  {
    id: 1,
    title: "Addiction",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Addiction</h4>
          <p>What do we mean by a compulsive or addictive behaviour?</p>
          <p>
            <b>Compulsive:</b> feeling a need to do something to avoid bad
            consequences.
          </p>
          <p>
            <b>Addiction:</b> continue seeking a positive reward, despite
            substantial negative consequences.
          </p>
          <p>
            Typically an individual becomes dependent on something to reduce the
            pain of certain emotions. Usually they get pleasure the first time
            they try it and then they return to the behaviour to get the same
            feeling of pleasure. Continual usage leads to a reliance on the
            behaviour to feel normal which ultimately leads to psychological
            dependence.
          </p>
          <p>
            Consider a behaviour you think is problematic and reflect on the
            following questions:-
          </p>
          <ul className="content-list">
            <li>
              Do you find yourself doing it more often and for longer periods of
              time than you originally intended?
            </li>
            <li>
              Does doing it make you feel better and more in control when you
              are doing it? Do you feel worse when you don't do it?
              <br />
              <li>
                Do you go to great efforts to do the behaviour including great
                efforts to hide the behaviour?
              </li>
            </li>
            <li>
              Do you feel anxious or uncomfortable when you can't do it or even
              when you think about not doing it?
            </li>
            <li>
              Has doing it negatively impacted your life and your relationships?
            </li>
            <li>
              Do you often tell yourself you'll stop, only to end up continuing
              the same behavior?
            </li>
          </ul>
          <p>
            If several of these questions relate to you, then this module may be
            helpful for you.
          </p>
          <hr />
          <br></br>
          <h4 className="secondary-color">Starting Point</h4>
          <p>
            Think about your use of adult pornography, online chats and sexual
            images of children and using the definitions above think about
            whether they were compulsive or addictive?
          </p>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>Adult pornography</td>
                <td>
                  Addictive
                  <br />
                  Compulsive
                  <br />
                  Neither
                </td>
              </tr>
              <tr>
                <td>Sexual images of children</td>
                <td>
                  Addictive
                  <br />
                  Compulsive
                  <br />
                  Neither
                </td>
              </tr>
              <tr>
                <td>Chatting online sexually (with children or adults)</td>
                <td>
                  Addictive
                  <br />
                  Compulsive
                  <br />
                  Neither
                </td>
              </tr>
            </tbody>
          </table>
          {/* <p>If you are still not sure here is a quiz that might help:</p>
          Addiction Quiz
          <p>&nbsp;</p>
          <p>
            The more questions you agree with, the more likely that you feel
            addicted to your illegal online behaviour. If you agreed with any of
            the statements, you might find this module helpful.
          </p>
          <ul className="content-list">
            <li>
              <span style={{ color: "#e10818" }}>
                Meeting 2-3 of the criteria indicates a mild addiction
              </span>
            </li>
            <li>
              <span style={{ color: "#e10818" }}>
                Meeting 4-5 of the criteria indicates a moderate addiction
              </span>
            </li>
            <li>
              <span style={{ color: "#e10818" }}>
                Meeting 6-7 of the criteria indicates a severe addiction
              </span>
            </li>
          </ul> */}
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "It's not my fault - right?",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">
          It’s an addiction, so it’s not my fault – right?
        </h4>
        <br></br>
        <p>
          Wrong – it is important to remember that addiction is not an excuse
          for harmful behaviours. Illegal online sexual behaviour is harmful,
          and the first time you engaged in this behaviour you made a decision
          to do so. It may have felt like it was harder to stop over time but
          each time you engaged in the behaviour you still had a choice. What’s
          important is that you now see this and are doing something about it.
        </p>{" "}
        <p>
          Addiction may be an element that helps you understand your pathway to
          offending, and what is important to put in place to ensure you do not
          offend again, but it does not excuse the behaviour. The more you
          understand about your own behaviour, the more you can put things in
          place to move forward to living a happy and offence-free life.
        </p>
        <p>
          So if you have recognised an addictive element to your offending, you
          need to understand more about it. Why do you think your use of the
          internet became addictive? What emotions were you avoiding/covering
          up?
        </p>
        <p>
          You will need to look at reasons or motivations behind your addiction.
          You have already started looking at motivations for your offending and
          triggers to your behaviour. Think about the following questions:
        </p>
        <ol>
          <li>
            Have I ever had other addictions such as alcohol, drugs, gambling?
          </li>
          <li>
            Do I always use quick fixes (sex, drugs, alcohol, gambling) to feel
            better?
          </li>
          <li>
            If I didn’t get a rewarding feeling from my online behaviour why did
            I repeat it?
          </li>
          <li>
            What was happening in my life at the times my addiction was at its
            worst? (it can help to look back to your life line from module 1)
          </li>
        </ol>
        <br></br>
        <h4 className="secondary-color">HEALTH&nbsp;WARNING:</h4>
        <p>
          It is quite common that people replace one addiction with another. Be
          aware of this and if you have found that you have had other addictions
          in the past or other current addictions you may need to get specific
          support to address these. There are a number of organisations that may
          be helpful for specific addictions, such as&nbsp;
          <a
            href="https://www.saa-australia.org/"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            Sex Addicts Anonymous (SAA)
          </a>
          ,&nbsp;
          <a
            href="https://aa.org.au/"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            Alcoholic Anonymous (AA)
          </a>
          ,&nbsp;
          <a
            href="https://gaaustralia.org.au/"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            Gamblers Anonymous (GA)
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://www.na.org.au/multi/"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            Narcotics Anonymous (NA)
          </a>
          .
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 3,
    title: "Dealing with addiction",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            How to deal with addiction and compulsion
          </h4>
          <p>
            It is really important to look at the motivation for your behaviour
            and the emotions you are avoiding. If you don’t you will only mask
            the problem.
          </p>
          <p>
            However, whilst addressing the underlying motivations for your
            addictions there are also techniques that can be used to manage
            urges to go on-line and engage in illegal online sexual behaviour,
            as set out below:
          </p>
          <ul className="content-list">
            <li>
              Challenging your thoughts that make it feel like the behaviour is
              okay.
            </li>
            <li>
              Active distraction – pro-actively distracting self from fantasy,
              e.g., conversation, new recipe.
            </li>
            <li>
              Tell a safe person – someone from your support network, Stop It
              Now! helpline.
              <br />
              <li>
                Thought stopping – physical prompt to stop fantasy e.g. elastic
                band around your wrist.
              </li>
            </li>
            <li>
              Urge surfing – ride the urge without acting on it, know it will
              pass.
            </li>
            <li>
              Fantasy blocker – think of “worst case” consequence – e.g. prison
              or being caught in the act by partner.
            </li>
            <li>
              Escape route – physically remove self from where you are having
              the fantasy e.g. turn off the computer, go for a walk.
            </li>
            <li>
              Relaxation techniques – use appropriate guided visualisation that
              works for you – this should be something that has been planned and
              rehearsed in advance.
            </li>
          </ul>
          <p>
            A long term technique for managing addiction is self-care –
            including taking an interest in diet, social life, personal hygiene
            and exercise. Having an interest in this area can then be drawn on
            to use in the above techniques e.g. for ‘active distraction’ going
            to the gym or cooking a meal. Take a look at the&nbsp;{" "}
            <Link className="secondary-color" to="/self-care">
              self-care{" "}
            </Link>{" "}
            &nbsp;module for more helpful information.
          </p>
          <p>
            Make a list which of these techniques you will find most useful or
            will try using.
          </p>
          <p>
            It is important to review how well you are managing your urges and
            the techniques which work well for you. Downloading the diary below
            can be a way of doing this.
          </p>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Situation</strong>&nbsp;(day, time, mood, location)
                </td>
                <td>
                  <strong>Strength of urge</strong>&nbsp;(1= low, 10 = high)
                </td>
                <td>
                  <strong>Technique used</strong>
                </td>
                <td>
                  <strong>Strength of urge after&nbsp;</strong>(1= low, 10 =
                  high)
                </td>
              </tr>
              <tr>
                <td>
                  <em>At home, late at night, bored and lonely</em>
                </td>
                <td>
                  <em>10</em>
                </td>
                <td>
                  <em>Active distraction – doing a Sudoku puzzle</em>
                </td>
                <td>
                  <em>5</em>
                </td>
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
            <a
              href={document}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-color"
            >
              Download printable template &gt;
            </a>
          </p>
          <p>
            This can also be used to help you recognise patterns when your urge
            to engage in illegal online sexual behaviour is strongest or what
            moods are linked to the urges. This awareness will help with your
            relapse prevention and risk management.
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Reflection",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>Now, consider the following questions:</p>
          <ul className="content-list">
            <li>
              How has your understating of addiction and compulsion helped you
              understand your online behaviour?
            </li>
            <li>
              What are you doing to address your underlying motivations? What
              else do you need to do?
            </li>
            <li>
              What is the most effective way to manage your urges and triggers?
            </li>
            <li>
              How in control of your behaviour do you feel? What could improve
              this?
            </li>
          </ul>
          <p>
            If you want to discuss anything covered in this module, have
            struggled with working through the self-help material or just want
            the opportunity to work through the self-help site with a
            practitioner to guide you then please&nbsp;call the Stop It Now!
            Helpline&nbsp;for confidential support from our trained staff.
          </p>
          <br></br>
        </div>
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.{" "}
        </p>
        <ReflectionQuestion>
          I now have a better understanding of the difference between addiction
          and compulsion.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now have a better understanding of what role addiction plays in
          one's online behaviour.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I can now start to address addiction in my life.
        </ReflectionQuestion>
        <Link
          className="default-link"
          to="/sexual-communication-with-children-online"
        >
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

export default AddictionModuleData;
