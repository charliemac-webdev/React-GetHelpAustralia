import { Link } from "react-router-dom";
import Button from "../../../components/Button";

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
            <b>Compulsive:</b> defined as performing an act persistently and
            repetitively without it necessarily leading to an actual reward or
            pleasure.
          </p>
          <p>
            <b>Addiction:</b> is a state characterized by compulsive engagement
            in&nbsp;rewarding&nbsp;stimuli, despite adverse consequences.
          </p>
          <p>
            Typically an individual becomes dependent on something to reduce the
            pain of certain emotions. Usually they get pleasure the first time
            they try it and then they return to the behaviour to get the same
            feeling of pleasure. Continual usage leads to a reliance on the
            behaviour to feel normal which ultimately leads to psychological
            dependence.
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
          <p>If you are still not sure here is a quiz that might help:</p>
          {/* Addiction Quiz */}
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
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "It's not my fault",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">
          It’s an addiction, so it’s not my fault – right?
        </h4>
        <p>
          Wrong – the first time you engaged in illegal online sexual behaviour,
          you knew it was wrong, you weren’t addicted then but you went back and
          did it again. This is because you prioritised the pleasure you got
          over the harm it caused others and each time you went back you could
          still have chosen a different path. Yes, it will have got harder to
          stop over time but you still had a choice. What’s important is that
          you now see this and are doing something about it.
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
          >
            Sex Addicts Anonymous (SAA)
          </a>
          ,&nbsp;
          <a href="https://aa.org.au/" target="_blank" rel="noopener">
            Alcoholic Anonymous (AA)
          </a>
          ,&nbsp;
          <a href="https://gaaustralia.org.au/" target="_blank" rel="noopener">
            Gamblers Anonymous (GA)
          </a>
          &nbsp;and&nbsp;
          <a href="https://www.na.org.au/multi/" target="_blank" rel="noopener">
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
            <li>Restructuring/challenging – rehearsed self-talk.</li>
            <li>
              Active distraction – pro-actively distracting self from fantasy,
              e.g. computer game, conversation.
            </li>
            <li>
              Tell a safe person – someone from your support network, Stop It
              Now! helpline.
              <br />
              Thought stopping – physical prompt to stop fantasy e.g. elastic
              band around your wrist.
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
            to the gym or cooking a meal.
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
              href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/managing-addiction-editable.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
          <br></br>
          <br></br>
          <p>
            If you want to discuss anything covered in this module, have
            struggled with working through the self-help material or just want
            the opportunity to work through the self-help site with a
            practitioner to guide you then please&nbsp;call the Stop It Now!
            Helpline&nbsp;for confidential support from our trained staff.
          </p>
          <br></br>
        </div>
        <br />
        <Link to="/self-help-sexual-communication-with-children-online">
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

export default AddictionModuleData;
