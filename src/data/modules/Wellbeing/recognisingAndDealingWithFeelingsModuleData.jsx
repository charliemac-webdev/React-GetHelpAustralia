import pictureTwo from "@/images/diagrams-MAN.gif";
import pictureThree from "@/images/diagrams-feelings.gif";
import pictureOne from "@/images/diagrams-response.gif";

import documentTwo from "@/documents/Recognising and Dealing with Feelings_Exercise_How to get back to feeling ok and in control.pdf";
import documentOne from "@/documents/Recognising and Dealing with Feelings_How in-turn with your feelings are you.pdf";

import { Link } from "react-router-dom";
import Button from "@/components/Button";
import EmotionsQuiz from "@/components/EmotionsQuiz";
import ReflectionQuestion from "@/components/ReflectionQuestion";

const RecognisingAndDealingWithFeelingsModuleData = [
  {
    id: 1,
    title: "Recognising and dealing with feelings",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">What are emotions?</h4>
        <br></br>
        <p>
          Emotions are the sensations in the body as a result of something that
          happens to us. Feelings are generated from our thoughts about those
          emotions and we then choose a response. People often find it very hard
          to recognise their emotions and feelings. The exercises in this module
          aim to help you get more in tune with your body so that you notice how
          it is responding in different situations.{" "}
        </p>
        <br />
        <p>The following diagram helps to explain this:</p>
        <img
          className="mx-auto d-block"
          src={pictureOne}
          alt="Feelings response diagram"
          width={583}
          height={298}
        />
        <hr />
        <h5 className="secondary-color">Starting Point</h5>
        <p>Use this quiz to identify your current level of confidence.</p>
        <EmotionsQuiz />
        <br />
        <hr />
        <h5 className="secondary-color">What happens in my body</h5>
        <p>Here are some of the physical reactions we have to situations:</p>
        <img
          className="mx-auto d-block"
          src={pictureTwo}
          alt="Man Diagram"
          width={539}
          height={501}
        />
        <br />
        <p>
          These reactions are generally preparing us for a ‘fight or flight’
          response (so we could face a predator or flee to safety) which would
          have helped ensure our survival. Now these signs can be used to help
          us identify what we are feeling.
        </p>
        <hr />
        <h5 className="secondary-color">
          Exercise 1: How in-tune with your feelings are you?
        </h5>
        <p>
          Below is a worksheet which will help you to identify what happens to
          you physically and how this affects you. By completing this in
          different situations you should be able to decide what emotion you
          experience.
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ask others</th>
              <th>Ask myself</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What expression does my face show?</td>
              <td>What does my body feel like?</td>
            </tr>
            <tr>
              <td>How do I say I feel?</td>
              <td>What am I thinking about?</td>
            </tr>
            <tr>
              <td>What do I do?</td>
              <td>What do I feel like doing?</td>
            </tr>
          </tbody>
        </table>
        <p>
          <a href={documentOne} target="_blank" rel="nonreferrer noreferrer">
            Download printable template &gt;
          </a>
        </p>
        <br />
        <h5 className="secondary-color">
          How does understanding my feelings link to fantasising about or
          viewing sexual images of children?
        </h5>
        <p>
          Some of the common reasons identified by individuals who have accessed
          sexual images of children include dealing with unpleasant emotions
          such as stress, loneliness, frustration, depression and anxiety.
        </p>
        <p>
          They often describe using sexual fantasy and masturbation or illegal
          on-line behaviour as a way of coping with unpleasant feelings and
          situations as a form of self-soothing, escapism and stress relief.
        </p>
        <p>
          They may be aware that these are not coping strategies but for a
          variety of reasons struggle to identify other healthier ways of
          dealing with these feelings. Improving your ability to regulate and
          manage your emotions and deal with your problems in a healthier way is
          likely to reduce the probability of engaging in problematic sexual
          behaviour and harming children.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "How thoughts affect feelings",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">
          How you feel can influence your thinking and behaviour.
        </h4>
        <br></br>
        <p>Our thoughts, feelings and behaviour are all linked:</p>
        <img
          className="mx-auto d-block"
          src={pictureThree}
          alt="Feelings Diagram"
          width={494}
          height={321}
        />
        <br />
        <p>
          <e>
            For example, if you are starting a new job, you are likely to get
            butterflies in your tummy, feel shaky and start sweating. If you
            struggle with your self-esteem you might think this means that you
            are feeling nervous because you are not going to do well, and you
            will have to talk to new people which you find really hard. These
            thoughts will then heighten those emotions and increase the nerves.
            However, if you see these nerves as something positive you might
            think this is due to your excitement at who you might meet and
            getting to do something new.
          </e>
        </p>
        <p>
          We are now going to explore how pleasant and unpleasant thinking can
          help with managing emotions.
        </p>
        <p>
          This includes how you feel about yourself (your self-esteem); how you
          feel about your situation and your feelings towards other people. For
          example an individual who feels powerless may lose motivation and
          believe that there is no point in trying, as he will not succeed. He
          may withdraw and isolate himself. Similarly an individual who
          ruminates on problems and focuses on negatives is unlikely to see the
          positives in other people or situations and this can increase his
          feelings of isolation.
        </p>
        <hr />
        <h5 className="secondary-color">
          The effect of pleasant and unpleasant thinking on emotions.
        </h5>
        <p>
          If you are unsure of pleasant and unpleasant thinking (otherwise known
          as self-talk) then please work through our{" "}
          <Link to="/self-talk">
            <b>self-talk section</b>
          </Link>
          .
        </p>
        <p>
          Unpleasant thinking comprises thoughts in which you see the worst in
          everything. It reduces your expectations by expecting the worst.
          Unpleasant thinking tends to manifest itself in patterns of behaviour
          which are characterized by stress, worry, anxiety and frustration.
        </p>
        <p>Pleasant thinking encourages healthy behaviour.</p>
        <hr />
        <h5 className="secondary-color">
          Exercise 2: Your unpleasant thoughts
        </h5>
        <br></br>
        <p>
          Write down a list of your most common unpleasant thoughts. With each
          of these, identify the associated feeling. Now list your behaviour
          that resulted from the thoughts.
        </p>
        <br />
        <p>Here is an example:</p>
        <p>Situation: Saying hello to a work colleague who doesn't respond.</p>
        <p>Thought- ‘they hate me'</p>
        <p>Feeling – rejection</p>
        <p>Behaviour – stop talking to them</p>
        <br />
        <p>Start thinking of other reasons:</p>
        <p>1. They didn't hear me</p>
        <p>2. They were busy and preoccupied</p>
        <p>3. They were upset and didn't want to talk to anyone</p>
        <br></br>
        <p>
          Start to see if you notice any difference in your feelings once you
          think of other reasons. You may notice the feelings are more pleasant.
        </p>
        <p>
          Now think about your illegal online behaviour? Can you identify any
          feelings and unpleasant thoughts that might contribute to the decision
          to view sexual images of children.
        </p>
        <br />
        <p>An example of this might be:</p>
        <p>Thought – I am never going to have a sexual relationship.</p>
        <p>Feeling – frustration/loneliness</p>
        <p>Behaviour – access sexual images of children</p>
        <br />
        <p>
          Unpleasant thinking is often triggered by thinking errors which fall
          into three main categories:
        </p>
        <ul className="content-list">
          <li>
            <b>Catastrophising</b> – making things seem worse than they really
            are, taking things out of proportion
          </li>
          <li>
            <b>Generalising</b> – taking one occurrence and thinking it will
            always apply e.g. believing you will never pass your driving test
            because you failed the first time
          </li>
          <li>
            <b>Negative focus</b> – always focusing on the unpleasant aspects of
            a situation rather than looking at the positives e.g. instead of
            being happy about passing an exam, being upset that you did not get
            a higher grade.
          </li>
        </ul>
        <br />
        <p>
          Spend some time reflecting on your thinking errors. If you need
          additional information on what these are then there is a{" "}
          <a href="https://www.psychologytools.com/resource/unhelpful-thinking-styles/">
            downloadable sheet
          </a>{" "}
          which has been created by Psychology Tools (
          <a href="https://www.psychologytools.com">psychologytools.com</a>).
        </p>
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Dealing with worry, anger and stress",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">How to Manage Unpleasant Feelings</h4>
        <p>
          The following will help you deal with some common unpleasant emotions
          but can also be applied to others.
        </p>
        <br />
        <h5 className="secondary-color">Worry</h5>
        <p>
          Worry tends to involve lots of thoughts that come one after another,
          which involve events in the future or in the past. Frequently, worry
          thoughts begin with things like “what if… if only I had”… or “I must
          remember to…”. Sometimes worrying can help make us do helpful things
          such as checking that we have turned off the oven but it can become a
          significant problem.
        </p>
        <br />
        <p>
          If you answer “yes” to the following questions, then worrying might be
          a problem for you.
        </p>
        <ul className="content-list">
          <li>Do you spend a lot of your time worrying?</li>
          <li>Does worrying make you feel really upset and anxious?</li>
          <li>Does worrying stop you getting a good sleep at night?</li>
          <li>
            Does worrying prevent you enjoying yourself and getting on with
            things during the day, at home or at work?
          </li>
          <li>
            Do you feel that your worrying is “out of control” or that once you
            start you just can’t stop?
          </li>
          <li>
            Do you feel worrying has affected your health (e.g., stomach aches,
            headaches, or diarrhoea)?
          </li>
        </ul>
        <p>
          Worrying about things can make you anxious. Many people suffer from
          anxiety without realising what it is. When you are anxious you may
          notice things like:-
        </p>
        <ul className="content-list">
          <li>Faster heart rate, sweaty skin or looking pale</li>
          <li>Feeling upset, irritable, or angry</li>
          <li>Feeling that something terrible is about to happen</li>
          <li>Dry throat or mouth</li>
          <li>Muscular aches and headaches</li>
          <li>Feeling tired, lacking energy</li>
          <li>Poor digestion – stomach aches</li>
          <li>Concentration problems or sleep problems</li>
        </ul>
        <p>
          The more anxious you get, the more you worry and the more you worry,
          the more anxious you become! It becomes a vicious circle, this is why
          it is really important to learn how to manage your emotions in a
          healthy way.
        </p>
        <br />
        <h5 className="secondary-color">What can you do about it?</h5>
        <p>
          <b>Step 1 - Notice it</b>
        </p>
        <p>
          Notice when you are worrying or feeling anxious. If you recognise the
          signs of anxiety mentioned above, or you notice you are thinking
          thoughts like those outlined, take notice of them- don’t ignore them.
        </p>
        <p>
          <b>Step 2 - "Stop"!</b>
        </p>
        <p>
          When you notice you are worrying, say “STOP!” to yourself, and
          concentrate on a different thought and/or do something else to
          distract yourself. Try to think/do something that is pleasant,
          relaxing and/or enjoyable e.g. reading, watching TV, cooking, calling
          a friend, doing a hobby, or playing a sport.
        </p>
        <p>
          <b>Step 3 - Worry Time</b>
        </p>
        <p>
          Think about identifying a certain time in your day when it would be
          okay to worry -but limit the amount of time you spend worrying – no
          more than ten to fifteen minutes is needed. This is your “worry time”
          when you can focus on what it is that is causing you to worry and try
          to generate some solutions. If you find yourself worrying at a time
          when you have other things to do (such as when you are at work or at
          bedtime, or while you are trying to concentrate on something else),
          tell yourself to stop and put off the worries until later. This is not
          about avoiding problems but is about putting what is worrying you into
          perspective and dealing with it when you are not distracted by other
          things.
        </p>
        <p>
          <b>Step 4 - Self-talk</b>
        </p>
        <p>
          If you find yourself worrying about the same thing over and over (for
          example, “I’ll start my new job and no one will like me”) then write
          down the opposite, “pleasant” thought (for example, “People will like
          me- I’m a nice person”). Every time you notice yourself worrying about
          this thought challenge your thinking. Use the ‘questioning yourself’
          strategy identified earlier in the module and counter your worry with
          the pleasant thought. You could even write the pleasant thought or
          statement down on a small card and carry it with you to remind
          yourself of it.
        </p>
        <p>
          <b>Step 5 Problem Solving</b>
        </p>
        <p>
          This is something you can try by yourself, or with another person. A
          problem shared is a problem halved! If you can tell someone you trust
          what your problem is, they can often help you with solving or coping
          with it. You can find more about{" "}
          <Link to="/problem-solving">
            <b>problem solving</b>
          </Link>{" "}
          here.
        </p>
        <br></br>
        <hr />
        <h5 className="secondary-color">Anger</h5>
        <p>
          People express anger in different ways; it can take many forms. Below
          are some of the ways that anger can be experienced.
        </p>
        <p>
          <b>Head in the Sand</b>
        </p>
        <p>
          Some people find anger scary and frightening. They shy away from
          admitting they are angry and avoid expressing angry feelings. They try
          to convince themselves that they are not angry. This can be
          problematic as consequently they do not let go of and express their
          feelings which can result in a build-up of pressure, frustration and
          unhappiness.
        </p>
        <p>
          <b>Retreating to the Cave</b>
        </p>
        <p>
          Some people find anger too hard to deal with, and they do everything
          they can to avoid it. The escape into their ‘cave’ when they feel
          angry or when other people around them become angry. Consequently they
          do not learn to manage their own or other people’s anger.
        </p>
        <p>
          <b>Bottlers</b>
        </p>
        <p>
          Other people find it difficult and scary to express their angry
          feelings so they stuff them down deep inside. This might be because
          they worry about getting into trouble or saying or doing the wrong
          thing. Whatever the reason, bottling up angry feelings can feel like a
          pressure cooker or a champagne bottle in which the pressure is
          building. Over time, if the angry feelings are not released they can
          result in an explosion.
        </p>
        <p>
          <b>Exploders</b>
        </p>
        <p>
          Some people shout and scream and blow off steam when they feel angry.
          They lash out physically and/or verbally. In the short term this can
          produce an immediate release but such outbursts of anger can have
          negative long term consequences for themselves and their relationships
          with other people.
        </p>
        <br></br>
        <h5 className="secondary-color">
          Which category do you identify with?
        </h5>
        <p>
          If you are not sure then use the table from exercise 1 to help you
          tune into your feelings. The worksheet in Exercise 3 will also help
          you to identify things that you can do, and things that other people
          can help you with, that will assist you to get back to feeling calm
          and in control. Recognising the warning signs that you are getting
          angry early on can help you to avoid expressing your anger in
          unhealthy and destructive ways.
        </p>
        <br></br>
        <p>
          <b>Excerise 3 - How to get back to feeling ok and in control</b>
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Things another person can help me with</th>
              <th>Things I can do on my own</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p>
          <a href={documentTwo} target="_blank" rel="noopener">
            Download printable template &gt;
          </a>
        </p>
        <br></br>
        <hr />
        <h5 className="secondary-color">Stress</h5>
        <p>
          When our body prepares us for the ‘fight or flight’ response it
          releases hormones such as adrenalin and cortisol to help us have the
          energy and focus to respond to the threat. Our bodies are designed to
          deal with short periods of threat. However in the modern day we are
          exposed to longer term threats or stressors which results in our body
          releasing these hormones for longer periods of time. This can be
          really harmful and effect our sleep, concentration, memory and drive
          us to look for short term ‘fixes’ such as caffeine, sugar, alcohol,
          drugs and sex.
        </p>
        <br />
        <p>
          <b>How to deal with stress</b>
        </p>
        <ol>
          <li>
            <b>Reduce the amount of stress in your life,</b> for example if your
            job is highly stressful then consider if there are alternatives.
          </li>
          <li>
            <b>Change how you manage stress,</b> for example can you delegate
            some tasks or learn that good enough is ok rather than striving for
            perfection.
          </li>
          <li>
            <b>Look after your physical health,</b> for example eating healthily
            and doing exercise even if you don’t feel like it.
          </li>
          <li>
            <b>Learn to relax,</b> for example making sure you have time to
            yourself to do healthy things you enjoy, this can be as simple as
            listening to music or reading a book.
          </li>
          <li>
            <b>Be sociable,</b> even if you feel like everything is getting too
            stressful and too much for you, one of the best things you can do is
            to meet up with your family and friends – for example, meeting up
            for a coffee or going for a walk. Friends and family will be able to
            provide you a distraction from your stress and they can help you to
            see the situation from a different point of view.
          </li>
        </ol>
        <p>
          You can find more about{" "}
          <Link to="/managing-thoughts-feelings-and-behaviours">
            <b>managing difficult thoughts, feelings, and behaviours</b>
          </Link>{" "}
          here.
        </p>
        <br />
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
          Think about... what shows me something is wrong, and what can I do to
          manage unpleasant feelings.
        </p>
        <br></br>
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.
        </p>
        <ReflectionQuestion>
          I now have a better understanding of how my emotions influence my
          thinking and behaviour.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now have strategies to cope with difficult emotions.
        </ReflectionQuestion>
        <Link className="text-decoration-none" to="/self-care">
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
export default RecognisingAndDealingWithFeelingsModuleData;
