import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";
import WellbeingAssessment from "../../../components/WellbeingAssessment";

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
        <p>
          We also suggest doing this work in a way that feels emotionally and
          psychologically safe. This might mean involving a trusted family
          member, friend, or professional, so you don’t feel isolated and have
          someone to discuss the information with.
        </p>
        <p>
          Regularly using strategies like breathing techniques, grounding,
          mindfulness, and self-compassion can help us to cope with difficult
          emotions, thoughts, and situations.
        </p>
        <p>
          Self-care is important in helping you move away from risky and illegal
          behaviour. When people feel happy and content, they are far less
          likely to offend or re-offend. People often tell us that when they
          offended, their relationships with themselves and other people are
          strained. Focusing on self-care can help us to see ourselves in a more
          positive light and this can help to improve our relationships with
          others.
        </p>
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
        <br />
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
        <p>
          It might help you to complete a self-care plan. There isn’t a one size
          fits all for this and will need to be tailored to meet your own needs.
          Think about what is going on in your life and which areas would
          benefit from attention and self-care – the scores that you gave for
          each of the sections above will help you.
        </p>
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
        <br />
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <p>
                <h6 className="secondary-color">Breathing Techniques</h6>
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4 className="secondary-color">Breathing techniques</h4>
                <p>
                  Regulating our breathing helps us to re-centre ourselves in
                  the moment and to regain control of our bodies when we feel
                  that we are overwhelmed. It can help to bring our heart rate
                  back to a normal rate and reduce physiological signs and
                  symptoms of anxiety. Breathing exercises can bring the most
                  benefit when they are repeated often, such as daily. ETC ETC
                </p>
                <h5 className="secondary-color">
                  Breathing technique 1: Slowing your breathing
                </h5>
                <p>
                  We can do this exercise sitting or standing with both feet
                  flat on the ground, roughly hip-width apart. If sitting, arms
                  should be placed on the chair arms. The breath should flow as
                  deep down into the belly as is comfortable, without forcing
                  it.
                </p>
                <ul className="content-list">
                  <li>
                    Breathe in through your nose and out through your mouth.
                  </li>
                  <li>
                    Breathe in gently and regularly. Some people find it helpful
                    to count steadily from 1 to 5. You may not be able to reach
                    5 at first.
                  </li>
                  <li>
                    Then, without pausing or holding your breath, let it flow
                    out gently, counting from 1 to 5 again if you find this
                    helpful.
                  </li>
                  <li>Keep doing this for 3 to 5 minutes.</li>
                </ul>
                <h5 className="secondary-color">
                  Breathing technique 2: belly breathing
                </h5>
                <p>
                  Belly breathing is easy to do and very relaxing. This basic
                  exercise can be used at any time to relax or relieve stress.
                </p>
                <ul className="content-list">
                  <li>Sit or lie flat in a comfortable position.</li>
                  <li>
                    Put one hand on your belly just below your ribs and the
                    other hand on your chest.
                  </li>
                  <li>
                    Take a deep breath in through your nose, and let your belly
                    push your hand out. Your chest should not move.
                  </li>
                  <li>
                    Breathe out through pursed lips as if you were whistling.
                    Feel the hand on your belly go in, and use it to push all
                    the air out.
                  </li>
                  <li>
                    Do this breathing 3 to 10 times. Take your time with each
                    breath.
                  </li>
                  <li>Notice how you feel at the end of the exercise.</li>
                </ul>
                <h5 className="secondary-color">
                  Breathing technique 3: roll breathing
                </h5>
                <p>
                  <a href="https://www.uofmhealth.org/health-library/zm6264#zm6264-sec">
                    Roll breathing
                  </a>{" "}
                  helps to develop the full use of the lungs and to focus on the
                  rhythm of breathing. This technique can be done in any
                  position. However, whilst learning, it is best to lie on your
                  back with your knees bent.
                </p>
                <ul className="content-list">
                  <li>
                    Put your left hand on your belly and your right hand on your
                    chest. Notice how your hands move as you breathe in and out.
                  </li>
                  <li>
                    Practice filling your lower lungs by breathing so that your
                    "belly" (left) hand goes up when you inhale and your "chest"
                    (right) hand remains still. Always breathe in through your
                    nose and breathe out through your mouth. Repeat 8 to 10
                    times.
                  </li>
                  <li>
                    When you have filled and emptied your lower lungs 8 to 10
                    times, add this second step to your breathing: inhale first
                    into your lower lungs as before, and then continue inhaling
                    into your upper chest. Breathe slowly and regularly. As you
                    do so, your right hand will rise and your left hand will
                    fall a little as your belly falls.
                  </li>
                  <li>
                    As you exhale slowly through your mouth, make a quiet,
                    whooshing sound as first your left hand and then your
                    right-hand fall. As you exhale, feel the tension leaving
                    your body as you become more and more relaxed.
                  </li>
                  <li>
                    Practice breathing in and out in this way for 3 to 5
                    minutes. Notice that the movement of your belly and chest
                    rises and falls like the motion of rolling waves.
                  </li>
                  <li>Notice how you feel at the end of the exercise.</li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <p>
                <h6 className="secondary-color">Grounding Exercises</h6>
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <h4 className="secondary-color">Grounding exercises</h4>
              <p>
                Grounding exercises are techniques to bring ourselves back to
                the present moment, balancing ourselves emotionally. These
                techniques can be particularly helpful when feeling worried and
                anxious about the past or what could happen in the future. They
                can help to redirect our thoughts away from traumatic memories,
                flashbacks, and distressing feelings and bring us back to the
                here and now. There are many different types of grounding
                techniques. They aren’t always easy and it can take practice
                before they begin to work well for you, so don’t give up if they
                don’t seem to help immediately. It is important to use the
                techniques as early as you can when you begin to experience
                distress – although they are a useful technique to practice
                generally, whether feeling distressed or not. ETC ETC
              </p>
              <h5 className="secondary-color">
                Grounding exercise 1: 5-4-3-2-1 method
              </h5>
              <p>
                Acknowledge five things you can see around you; four things you
                can touch around you; three things you can hear around you; two
                things you can smell and one thing you can taste.
              </p>
              <p>
                The aim of this technique is to focus on the world around you so
                that you are less focused on what is making you feel anxious,
                worried, or distressed.
              </p>
              <h5 className="secondary-color">
                Grounding exercise 2: categories
              </h5>
              <p>
                Choose one or two broad categories such as cities, dog breeds,
                or ice cream flavours, and list as many as you can within that
                category. Alternatively, try reciting the alphabet backwards or
                practicing times tables.
              </p>
              <p>
                Again, the purpose of these exercises is to focus your attention
                on something other than whatever is making you feel ungrounded.
              </p>
              <h5 className="secondary-color">
                Grounding exercise 3: body scanning
              </h5>
              <p>
                In a sitting or standing position, focus on each part of your
                body and how it feels. Try not to assign judgement to this
                process – for example, if you notice that your chest feels
                tight, do not begin to reflect on why that might be. Instead,
                identify how each body part feels and then move on to the next.
                Close your eyes if that helps you to focus on the exercise.
              </p>
              <p>
                Begin by taking some deep breaths and then bring your awareness
                to where your body makes contact with the floor or chair. Begin
                by scanning your left foot for any sensations, moving up your
                calf and thigh. Then move to the right leg and follow the same
                order. It is ok if you don’t feel anything, just observe that
                and move on. Then focus on your stomach, feeling it rise and
                fall with your breath. Next focus on your left hand and arm.
                Bring curiosity to your scanning, continuing to notice any
                sensations. Continue with your right hand and work up the arm.
                Move to your chest, scanning upwards to your neck, face, jaw,
                and throat. Pay attention to any sensations in your head, ears,
                and the back of your neck. Finally, think of your body as a
                whole, noticing how they all connect. Stay alert to any
                sensations that you experience and notice them without
                judgement.
              </p>
              <p>
                It is likely that your mind will wander during this exercise.
                This is expected. Simply remind yourself to refocus and return
                to concentrating on the breath and the body scan.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                backgroundColor: "#e6edf5",
              }}
            >
              <p>
                <h6 className="secondary-color">Mindfulness</h6>
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <h4 className="secondary-color">Mindfulness</h4>
              <p>
                Mindfulness can be a fantastic way of making sure that we are
                aware of where we are, what we’re doing, and how to be present
                in the moment. It can be useful in situations where we feel
                overwhelmed and disoriented by things like work or personal
                lives, but also when we need to give ourselves some self-care to
                maintain our emotional wellbeing. Some people find it helpful
                for mindfulness exercises to be built into their everyday
                routine, even if only for a few minutes.
              </p>
              <h5 className="secondary-color">How to practice mindfullness</h5>
              <ul className="content-list">
                <li>
                  Use a mindfulness app or video – search online for
                  “mindfulness” or “guided meditation”.
                </li>
                <li>
                  Breathing exercises focus your attention on your breathing,
                  its rhythm, and how each inhale and exhale of breath feels and
                  makes your body respond.
                </li>
                <li>
                  Meditation, sitting quietly and away from distractions,
                  focusing on your thoughts, sensations you are experiencing,
                  the sounds around you, and your environment. If your mind
                  starts to move on to other things, bring it back to the task
                  at hand.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
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
        <br></br>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Area of your life</th>
              <th>Goal</th>
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
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 6,
    title: "The importance of sleep",
    description: (
      <>
        <div>
          <br></br>
          <h4 className="secondary-color">The importance of sleep</h4>
          <p>
            Most people say that good quality sleep is important to their
            general sense of well-being.
          </p>
          <p>
            Many people who have problems related to fantasies about children,
            sexual preoccupation and problematic pornography use say that these
            difficulties can be especially tough at night, often disrupting
            their sleep.
          </p>
          <p>
            Problematic sexual fantasies may be more readily triggered in the
            bedroom, last thing at night, if this has become your routine.
          </p>
          <br></br>
          <h4 className="secondary-color">Tips to help you sleep</h4>
          <p>
            Following routines and practices can help good quality sleep. This
            is sometimes called{" "}
            <a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/">
              ‘sleep hygiene’
            </a>
            .
          </p>
          <p>Here are some things to try:</p>
          <ul className="content-list">
            <li>
              Stick to a&nbsp;regular pattern by aiming to wake up and go to bed
              at the same times every day of the week. Some people choose to
              stay up and wake much later during the weekends, which tends to
              disrupt the sleep pattern into the following week.
            </li>
            <li>
              Avoid daytime napping.&nbsp;If you do nap, it is best to avoid
              napping for longer than 30 minutes.
            </li>
            <li>
              Avoid alcohol, cigarettes, caffeine and food consumption too close
              to bedtime. Tea, coffee, colas drinks and chocolate with caffeine
              can disrupt sleep if consumed in the evening.
            </li>
            <li>Regular exercise&nbsp;can help you sleep well.</li>
            <li>
              Daily exposure to natural light helps to maintain a healthy
              sleep-wake cycle.
            </li>
            <li>
              Use your bed for sleep, rather than as a place to read, watch TV,
              listen to the radio, or use your phone, laptop or tablet. That
              way, the bed becomes associated with sleep rather than with these
              other activities.
            </li>
            <li>
              Think about whether your bedroom might be making it harder for you
              to sleep, for example, temperature, uncomfortable bed, inadequate
              curtains or blinds.
            </li>
            <li>
              Try to&nbsp;avoid mentally engaging in activities close to
              bedtime.&nbsp;It can take some time for the mind to switch off and
              if you are feeling alert you are less likely to fall asleep.
            </li>
          </ul>
          <p>
            It might take some time before the positive changes you make to your
            sleep routines take effect. If you regularly find you are having
            problems with your sleep-wake cycles or are feeling sleepy during
            the daytime, you should take advice from your GP.
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 7,
    title: "Reflection",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
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
        <p>
          Self-care is an important element in your journey to understanding
          your risky online behaviour and moving away from it, towards a better
          future. Investing time in self-care will enable you to feel more
          resilient when undertaking the upcoming modules. We would encourage
          you to factor in self-care after each session of working through these
          self-help modules.
        </p>
        <br />
        <ReflectionQuestion>
          This module has helped me explore and understand the importance and
          self-care.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I am committed to my own self-care plan and goals.
        </ReflectionQuestion>
        <Link className="text-decoration-none" to="/guilt-and-shame">
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
