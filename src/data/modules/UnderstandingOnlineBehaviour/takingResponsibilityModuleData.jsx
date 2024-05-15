import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";

const takingResponsibilityModuleData = [
  {
    id: 1,
    title: "Taking Control",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Taking Control</h4>
        <p>
          Offending can often feel like it is out of your control or becomes
          very automatic over time; although it may not always feel like it, you
          do have agency and control over your own behaviour. When we take a
          closer look at the situations, feelings and thoughts (i.e., triggers)
          associated with behaviour, we can usually see that there are steps
          that can be taken to prevent behaviours.
        </p>
        <br></br>
        <h4 className="secondary-color">Stop and think...</h4>
        {/* There is no table in the UK version and their title is triggers not taking control */}
        {/* <p>
          Using the table below, write down how far in control you have felt of
          your behaviours. (1 = very little control; 2 = some control; 3 =
          strong control).
        </p>
        <p>
          Using the quiz below, select how in control you have felt of your
          behaviours.
        </p>
        <p>INSERT QUIZ</p>
        <Quiz /> */}
        <p>
          What do you notice about how your control has changed from when you
          first started looking at sexual images of children or engaging in
          sexual communication with children until now?
        </p>
        <p>How does feeling out of control affect your mood?</p>
        <p>How in control would you like to be in a year’s time?</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Justification",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Justification</h4>
        <p>
          When we encounter a situation in which our behaviour is inconsistent
          with our own or others’ beliefs and values, our minds tend to come up
          with false reasons for why our behaviour is okay. These reasons are
          called ‘justifications’, and they serve to make us feel more
          comfortable and give us permission to keep engaging in the behaviour
          even when it is harmful.
        </p>
        <p>Justifications can be a barrier to making positive changes.</p>
        <p>
          It is a way to deflect attention and responsibility. Here&nbsp;are
          some examples of statements that represent justification of
          behaviours. Have a think about what justifications you have have used.
        </p>
        <ul className="content-list">
          <li>“It was only once in a while.”</li>
          <li>“I needed to get my needs met somewhere.”</li>
          <li>“At least I’m not as bad as so-and-so.”</li>
          <li>“I’m dealing with a lot of stress and need to unwind.”</li>
        </ul>
        <p>
          If you identify with the statements in the list&nbsp;then
          justification could be helping you to keep doing a behaviour that you
          know is harmful. This, combined with feelings of a loss of control,
          can be risky for you.
        </p>
        <p>
          Once you have identified what justifications you are using, it is
          important to think about how you can challenge these. For example, if
          you are justifying the behaviour by saying "it was only once in a
          while", a potential challenge could be "even if its once in a while,
          it is still illegal and harmful". Once you begin to challenge these
          justifications that have less power.
        </p>
        <br></br>
      </>
    ),
  },
  {
    id: 3,
    title: "Changes",
    description: (
      <>
        <br></br>
        <p>
          In order to start feeling more in control of your behaviour there are
          a variety of small changes that you could make to help you along the
          way. There are some options below, think about trying a few and seeing
          what you find the most helpful.
        </p>
        <h4 className="secondary-color">Changes to your environment:</h4>
        <ul className="content-list">
          <li>
            moving your devices to a high traffic more public area of the home
            to make it less likely that you will access pornography;
          </li>
          <li>
            changing your employment if your current job brings you into contact
            with children;
          </li>
          <li>
            having a photo of your partner/children next to your device/s so you
            think of them and what you are risking by accessing sexual images of
            children or engaging in sexual chat.
          </li>
        </ul>
        <br />
        <h4 className="secondary-color">Changes to your electronic devices</h4>
        <ul className="content-list">
          <li>
            having security software installed on your device so that you cannot
            access problematic material (e.g., accountable2you, covenant eyes,
            Net nanny);
          </li>
          <li>
            having your screensaver as a picture of a place you want to visit or
            pictures of a loved one who is important in your motivation to not
            offend. You could also have a picture of prison bars as your screen
            saver or wallpaper (this can act as an incentive not to offend or a
            reminder of the consequences if you do);
          </li>
          <li>entrusting passwords to another person to limit access;</li>
          <li>
            set your passwords to be a reminder of something you would lose if
            you offend on-line;
          </li>
        </ul>
        <br />
        <h4 className="secondary-color">Changes when you go online</h4>
        <ul className="content-list">
          <li>
            only use devices when others are in the room or in public places
            where you would not access the material;
          </li>
          <li>
            only use your device for specific purposes such as internet banking,
            do not allow yourself to ‘browse’;
          </li>
          <li>
            unplug your wireless router at night so you have to make more effort
            to go on-line and therefore have more time to think about and stop
            what you are doing;
          </li>
          <li>get a mobile phone without internet access;</li>
        </ul>
        <br />
        <h4 className="secondary-color">Exercise: What can I do.</h4>
        <p>
          Make a list of three things you can do to immediately reduce your risk
          of illegal online sexual behaviour, e.g.:
        </p>
        <ol>
          <li>Move device/s</li>
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
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          Has this module raised any further questions for you or made you want
          to explore any ideas further? Think about what steps do you plan to
          take to seek out this information?{" "}
        </p>
        <br />
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.{" "}
        </p>
        <ReflectionQuestion>
          I now have a better understanding of one’s level of control over their
          current online sexual behaviours.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I can now recognise how denial is used to allow problematic behaviour
          to continue.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now have a better understanding of how to make immediate changes to
          start the change process.
        </ReflectionQuestion>
        <Link to="/online-world">
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
