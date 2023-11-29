import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

const takingResponsibilityModuleData = [
  {
    id: 1,
    title: "Triggers",
    description: (
      <>
        <p>
          <strong>
            Anxiety is often a response to feeling out of control.
          </strong>
          &nbsp;When we feel we have lost control, we often attempt to regain
          it. When we fail, we feel a deep loss and our anxiety starts to build.
          This feeling can be overwhelming. It causes us to feel uneasy,
          discontented, and lost because we are always looking for something
          else to make us feel better. We often turn to short term fixes such as
          alcohol, drugs, gambling or sex to feel better. Sometimes these
          behaviours then start to feel they are out of our control.
        </p>
        <hr />
        <h4 className="secondary-color">Starting point</h4>
        <p>
          Using the table below, write down how far in control you have felt of
          your behaviours. (1 = very little control; 2 = some control; 3 =
          strong control).
        </p>
        <p>
          Using the quiz below, select how in control you have felt of your
          behaviours.
        </p>
        {/* <Quiz /> */}
        <br />
        <p>
          What do you notice about how your control has changed from when you
          first started looking at sexual images of children or engaging in
          sexual chat until now?
        </p>
        <p>How does feeling out of control affect your mood?</p>
        <p>How in control would you like to be in a year’s time?</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Denial",
    description: (
      <>
        <h4 className="secondary-color">Denial</h4>
        <p>
          Denial is probably best explained in the book&nbsp;Cybersex Unhooked.
        </p>
        <p>
          Denial is the confused kind of thinking and reasoning used to avoid
          the reality of behaviour or the consequences of behaviour.
        </p>
        <p>
          Denial is a way to manage and explain the chaos in your life and an
          effort to protect the online behaviour you believe you can’t live
          without.
        </p>
        <p>
          It is a way to deflect attention and responsibility. Here&nbsp;are
          some examples of excuses that represent denial. As you read through
          the list, make a note of&nbsp;any that sound familiar to you.
          (Delmonico, D.L., Griffin, E., 2001)
        </p>
        <ul className="content-list">
          <li>“It was only once in a while.”</li>
          <li>“I needed to get my needs met somewhere.”</li>
          <li>“We are all adults.”</li>
          <li>
            “I am just being a man and I have a high sex drive and men are more
            sexual than women.”
          </li>
          <li>“At least I’m not as bad as so-and-so.”</li>
          <li>“My situation is different from everybody else’s.”</li>
          <li>“Just this one last time and then stop.”</li>
          <li>“Just this second time more and then stop.”</li>
          <li>“Well, I’ve already started so what the hell.”</li>
          <li>“I’m just looking and not saving anything to my hard drive.”</li>
          <li>“I’m pretty sure it’s all legal so it’s ok.”</li>
          <li>
            “A reward for lasting a certain period without accessing porn, so
            this time is ok.”
          </li>
          <li>“I need to wean myself off rather than quit cold turkey.”</li>
          <li>“I’m dealing with a lot of stress and need to unwind.”</li>
          <li>“What she doesn’t know won’t hurt her.”</li>
          <li>
            “My wife (husband or partner) isn’t responsive to my sexual needs.”
          </li>
          <li>“I deserve this.”</li>
          <li>“It doesn’t hurt anyone because…”</li>
          <li>“It’s just my way of relaxing.”</li>
          <li>“It isn’t real because it is on the computer.”</li>
          <li>“I only do this in private so it isn’t affecting anybody.”</li>
          <li>“I can stop any time I want.”</li>
        </ul>
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/denial-checklisteditable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download printable checklist &gt;
          </a>
        </p>
        <p>
          If you identify with the statements in the list&nbsp;then denial could
          be helping you to keep doing a behaviour that you know is harmful.
          This, combined with feelings of a loss of control, can be risky for
          you.
        </p>
        <p>
          You can take some simple steps to reduce your potential for engaging
          in risky behaviour.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Changes",
    description: (
      <>
        <p>
          Here are some suggestions which can help increase your feelings of
          control:
        </p>
        <h4 className="secondary-color">Changes to your environment:</h4>
        <ul className="content-list">
          <li>
            moving your computer to a high traffic more public area of the home
            to make it less likely that you will access pornography;
          </li>
          <li>
            changing your employment if your current job brings you into contact
            with children;
          </li>
          <li>
            having a photo of your partner/children next to your computer so you
            think of them and what you are risking by accessing sexual images of
            children or engaging in sexual chat.
          </li>
        </ul>
        <br />
        <h4 className="secondary-color">Changes to your computer</h4>
        <ul className="content-list">
          <li>
            having security software installed on your laptop so that you cannot
            access pornography;
          </li>
          <li>
            having a picture of a place you want to visit or prison bars as your
            screen saver or wallpaper (this can act as an incentive not to
            offend or a reminder of the consequences if you do);
          </li>
          <li>entrusting PC password to another person to limit access;</li>
          <li>
            set your password to be a reminder of something you would lose if
            you offend on-line;
          </li>
        </ul>
        <br />
        <h4 className="secondary-color">Changes when you go online</h4>
        <ul className="content-list">
          <li>
            only use computer when others are in the room or in public places
            where you would not access the material;
          </li>
          <li>
            only use the computer for specific purposes such as internet
            banking, do not allow yourself to ‘browse’;
          </li>
          <li>
            unplug your wireless router at night so you have to make more effort
            to go on-line and therefore have more time to think about and stop
            what you are doing;
          </li>
          <li>get a mobile phone without internet access;</li>
        </ul>
        <br />
        <h4 className="secondary-color">Exercise 1: What can I do.</h4>
        <p>
          Make a list of three things you can do to immediately reduce your risk
          of illegal online sexual behaviour, e.g.:
        </p>
        <ol>
          <li>Move computer</li>
          <li>Install security software</li>
          <li>Switch wifi off after 8pm</li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "Reflection",
    description: (
      <>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          As with the Introduction to this module, using the table below, write
          down your current level of knowledge and understanding about your
          online behaviour. (1 = very little control; 2 = some control; 3 =
          strong control).
        </p>
        <table className="table-with-borders">
          <tbody>
            <tr>
              <td>My time spent online now</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>My time spent using adult pornography now</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>My time spent on accessing indecent images now</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                My time spent online sexually communicating with others
                (including children) now
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                My time spent online sexually communicating with others
                (including children) now?
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <p>Now, consider the following questions:</p>
        <ul className="content-list">
          <li>
            Have any of your responses changed from 1 to 2 or 2 to 3 since the
            start of this module?
          </li>
          <li>What have been the most positive changes you have made? Why?</li>
          <li>
            Has this module raised any further questions for you or made you
            want to explore any ideas further? What steps do you plan to take to
            seek out this information?
          </li>
        </ul>
        <p>
          If you want to discuss anything covered in this module, have struggled
          with working through the self-help material or just want the
          opportunity to work through the self-help site with a practitioner to
          guide you then please&nbsp;call the Stop It
          Now!&nbsp;Helpline&nbsp;for confidential support from our trained
          staff.
        </p>
        <br />
        <Link to="/self-help-online-world">
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
export default takingResponsibilityModuleData;
