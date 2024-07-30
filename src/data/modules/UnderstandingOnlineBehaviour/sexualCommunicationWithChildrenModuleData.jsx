import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";
import documentOne from "@/documents/Sexual communication_Cycle of online grooming.pdf";
import documentTwo from "@/documents/Sexual communication_responding to justifications.pdf";
import image from "@/images/theOnlineEnv.png";

const SexualCommunicationWithChildrenModuleData = [
  {
    id: 1,
    title: "Sexual communication with children online",
    description: {
      type: "content",
      content: (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">
              What do we mean by ‘sexual communication’?
            </h4>
            <br></br>
            <p>
              In Australia, an adult is committing a criminal offence if they
              intentionally communicate with a child for the purposes of sexual
              gratification.
            </p>
            <p>
              Sexual communication with a child is often referred to as online
              grooming. It can take many forms and with different motivations.
              All forms are regarded as child sexual abuse. They are illegal and
              cause harm.
            </p>
            <p>
              Some people communicate sexually with a child or children online
              because they find it sexually arousing. Other people do so in
              order to persuade children to send them sexual images or videos of
              themselves. Some people communicate sexually with children online
              because they want to meet the child offline in order to sexually
              interact with them. And some people say they communicate with
              children online to get a sense of connection. These motivations
              can overlap and change over time, so that it’s not always clear at
              the outset what someone really wants from their sexual
              communication, but we do know all of these behaviours are illegal
              and harmful.
            </p>
            <p>
              People’s behaviour varies too. For example, many people engaging
              in this behaviour report having sexual contact with lots of
              children online, and sending sexual pictures of themselves to the
              children, too. Other people may communicate sexually with only one
              child.
            </p>
            <p>
              Some introduce the topic of sex very quickly, whereas others will
              engage in ‘grooming behaviours’, where they spend time building
              rapport and establishing trust with a child before the issue of
              sex is raised.
            </p>
            <br></br>
          </div>
        </>
      ),
    },
  },
  {
    id: 2,
    title: "Different stages of communication",
    description: {
      type: "content",
      content: (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">
              Different stages of sexual communication with children
            </h4>
            <br></br>
            <p>
              In order to understand more about how to avoid situations which
              may lead to you communicating sexually with a child in the future,
              it can be helpful to understand that the behaviour happens in
              stages.
            </p>
            <p>
              Some people start communicating with children about general
              topics. This communication may continue for a while and may
              escalate to include sexual content. Some individuals may attempt
              to meet with the child. During conversations some individuals may
              go to great lengths to hide this behaviour from others and avoid
              detection. It is important to recognise that each of these stages
              are part of the offending behaviour.
            </p>
            <p>
              Remember that not every stage will be relevant for everyone. For
              example, some people do not try to make friends with the child
              concerned, or to form a relationship with them. But other people
              do. The difference often says a lot about people’s motivations.
            </p>
            <p>
              To change behaviour, it is important to recognise and understand
              the patterns in past behaviour. This can help us know the signs of
              the behaviour repeating itself and help us think about how we can
              prevent it from happening again.
            </p>
            <p>Consider reflecting on the following:</p>
            <ul className="content-list">
              <li>What stage did you start with?</li>
              <li>How did you move through the stages?</li>
              <li>
                What patterns can you recognise in your offending behaviour?
              </li>
              <li>
                What can you put in place to ensure that this does not happen
                again?
              </li>
            </ul>
          </div>
        </>
      ),
    },
  },
  {
    id: 3,
    title: "The cycle of online grooming",
    description: {
      type: "content",
      content: (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">The cycle of online grooming</h4>
            <br></br>
            <p>
              People often say offending “just happens”, but we know this isn’t
              true. To sexually communicate with a child is a process where
              several decisions are made.
            </p>
            <p>
              Some people find it helpful to think of their behaviour as
              following a repeated pattern. Considering your behaviour patterns
              can help you to understand the form your behaviour took, and the
              factors involved in your decision making. This will put you in a
              position where you can recognise this and change your behaviour so
              it is not repeated in the future.
            </p>
            <hr />
            <br></br>
            <h4 className="secondary-color">
              Exercise 1: Cycle of online grooming
            </h4>
            <p>
              Look at the cycle below and think about how each stage might have
              applied to your online sexual behaviour towards a particular child
              or children, in general. How a person moves through the cycle will
              be unique to them, and is likely to have changed over time as
              their behaviour developed. However, this gives a good overview of
              how your offending cycle may work and how you can break this cycle
              at different stages.
            </p>
            <p>
              A full description of each of the stages of the cycle and examples
              of intervention strategies for each stage are outlined below.
            </p>
            <p>
              <img
                className="mx-auto d-block"
                src={image}
                alt="The online environment"
                height="auto"
                width="50%"
              />
            </p>
            <br />
            <p>
              As you read through the stages, make note of the strategies and
              barriers you can use at each stage to ensure you do not continue
              through the cycle.  It is important to recognise that there are a
              variety of helpful strategies and barriers referenced throughout
              the self-help modules. You may also find it helpful to reach out
              to the{" "}
              <a
                className="nav-link secondary-color d-inline"
                target="_blank"
                href="https://www.stopitnow.org.au/helpline"
              >
                Stop It Now! Australia helpline
              </a>{" "}
              to explore potential barriers further.
            </p>
            <p>
              You can download the exercise sheet&nbsp;
              <u>
                <a
                  className="nav-link secondary-color d-inline"
                  href={documentOne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </u>
              .
            </p>

            <h5 className="secondary-color">The online environment</h5>

            <p>
              As well as ideas like the Triple A model (which you can find more
              about in the Online World module), people can also perceive the
              internet as a place where they can express themselves sexually
              more openly. For example, some people might feel more confident
              talking to others about sex online compared to offline. Or they
              might feel that they can portray themselves with more confidence
              or as being more attractive etc. Refer to the{" "}
              <Link to="/online-world">Online World module</Link> for more
              learning about the online environment.
            </p>
            <p>To avoid offending, think about:</p>
            <ul className="content-list">
              <li>How do you behave online? </li>
              <li>Are there other online behaviours that concern you?</li>
              <li>Are you a different person online than you are offline?</li>
              <li>How much time are you spending online?</li>
            </ul>
            <p>
              Now recognising the online world can be a risky environment for
              people, what barriers can you put in place to keep yourself safe
              online?
            </p>
            <p>
              e.g., Creating some more opportunities to socialise offline;
              setting alarms to limit online time, accessing the internet only
              in communal areas’ downloading website blocking and screen
              monitoring software to hold yourself accountable (such as covenant
              eyes and net nanny), etc.
            </p>

            <h5 className="secondary-color">Contact with child or children</h5>

            <p>
              This is about how people make their initial contact with children
              online.
            </p>
            <p>To avoid offending, think about:</p>
            <ul className="content-list">
              <li>
                What was the situation when you began speaking to a child e.g.
                what platform were you on, how did the communication start etc.?
              </li>
              <li>
                What was motivating you to contact a child? What need are you
                seeking to meet? What other ways can you meet this
                motivation/need which are healthier and legal e.g. connecting
                with known adults offline?
              </li>
            </ul>
            <p>
              What barriers can you put in place to ensure you do not contact a
              child online?
            </p>
            <p>
              e.g., deleting certain apps; confirming someone&#39;s age before
              talking to them; identifying what needs this behaviour is seeking
              to meet and identifying other legal and healthy ways etc.
            </p>

            <h5 className="secondary-color">Grooming</h5>

            <p>
              Grooming is an on-going process that happens before and throughout
              online sexual communication with children. Building a child’s
              trust for sexual purposes is a form of exploitation and is harmful
              to children.
            </p>
            <p>To avoid offending, think about:</p>
            <ul className="content-list">
              <li>
                How we know that sexual communication does not happen by
                accident, and involves a range of grooming behaviours.
              </li>
              <li>
                How your behaviours as an adult can influence children? Remind
                yourself that it is always an adult&#39;s responsibility to
                prevent communication between adults and children.
              </li>
            </ul>
            <p>
              Hopefully, the barriers you identified for the previous stages
              have been put in place to prevent offending. However, it is always
              helpful to have strategies at every point of the offending cycle,
              so that you know you can break this pattern of behaviour.
              Remember, you have control over your behaviour.
            </p>
            <p>
              What barriers could you put in place to ensure you do not engage
              in grooming behaviours?
            </p>
            <p>
              e.g., writing down the costs of the behaviour for children,
              yourself and your loved ones; thinking about the consequences of
              your actions such as how your family would react if they could see
              the conversation or you being arrested; blocking any apps or
              profiles which you know are risky for you; reminding yourself that
              it is always an adult&#39;s responsibility to stop communication
              between adults and children; and having a message or photo on your
              devices of what motivates you to not offend.
            </p>

            <h5 className="secondary-color">Sexual outcomes</h5>

            <p>
              This is the sexual behaviour itself, for example, the exchange of
              sexual videos and images; offline sexual contact. This includes
              one-off sexual encounters and sustained sexual contact with the
              same child or children over time etc.
            </p>
            <p>To avoid offending, think about:</p>
            <ul className="content-list">
              <li>
                The negative impacts of child sexual abuse on the victims and
                their families
              </li>
              <li>
                The negative long-term consequences for you and your family
              </li>
              <li>
                What need are you seeking to meet? What other ways can you meet
                this motivation/need which are healthier and legal e.g.
                connecting with known adults offline?
              </li>
            </ul>
            <p>
              What barriers could you put in place to ensure you do not engage
              in sexual communication with children?
            </p>
            <p>
              e.g., ending and blocking any contact you have with children;{" "}
              <Link to="/fantasy"> exploring fantasy management </Link>{" "}
              techniques to help manage urges to offend; identifying ways to get
              sexual pleasure in healthy and legal ways; seeking external
              support for problematic sexual behaviours; reminding yourself
              children can never consent and sexual conversations with children
              have damaging lifelong impacts for children.
            </p>

            <h5 className="secondary-color">Justifications</h5>

            <p>
              These are the things people say to themselves to justify their
              behaviour and to feel OK about it. These might include:
            </p>
            <ul className="content-list">
              <li>
                <em>blaming</em>&nbsp;the child – ‘s/he led me on!’
              </li>
              <li>
                <em>sexualising</em>&nbsp;the child – ‘s/he was so provocative’,
                ‘s/he was sexually active anyway’
              </li>
              <li>
                <em>equating</em>&nbsp;children to adults, for example, in terms
                of consent and understanding.
              </li>
            </ul>
            <p>
              The idea is that these justifications then make it more likely
              that the person will carry on with their behaviour, and so go back
              round the cycle, perhaps many times.
            </p>
            <p>
              It is important to recognise these justifications, so that you can
              challenge them in the future. Once you have identified some of the
              justifications you used, you could consider a response to dissuade
              yourself from engaging in the behaviour in the future.
            </p>
            <p>
              If you haven’t looked at the{" "}
              <Link to="/justifications"> justifications module </Link>, take
              some time to complete this now before moving on so that you can
              recognise your justifications at the time you were engaging in
              harmful behaviour and how you can challenge them.  If you have
              sexually communicated with children, consider if the examples
              below are relevant for you, as well as any others that you have
              identified, and add these to your justification table.
            </p>
            <p>&nbsp;</p>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Justifications</strong>
                  </td>
                  <td>
                    <strong>Responses</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>“S/he led me on.”</em>
                  </td>
                  <td>
                    <em>
                      &nbsp; “They are a child. They are not able to consent to
                      the sexual communication.”
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>“I’m only talking to them.”</em>
                  </td>
                  <td>
                    &nbsp;
                    <em>
                      &nbsp; “These conversation are harmful to children. We
                      know that the impact of these conversations can be
                      profound and have lifelong impacts.”
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>“They could stop if they want to.”</em>
                  </td>
                  <td>
                    <em>
                      &nbsp; “I’m the adult, it’s my responsibility to stop. We
                      know that children do not have the ability to have a
                      complete understanding of consequences, and so it is my
                      responsibility as an adult to stop harmful behaviours.”
                    </em>
                  </td>
                </tr>
                <tr>
                  <td>
                    &nbsp;<p></p>
                    <p>&nbsp;</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    &nbsp;<p></p>
                    <p>&nbsp;</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    &nbsp;<p></p>
                    <p>&nbsp;</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    &nbsp;<p></p>
                    <p>&nbsp;</p>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p>
              <a href={documentTwo} target="_blank" rel="noopener noreferrer">
                <u>Download printable version</u>
              </a>
            </p>
            <p>
              Remember, you should repeat all the phrases you write in the
              challenge column in your head, so that this sort of thinking
              becomes automatic if you start to use the justifications.
            </p>
            <br></br>
          </div>
        </>
      ),
    },
  },
  {
    id: 4,
    title: "The child's perspective",
    description: {
      type: "content",
      content: (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">
              Considering the child’s perspective
            </h4>
            <p>
              Many people do not believe they are harming children when they
              communicate with them sexually on the internet, and can
              incorrectly blame the child. However, we know this is not true.
              Speaking to a child about sexually explicit content before they
              are emotionally developed has long-term, harmful consequences on
              the cognitive and sexual development of these children.{" "}
            </p>
            <p>
              If you recognise using any justifications, it is important to
              think about the dynamics of your interaction or relationship with
              the children concerned. This can be really hard to do, as
              sometimes people feel ashamed of their behaviour when they look at
              it from the child’s point of view. But, remember that this is a
              positive process, and considering the child’s point of view may
              help you prevent inappropriate online behaviour going forward.{" "}
            </p>
            <p>
              Find a quiet time to do the exercise below when you’re feeling
              safe and supported.
            </p>
            <hr />
            <br></br>
            <h4 className="secondary-color">
              Exercise 2: The child’s perspective
            </h4>
            <p>
              Consider what you know about the child/ren you were interacting
              with and what you know about children generally. Think about the
              following discussion questions:
            </p>
            <ul className="content-list">
              <li>
                What might have made it difficult for them to say ‘no’?(e.g.
                worry/anxiety, lack of assertiveness, fear of the person or
                losing the relationship)
              </li>
              <li>
                What vulnerabilities did the child have? (e.g., unhappy home
                life)
              </li>
              <li>
                What responsibilities do all adults have towards children?
              </li>
              <li>
                How does a child’s understanding of sexual contact, its meaning
                and consequences, differ from the understanding of adults?
              </li>
              <li>
                How able is a child to give informed consent to any form of
                sexual contact? (e.g. does a child fully recognise the risks and
                consequences of sexual contact)
              </li>
              <li>
                How could your interaction with the child have made them believe
                they held some responsibility for the chat?
              </li>
            </ul>
            <br></br>
          </div>
        </>
      ),
    },
  },
  {
    id: 5,
    title: "Reflections",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">Reflections</h4>
            <ul className="content-list">
              <li>
                What do you think motivated you to communicate with children in
                a sexual way online?
              </li>
              <li>How did your behaviour develop over time?</li>
              <li>What stages can you identify in your behaviour?</li>
              <li>
                How did you persuade and/or encourage the child/ren to go along
                with it?
              </li>
            </ul>
            <p>
              Understanding more about your behaviour online can help you to
              consider what changes you need to make to stop the behaviour and
              move forward positively. You can use the information from the
              other modules to help you consider what to put in place and how to
              move forward. You might find it particularly useful to consider
              the following modules:&nbsp;
            </p>
            <ul className="content-list">
              <li>
                <Link className="secondary-color" to="/relapse-prevention">
                  Relapse Prevention
                </Link>
              </li>
              <li>
                <Link className="secondary-color" to="/building-a-good-life">
                  Building a Good Life
                </Link>
              </li>
            </ul>
          </div>
          <br />
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="online_engagement_with_children"
            value={responses.online_engagement_with_children}
            onChange={onQuestionChange}
          >
            I now have a better understanding of what might motivate someone to
            engage sexually with children online.{" "}
          </ReflectionQuestion>
          <ReflectionQuestion
            id="understanding_harmful_online_communicating"
            value={responses.understanding_harmful_online_communicating}
            onChange={onQuestionChange}
          >
            I now have a better understanding of how communicating with children
            sexually online can be harmful to a child.
          </ReflectionQuestion>
        </>
      ),
    },
  },
];

export default SexualCommunicationWithChildrenModuleData;
