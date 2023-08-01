import image from "../images/stages-of-change.jpg";

const WCIntro = () => {
  return (
    <>
      <p>
        Well done! By using this self-help guide you have taken a brave step
        forwards. You might be concerned about your online sexual behaviour and
        want to take positive steps to deal with it. You have the power to stop
        yourself from offending online and this guide will provide you with
        information and tools to help you achieve this goal.
      </p>
      <p>
        Before starting, you can watch the video below, which tells the story of
        a man who was arrested for viewing sexual images of children online. He
        talks about how calling our confidential Stop It Now! helpline to get
        advice helped him to start his journey to stop looking at sexual images
        of children online.
      </p>{" "}
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/7k93HKIeJKw"
        title="Interview with man arrested for downloading indecent images of children - Summary"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        Of course making changes in life is never easy. For example, smokers
        rarely stop smoking at the first attempt, just as people who are
        concerned about their weight usually try several different diets. But
        people do successfully change their behaviour all the time. We think
        there are three initial steps that help people to change their
        problematic online behaviour.
      </p>
      <p>
        <b>Step 1</b> Recognise and accept you have a problem.
      </p>
      <p>
        <b>Step 2</b> Recognise that viewing inappropriate material online is
        harmful both to your own life and the and the lives of others.
      </p>
      <p>
        <b>Step 3</b> Develop a plan for change
      </p>
      <p>
        This website aims to help you work through these steps and build a
        healthier, happier life.
      </p>
      <p>
        In the first step you need to be as honest as you can, if you can
        identify the areas that apply to you and your sexual behaviour; then you
        can start to address problem areas.
      </p>
      <p>
        It is important to be aware that working on these problems can become
        difficult and distressing, as personal growth and change often can be.
      </p>
      <p>
        Most of us recognize that change doesn’t suddenly happen, but it is
        gradual and a person’s motivation changes. A popular framework for
        discussing motivation to change is the Stages of Change Model developed
        by James Prochaska, Ph.D. and Carlo DiClimente, Ph.D.
      </p>
      <p>
        In Changing for Good (1994), Prochaska and DiClemente describe the six
        stages of change:
      </p>
      <a
        href="https://www.smartrecovery.org/smart-articles-draft/understanding-the-stages-of-change/?highlight=understanding%20stages%20of%20change"
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt="states of change" />
      </a>
      <p>Identify where you are in the cycle by giving examples in the box.</p>
      <table className="table-with-borders">
        <tbody>
          <tr>
            <th>Stage of Change</th>
            <th>Characteristics</th>
            <th>Examples</th>
            <th>My examples</th>
          </tr>
          <tr>
            <td>Pre-contemplation</td>
            <td>
              Not currently considering<p></p>
              <p>change: “Ignorance is</p>
              <p>bliss”</p>
            </td>
            <td>
              Justify the behaviour
              <br />
              “it’s not as bad as…”
              <br />
              “I’m not hurting anyone”.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Contemplation</td>
            <td>
              Ambivalent about change:<p></p>
              <p>“Sitting on the fence”</p>
              <p>Not considering change&nbsp;within the next month</p>
            </td>
            <td>Thinking of pros and cons of behaviour</td>
            <td></td>
          </tr>
          <tr>
            <td>Preparation</td>
            <td>
              Some experience with<p></p>
              <p>change and are trying to</p>
              <p>change: “Testing the</p>
              <p>waters”</p>
            </td>
            <td>
              Researching change on-line, finding out where support groups are.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Action</td>
            <td>
              Practising new behaviour<p></p>
              <p>for&nbsp;3-6 months</p>
            </td>
            <td>
              No longer doing harmful behaviour, working through self-help
              material, attending support groups
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Maintenance</td>
            <td>
              Continued commitment to&nbsp;sustaining new behaviour<p></p>
              <p>Post-6 months to 5 years</p>
            </td>
            <td>
              Plan for follow-up support<p></p>
              <p>Discuss coping with relapse</p>
              <p>Having alternative activities that meet needs</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Lapse/Relapse</td>
            <td>
              Resumption of old behaviours: “Fall from<p></p>
              <p>grace”</p>
            </td>
            <td>
              Evaluate trigger for relapse<p></p>
              <p>Reassess motivation and&nbsp;barriers</p>
              <p>Plan stronger coping strategies</p>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
};
export default WCIntro;
