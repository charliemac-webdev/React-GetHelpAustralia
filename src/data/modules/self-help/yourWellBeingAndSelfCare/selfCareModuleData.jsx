import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import WellbeingAssessment from "../../../../components/WellbeingAssessment";

const SelfCareModuleData = [
  {
    id: 1,
    title: "What is self-care?",
    description: (
      <>
        <h4 className="secondary-color">What is self-care?</h4>
        <p>
          Self-care means being mindful of our own needs to improve our own
          physical, mental and emotional health. Self-care can take many
          different forms, ranging from making sure we get enough sleep to
          getting some fresh air for a few minutes. We’ll explain some of the
          different types of self-care and how they can help you.
        </p>
        <h4 className="secondary-color">Why is self-care important?</h4>
        <p>
          Self-care is particularly important when working through the
          information on this website. This work can be difficult, especially
          when feeling other strong emotions like anxiety or fear about the
          future. Making sure we find time for self-care can help us deal with
          the challenges we face in a positive way.
        </p>
        <br />
        <p>
          We also suggest doing this work in a way that feels emotionally and
          psychologically safe. This might mean involving a trusted family
          member, friend, or professional, so you don’t feel isolated and have
          someone to discuss the information with.
        </p>
        <br />
        <p>
          Regularly using strategies like breathing techniques, grounding,
          mindfulness, and self-compassion can help us to cope with difficult
          emotions, thoughts, and situations.
        </p>
        <br />
        <p>
          Self-care is important in helping you move away from risky and illegal
          behaviour. When people feel happy and content, they are far less
          likely to offend or re-offend. People often tell us that when they
          offended, their relationships with themselves and other people are
          strained. Focusing on self-care can help us to see ourselves in a more
          positive light and this can help to improve our relationships with
          others.
        </p>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Wellbeing assessment",
    description: (
      <>
        <p>
          Please complete the following wellbeing assessment that will ask about
          your physical, social, mental, spiritual and emotional self-care.
        </p>
        <WellbeingAssessment />
        <br />
        <h4 className="secondary-color">Understanding your self-care score</h4>
        <ul className="content-list">
          <li>
            <b>0-10:</b> your score suggests self-care hasn’t been important to
            you. A good starting point would be focusing on healthy eating,
            daily exercise (a 10-minute walk counts), and a healthy sleep
            routine.
          </li>
          <li>
            <b>11-30:</b> you’re engaging in some self-care behaviours but
            there’s room for improvement. Begin working on recognising the
            importance of self-care and try to factor it into your daily life.
          </li>
          <li>
            <b>31-40:</b> it sounds like you’re consciously incorporating
            self-care into your daily life. Perhaps there is one particular area
            that is low scoring where you could focus your attention.
          </li>
          <li>
            <b>41-50:</b> self-care must be important to you and an area that
            you consciously give attention to. Keep prioritising it. Read the
            strategies below to see if there’s anything you could add to what
            you are already doing.
          </li>
        </ul>
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Exercise 1: setting self-care goals",
    description: (
      <>
        <h4 className="secondary-color">Self-care goals</h4>
        <p>
          Some self-care strategies are straightforward and easy to use on a
          daily basis, and others need more practice and attention but are
          hugely worthwhile.
        </p>
        <br />
        <p>
          It might help you to complete a self-care plan. There isn’t a one size
          fits all for this and will need to be tailored to meet your own needs.
          Think about what is going on in your life and which areas would
          benefit from attention and self-care – the scores that you gave for
          each of the sections above will help you.
        </p>
        <br />
        <p>
          Use the table below to set some goals to improve your self-care. You
          don’t need to have goals in all sections, particularly if the section
          is already high-scoring.
        </p>
        <table className="table table-bordered">
          <tr>
            <td>Area of your life</td>
            <td>Goal</td>
          </tr>
          <tr>
            <td>Physical</td>
            <td>
              <ul className="content-list">
                <li>No internet an hour before bed</li>
                <li>Regular bedtime</li>
                <li>Walk ten minutes every day</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Social</td>
            <td>
              <ul className="content-list">
                <li>Call a friend once a week</li>
                <li>Join a club or do an activity to meet new people</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Mental</td>
            <td>
              <ul className="content-list">
                <li>Make a list of five things you like about yourself</li>
                <li>Take a relaxing bath</li>
                <li>
                  Say no to things you don’t want to do – boundaries are
                  important
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Spiritual</td>
            <td>
              <ul className="content-list">
                <li>Spend ten minutes meditating each day</li>
                <li>Listen to a guided relaxation before bed</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Emotional</td>
            <td>
              <ul className="content-list">
                <li>Talk about how you feel with a trusted person</li>
                <li>Keep a diary</li>
              </ul>
            </td>
          </tr>
        </table>
        <br />
      </>
    ),
  },
  {
    id: 4,
    title: "Self-care strategies",
    description: (
      <>
        <h4 className="secondary-color">Self-care strategies</h4>
        <p>
          There are many strategies that can be helpful when feeling anxious,
          stressed discomfort, or emotional distress. Below are some examples
          and how to do them. Some strategies will be more effective than others
          for each person, and it is about finding out which works for you.
        </p>
        <br />
        <p>Click the below to find out more</p>
        {/* <SelfCareStrategiesAccordion/> not created yet */}
        <br />
      </>
    ),
  },
  {
    id: 5,
    title: "Exercise 2: using self-care strategies",
    description: (
      <>
        <h4 className="secondary-color">Using self-care strategies</h4>
        <p>
          Having thought about, and hopefully practiced, some of the self-care
          techniques, think about what you can add to your self-care plan. Using
          the original template, consider what other techniques and resources
          will be helpful for you, and add these to the bottom two rows of your
          plan.
        </p>
        <table>
          <tr>
            <thead>Area of your life</thead>
            <thead>Goal</thead>
          </tr>
          <tr>
            <td>Physical</td>
            <td></td>
          </tr>
          <tr>
            <td>Social</td>
            <td></td>
          </tr>
          <tr>
            <td>Mental</td>
            <td></td>
          </tr>
          <tr>
            <td>Spiritual</td>
            <td></td>
          </tr>
          <tr>
            <td>Emotional</td>
            <td></td>
          </tr>
          <tr>
            <td>Self-care techniques that work for me</td>
            <td></td>
          </tr>
          <tr>
            <td>Useful resources</td>
            <td></td>
          </tr>
        </table>
      </>
    ),
  },
  {
    id: 6,
    title: "Reflection",
    description: (
      <>
        <h4 className="secondary-color">Reflection</h4>
        <p>Think about:</p>
        <br />
        <ul className="content-list">
          <li>
            how has your understanding of self-care improved since you began
            this module?
          </li>
          <li>
            has this module motivated you to find out more about self-care
            strategies?
          </li>
          <li>how committed are you to your self-care plan?</li>
        </ul>
        <br />
        <p>
          Self-care is an important element in your journey to understanding
          your risky online behaviour and moving away from it, towards a better
          future. Investing time in self-care will enable you to feel more
          resilient when undertaking the upcoming modules. We would encourage
          you to factor in self-care after each session of working through these
          self-help modules.
        </p>
        <br />
        <h5 className="secondary-color">Talk to us if you need support</h5>
        <p>
          The experienced advisors on our <b>confidential helpline</b> can
          support you if you want to discuss anything covered in this module,
          have struggled when working through it, or want to go through the
          information with a practitioner to guide you. You can stay anonymous
          and don’t have to give your real name, location, or any contact
          details. If you’re not ready to speak to anyone yet, you can also{" "}
          <b>use our live chat or send a secure email.</b>
        </p>
        <br />
        <Link to="/self-help-guilt-and-shame">
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
export default SelfCareModuleData;
