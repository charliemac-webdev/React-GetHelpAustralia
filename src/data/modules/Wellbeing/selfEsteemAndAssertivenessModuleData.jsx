import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";

const SelfEsteemAndAssertivenessModuleData = [
  {
    id: 1,
    title: "Self Esteem",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Self-Esteem</h4>
          <p>
            Self-esteem is how we value ourselves; it is how we perceive our
            value to the world and how valuable we think we are to other people.
          </p>
          <p>
            Self-esteem affects our trust in others, our relationships, our work
            – nearly every part of our lives. If you have low self-esteem, your
            beliefs about yourself will often be unpleasant. You are likely to
            focus on your weaknesses and on mistakes that you have made, and may
            find it hard to recognise the pleasant parts of your personality.
          </p>
          <p>
            Pleasant thinking and behaviour can contribute to higher levels of
            self-esteem.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 1: What can I do to build my self-esteem?
          </h4>
          <p>
            To increase your self-esteem, you need to challenge and change the
            unhelpful beliefs you have about yourself. This might feel like a
            difficult task, but there are a lot of different techniques you can
            try to help you.&nbsp;Below are some of the things that might help
            and some questions to get you started:
          </p>
          <p>
            <strong>1. Do something you enjoy</strong>
            <br />
            Doing something that you enjoy and are good at, can help build your
            confidence and increase your self-esteem. This could be anything
            from paid work, volunteering, or a hobby.
          </p>
          <p>
            <em>Identify three things you currently do that you enjoy.</em>
          </p>
          <p>
            <em>Now think of three things you would like to do.</em>
          </p>
          <p>
            <strong>2. Build pleasant relationships</strong>
            <br />
            Try to associate with people who will not put you down and whom you
            feel able to talk to about your feelings. If you spend time around
            positive and supportive people, you are more likely to have a better
            self-image and feel more confident.
          </p>
          <p>
            <em>Name three positive people in your life.&nbsp;</em>
          </p>
          <p>
            If you have low self-esteem, there might be people close to you who
            encourage the unhelpful beliefs and opinions that you have about
            yourself. It is important to identify these people and take action
            to stop them from doing this, perhaps by becoming more assertive or
            by limiting how much time you spend with them.
          </p>
          <p>
            <em>
              Identify anyone who may have an unhelpful influence in your life.
            </em>
          </p>
          <p>
            <em>
              List three things you can do to reduce the effect they have on
              you.
            </em>
          </p>
          <p>
            <strong>3. Set yourself a challenge</strong>
            <br />
            If you set yourself goals and work towards achieving them, you will
            feel satisfied and proud of yourself when you achieve your goal, and
            feel more pleasant about yourself as a consequence.
          </p>
          <p>
            However, it is important to make sure the challenge you set yourself
            is one that you can realistically achieve. It doesn’t have to be
            anything particularly large but should have meaning for you. For
            example, you might decide to start going to a regular exercise class
            or give up smoking.
          </p>
          <p>
            <em>Think of three challenges:</em>
          </p>
          <ol>
            <li>
              <em>In the next week</em>
            </li>
            <li>
              <em>In the next month&nbsp;</em>
            </li>
            <li>
              <em>In the next 3 months</em>
            </li>
          </ol>
        </div>
      ),
    },
  },
  {
    id: 2,
    title: "Feeling happy and healthy",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Feeling happy and healthy</h4>
          <p>
            It is also important to feel happy and healthy. The following will
            help you achieve this:
          </p>
          <p>
            <strong>Look after your physical health</strong>
            <br />
            This can help you feel better and healthier about yourself, and
            improve your self-image.
          </p>
          <p>
            <strong>Physical activity</strong>
            <br />
            This helps improve people’s sense of wellbeing and image of
            themselves. Exercise releases endorphins – ‘feel-good’ hormones that
            can help improve your mood, particularly if you do it outside.
          </p>
          <p>
            <strong>Sleep</strong>
            <br />
            Lack of sleep can cause unpleasant feelings to be exaggerated and
            means you can feel less confident, so it’s important to make sure
            you get enough sleep.
          </p>
          <p>
            <strong>Diet</strong>
            <br />
            Eating a well-balanced diet at regular meal-times with plenty of
            water and vegetables will help you to feel healthier and happier.
            Stopping or reducing your alcohol intake, and avoiding tobacco and
            recreational drugs can also help improve your general wellbeing.
          </p>
          <hr />
          <br></br>
          <p>
            As we have identified earlier how you think is very important in how
            you see yourself.
          </p>
          <p>
            <strong>Learn to identify and challenge unhelpful beliefs</strong>
            <br />
            If you are going to improve your self-esteem, it will help to
            understand more about your unhelpful beliefs about yourself and
            where they came from. You can find more about{" "}
            <Link to="/self-talk">
              <b>self-talk</b>
            </Link>{" "}
            here.
          </p>

          <p>
            <strong>Focus on positive things</strong>
            <br />
            If you have low self-esteem, it can take practice to get used to
            thinking more positively about yourself.
          </p>
          <br></br>
          <h4 className="secondary-color">Exercise 2: How I see myself</h4>

          <p>
            {" "}
            One way you can do this is by making a list of things that you like
            about yourself.
          </p>
          <p>You might include:</p>
          <ul className="content-list">
            <li>things about your personality</li>
            <li>things about the way that you look</li>
            <li>things that you do</li>
            <li>things you are good at- your skills.</li>
          </ul>
          <p>
            Keep this list and look at a different part of it every day. If you
            are feeling anxious or worried about an event, such as a job
            interview, you can use it to remind yourself of the good things
            about yourself.
          </p>
          <p>
            If you struggle to come up with a list of good things, you could ask
            your partner or a trusted friend to help you begin. This may also
            help you to see how others may have a higher opinion of you than you
            do.
          </p>
          <p>
            Another technique is to write down at least three things that went
            well or that you have achieved that day before you go to sleep. Some
            people also find it helpful to keep objects that make them feel good
            about themselves e.g. cards and letters which they can keep in a
            ‘feel good box.’
          </p>
          <p>
            <strong>Try mindfulness techniques</strong>
            <br />
            Mindfulness is a way of paying attention to the present moment,
            using techniques like meditation, breathing and yoga. It has been
            shown to help people become more aware of their thoughts and
            feelings, so that instead of being overwhelmed by them, it is easier
            to manage them.
          </p>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 3,
    title: "Learn to be assertive",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Self Esteem and Assertiveness</h4>
          <p>
            People with low self-esteem often struggle to be assertive; this can
            be because they don’t feel they deserve to be listened to. However,
            learning to be assertive and being able to share your views with
            others in a healthy way can help improve your self-esteem. Once you
            can see other people value your views then you can see it yourself.
          </p>
          <br></br>
          <h4 className="secondary-color">Learn to be assertive</h4>
          <p>
            Being assertive means being able to communicate with others in a
            direct and honest manner without hurting anyone’s feelings or
            becoming upset yourself.
          </p>
          <p>
            Assertive individuals are able to get their point of view across in
            a calm and positive way, without being either aggressive or passive.
            Someone who is assertive states their needs and opinions clearly, so
            that people take notice. Being assertive is a skill which can be
            developed. It requires patience and practice and can result in
            positive communication, better decision making, self-confidence and
            less of the unpleasant feelings which contribute to anger, worry and
            anxiety.
          </p>
          <p>
            To be assertive you need to speak up for yourself in a way that does
            not upset the other person. It can involve saying no, which can be
            difficult, especially if it is a family member or friend who is
            asking us to do something.
          </p>
          <p>Here is a list of things that might help:</p>
          <ul className="content-list">
            <li>
              Use the skill of self-talk to help you with being assertive, i.e.,
              identify your thoughts that are stopping you from speaking up for
              yourself and challenge them with more assertive thoughts (you can
              practice this skill more in our{" "}
              <Link to="/self-talk">
                <b>self-talk</b>
              </Link>{" "}
              section).
            </li>
            <li>
              It is important to wait until you feel calm, so you can explain
              clearly how you feel.
            </li>
            <li>
              It might help to think about what you want to say before you enter
              the conversation – have some key points ready and remember to
              express your feelings.
            </li>
            <li>
              It is important to state how you feel using ‘I’ statements, as no
              one can disagree with how you feel and it doesn’t sound like you
              are blaming the other person. For example if you said to someone
              ‘you make me feel lonely’ versus ‘I feel lonely’.
              <br />
              Ask the person if you can talk to them on their own. To create a
              more personal space, it’s helpful not to include other people.
            </li>
            <li>
              Remember that you want to maintain the relationship and that most
              people do not intend to deliberately hurt your feelings.
            </li>
            <li>
              Pay attention to your body language as well as to the words you
              say – try to be open and confident.
            </li>
            <li>
              Keep your voice calm and low, look the other person in the eye,
              stand up straight, and respect their personal space.
            </li>
            <li>Stick to the point</li>
            <li>
              Give the other person the benefit of the doubt.&nbsp; They may not
              even realise they have upset you or done anything wrong, so what
              you say may come as a surprise
            </li>
            <li>
              Allow people a chance to respond - sometimes people need a chance
              to reflect on things before they can understand your point.
            </li>
            <li>
              Tell people if you need more time or support with tasks that you
              find challenging.
            </li>
            <li>Say ‘no’ to unreasonable requests.</li>
          </ul>
          <p>An example:</p>
          <p>
            <b>DESCRIBE THE SITUATION</b> - “when we don’t spend time together”.
            This first step involves describing the situation or the behaviour
            that is troubling you. It is helpful to stick to the facts here -
            who did or said what, when and where it happened.
          </p>
          <p>
            <b>EXPRESS YOUR FEELINGS</b> – “I feel lonely”. This means
            expressing our feelings and thoughts about the situation or
            behaviour using ‘I’ statements.
          </p>
          <p>
            <b>SAY WHAT YOU WANT</b> – “I would like us to have at least one
            evening a week together”. Here you should describe how you would
            like the situation to be or what you would like from the other
            person.
          </p>
          <p>
            <b>STATE THE OUTCOME</b> – “that way we can have quality time
            together”. Say what the outcome would be. In this step, it is
            helpful to state the positives for you and them if they were to do
            your request and the negatives for you and them if things stay as
            they are.
          </p>
        </div>
      ),
    },
  },
  {
    id: 4,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>
            Look at the list below. Congratulate yourself for&nbsp;all of the
            things that you have done in the last week. For the ones you haven’t
            tried yet think about how they may help you and how you can include
            them in your day to day life.
          </p>
          <ul className="content-list">
            <li>Do activities that you enjoy.</li>
            <li>Spend time with positive, supportive people.</li>
            <li>Set yourself an achieveable challenge.</li>
            <li>Be helpful and considerate to others.</li>
            <li>Try not to compare yourself to other people.</li>
            <li>
              Try to do regular exercise, eat healthily and get enough sleep.
            </li>
            <li>
              Be assertive in a healthy way – it's important to be heard and
              treated with respect.
            </li>
            <li>
              Use self-help books and websites to develop helpful skills, like
              assertiveness or mindfulness.
            </li>
            <li>Learn to challenge your unhelpful beliefs.</li>
            <li>Acknowledge your good qualities and things you are good at.</li>
            <li>
              Get into the habit of thinking and saying positive things about
              yourself.
            </li>
          </ul>
          <p>
            Self-praise is an important part of improving your self-esteem,
            while it may feel uncomfortable at first, it gets easier and really
            helps to build towards a better more positive future. Don’t forget
            to give yourself praise every time you achieve one of the above.
          </p>
          <p>
            It can be difficult for people to express their feelings
            assertively. It is important to state how you feel using ‘I’
            statements, as no one can disagree with how you feel and it doesn’t
            sound like you are blaming the other person. For example if you said
            to someone ‘you make me feel lonely’ versus ‘I feel lonely’. It can
            be helpful to have a structure to how you share difficult feelings.
          </p>
          <p>
            Here is an example:
            <br />
            <strong>DESCRIBE THE SITUATION</strong> – “when we don’t spend time
            together”
            <br />
            <strong>EXPRESS YOUR FEELINGS</strong> – “I feel lonely”
            <br />
            <strong>SPECIFY WHAT YOU WANT TO HAPPEN</strong> – “I would like us
            to have at least one evening a week together”
            <br />
            <strong>STATE THE OUTCOME</strong> – “that way we can have quality
            time together”
          </p>
          <br />
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="understanding_of_self_esteem"
            value={responses.understanding_of_self_esteem}
            onChange={onQuestionChange}
          >
            I now have a better understanding of self-esteem and how to increase
            it.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="importance_of_being_healthy"
            value={responses.importance_of_being_healthy}
            onChange={onQuestionChange}
          >
            I now have a better understanding of the importance of being
            healthy.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="ways_to_be_more_assertive"
            value={responses.ways_to_be_more_assertive}
            onChange={onQuestionChange}
          >
            I now know some helpful ways to be more assertive.
          </ReflectionQuestion>
        </div>
      ),
    },
  },
];

export default SelfEsteemAndAssertivenessModuleData;
