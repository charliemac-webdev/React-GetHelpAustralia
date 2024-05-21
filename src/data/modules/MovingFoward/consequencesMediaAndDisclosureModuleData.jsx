import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";
import imageOne from "../../../images/legal-consequences.png";

const DisclosureModuleData = [
  {
    id: 1,
    title: "Legal consequences of a conviction",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Legal consequences of a conviction</h4>
        <p>
          Being convicted of a sexual offence has lots of significant
          consequences. One of the main outcomes is being involved with the
          police and the criminal justice system. When the police become
          involved, they will investigate the offence. Based on the evidence
          they will proceed in two ways.
        </p>
        <h5 className="secondary-color">No further action</h5>
        <p>
          If the police do not find substantial evidence or believe that there
          is insufficient proof to press charges, no further legal action will
          be taken.
        </p>
        <h5 className="secondary-color">Charged</h5>
        <p>
          In cases where you are charged with offences, a court date will be
          assigned for your appearance. This initial hearing typically takes
          place in a Magistrates Court, but depending on the nature of the
          offences, your case might be transferred to a District Court.
        </p>
        <p>
          During the court appearance, you will have the opportunity to enter a
          plea of guilty or not guilty. If you plead not guilty, a trial date
          will be set. If you enter a guilty plea, a sentencing date will be
          scheduled.
        </p>
        <p>
          The various sentencing options are detailed below. However, predicting
          the specific outcome of sentencing can be challenging, and is
          therefore important to seek legal advice in all cases.
        </p>
        <br />
        <p>
          <img
            className="d-block mx-auto"
            src={imageOne}
            alt="legal consequences"
            width="90%"
            height="auto"
          />
        </p>
        <br></br>
        <h4 className="secondary-color">Sentencing options</h4>
        <p>
          If you plead or are found guilty, there are several penalties the
          court can issue. Where an offence is of a sexual nature, committed in
          relation to a child, are more likely to order a term of imprisonment.
        </p>
        <h5 className="secondary-color">Community sentence</h5>
        <p>
          This involves serving the sentence within the community under the
          supervision of Probation services. It may come with a requirement to
          engage in rehabilitation, which could encompass offence-related work
          or community service activities.
        </p>
        <h5 className="secondary-color">Suspended sentence</h5>
        <p>
          A suspended sentence is a custodial sentence wherein the individual is
          not required to go to prison as long as they refrain from committing
          further offences and comply with imposed requirements. Failure to
          comply or committing additional offences can lead to the activation of
          the suspended sentence, requiring the individual to serve the
          suspended period in custody. A suspended sentence can include specific
          conditions, such as offence-related work.
        </p>
        <h5 className="secondary-color">Custodial sentence</h5>
        <p>
          Upon receiving a custodial sentence, the offender will be taken
          directly from the court to the designated prison where the sentence
          will be served.
        </p>
        <p>
          The court decides how long an offender will be sentenced to prison.
          This is determined by considering different factors such as victim
          impact, reports or references, maximum penalty for each offence,
          and/or early plea of guilty.
        </p>
        <br></br>
        <h4 className="secondary-color">Other outcomes</h4>
        <br></br>
        <h5 className="secondary-color">Sex Offender Register</h5>
        <p>
          Anyone convicted of a prescribed sexual offence is put on the National
          Child Offender System (NCOS).This national scheme requires child sex
          offenders, and other defined categories of serious offenders against
          children, to keep police informed of their whereabouts and other
          personal details for a period of time after they are released into the
          community.
        </p>
        <p>
          You can find{" "}
          <a
            className="secondary-color"
            href="https://www.acic.gov.au/protection-services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>more information about the sex offenders register here.</u>
          </a>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Other consquences",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Department of Child Safety</h4>
        <p>
          The Department of Child Safety may become involved if you have
          interactions with children, as the police will inform them of an
          arrest. The level of involvement can change during an investigation,
          and sometimes restrictions may be re-evaluated, especially during the
          sentencing phase.
        </p>
        <p>
          We strongly encourage open and honest communication with Children’s
          Services to ensure the welfare of your child or children.
        </p>
        <h4 className="secondary-color">Insurance</h4>
        <p>
          Criminal convictions can affect your insurance policies. Individuals
          with such convictions statistically face a higher risk of becoming
          victims of crime, leading insurers to view them as higher-risk
          clients.
        </p>
        <h4 className="secondary-color">Employment</h4>
        <p>
          During an investigation for a sexual offence, you may be at risk of
          losing your employment. It’s important to review your employment
          contract to understand whether you need to disclose any criminal
          conviction.
        </p>
        <p>
          When looking for a new job, certain roles may not be suitable for you,
          particularly those involving children or vulnerable adults. When
          applying for specific jobs, you’ll likely be asked to declare any
          convictions. Such convictions might be revealed if your employer
          conducts their own police check.
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 3,
    title: "Dealing with media",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Dealing with the media</h4>
        <p>
          The media don’t publish information about every online child sexual
          abuse offence but people often worry about this being a possiblity.
        </p>
        <p>
          Court reporters attend criminal courts and may choose to cover any
          case. These reporters are overseen by the Independent Press Standards
          Organisation, adhering to clear reporting guidelines. They are
          permitted to report information presented in court about the criminal
          case, as long as the details are publicly available.
        </p>
        <p>
          There are steps you can take to mitigate the impact of media coverage.
        </p>
        <h5 className="secondary-color">What to do</h5>
        <ul>
          <li>
            You might want to think about whether to tell close family or
            friends if you’re worried they discover the situation through the
            media.
          </li>
          <li>
            For people under investigation and their families, we recommend
            temporarily deactivating social media accounts or adjusting privacy
            settings during sentencing hearings to minimise exposure to media
            coverage.
          </li>
          <li>
            If you are worried about potential targeting by people in the
            community, it’s advisable to get in touch with the police, who can
            assess the possibility of implementing added security measures.
          </li>
        </ul>
        <h5 className="secondary-color">What not to do</h5>
        <ul>
          <li>
            Don’t look for similar cases covered by the media. It can be
            distressing and sentencing outcomes vary from case to case.
          </li>
        </ul>
        <p>
          <a
            className="secondary-color"
            href="https://www.stopitnow.org.uk/wp-content/uploads/2023/11/Media-case-study.m4a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Find a story here</u>
          </a>{" "}
          explaining the experience of someone in the U.K that Stop It Now!
          supported who faced media coverage and how they managed the situation
          and how they coped.
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 4,
    title: "How to tell people about your sexual offences",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">
          How to tell pople about your sexual offences
        </h4>
        <p>
          It can be very difficult to talk about sex, particularly sexual
          offences. It’s hard to know how to approach these conversations and
          who to share with. This section aims to give you the communication
          skills and insight to help talking to other people about your
          offending.
        </p>
        <h4 className="secondary-color">Understanding reactions</h4>
        <p>
          Understanding how other people might feel can help you anticipate how
          they might react. Sexual thoughts or behaviours involving children are
          unexpected and naturally raise numerous questions. For instance, your
          partner might wonder about your motivations, the consequences for you,
          how it impacts them, the well-being of any children you have, and the
          implications for the future. Think about your own emotions of fear and
          distress. Other people are likely to share these emotions and will
          also be shocked by finding out about behaviour through you or the
          police.
        </p>
        <p>
          People’s reactions might not align with your predictions. Shock could
          stop people being able to think of questions, while others might have
          many questions or repeatedly ask the same thing. Tears, anger, and
          even self-blame are possible responses.
        </p>
        <p>
          It’s important to tell people that you know you are accountable for
          your actions and try to listen to them and respect their needs, such
          as requiring space to process the situation.
        </p>
        <h4 className="secondary-color">Active listening</h4>
        <p>
          Communication involves both speaking and listening. To understand
          other peoples’ emotions, it’s important to ask questions and genuinely
          listen. This can be tough, especially if they express negativity or
          intense anger due to your behaviour.
        </p>
        <h4 className="secondary-color">How listening can help</h4>
        <ul className="content-list">
          <li>Understanding of the other person’s perspective.</li>
          <li>Show respect and that you value their thoughts.</li>
          <li>Improve their sense of value and interest in you.</li>
          <li>Improves positivity and encourages future conversations.</li>
        </ul>
        <h4 className="secondary-color">Indicators of effective listening</h4>
        <ul className="content-list">
          <li>
            Body language: nodding and appropriate gestures signal your
            engagement.
          </li>
          <li>
            Verbal responses: offering relatable comments, sounds, and relevant
            questions displays active involvement.
          </li>
          <li>
            Eye contact: maintaining eye contact shows the speaker they have
            your attention.
          </li>
        </ul>
        <p>
          Mastering these communication skills will aid you in navigating
          challenging conversations surrounding sexual offences and foster a
          supportive environment for discussions.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Talking to different people about sexual offences",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Talking to your partner</h4>
        <p>
          When discussing the situation with your partner, remember all the
          skills we’ve discussed. Your partner can be deeply affected by your
          actions, and they might have questions. It’s crucial to be honest
          without sharing graphic details. This helps them understand and decide
          how they want to proceed in the relationship. It’s better for them to
          hear about this from you than from the police or other people.
        </p>
        <ul className="content-list">
          <li>
            Give time for processing: understand that partners need time to
            grasp the situation’s impact
          </li>
          <li>
            Monitor how they cope: the arrest can be distressing for them,
            possibly leading to mental health challenges. Offer support, and if
            needed, suggest contacting professionals.
          </li>
          <li>
            Understand their feelings: partners might experience anger, worry,
            and anxiety. Be a listening ear and guide them toward trusted
            individuals if they wish to talk more.
          </li>
          <li>
            Help them understand sexual offending: help your partner understand
            the complexity of the situation by offering information about sexual
            offending. Refer them to reliable resources or helplines.
          </li>
        </ul>
        <h4 className="secondary-color">Talking to children</h4>
        <p>
          Telling children about offending can be tough for parents. Think about
          these points when speaking to them.
        </p>
        <ul className="content-list">
          <li>
            Address changes clearly: if significant changes occur, children
            might speculate and make assumptions. Provide a clear explanation to
            prevent misconceptions.
          </li>
          <li>
            Answer the “why” question: children will likely want to know why
            their parent did what they did. Explain that it’s complex and that
            even adults struggle to understand. Assure them that their parent is
            seeking help.
          </li>
          <li>
            Embrace their feelings: children will have various emotions about
            the situation. Give them time to process, encourage communication,
            and offer another trustworthy adult for them to confide in.
          </li>
        </ul>
        <h4 className="secondary-color">Talking to employers</h4>
        <p>
          When disclosing convictions to employers, these suggestions might
          help.
        </p>
        <ul className="content-list">
          <li>
            Be prepared: have a script ready for explaining past offences.
          </li>
          <li>
            Know your record: understand your criminal record’s content and how
            it impacts job applications.
          </li>
          <li>
            Check employer policies: understand your potential employer’s policy
            on hiring individuals with convictions.
          </li>
          <li>
            Honesty in interviews: you don’t always need to disclose details on
            application forms. Instead, confirm you have a conviction and are
            happy to discuss at interview where you can explain in more detail
            and the changes you have made in your life.
          </li>
          <li>
            Present progress: explain the offence simply, discuss positive
            changes made since then, and express your commitment to not
            re-offend.
          </li>
          <li>
            Positivity and honesty: stay confident, honest, and true to yourself
            while discussing the situation.
          </li>
        </ul>
        <h4 className="secondary-color">Talking to friends</h4>
        <p>
          When disclosing to friends, prioritise their feelings and reactions.
          These tips might help.
        </p>
        <ul className="content-list">
          <li>
            Choose a neutral location: meet at a neutral place to reduce
            pressure and discomfort.
          </li>
          <li>
            Conversation setup: set up the seating to ensure privacy and
            comfort.
          </li>
          <li>
            Calm and clear: speak calmly and clearly, explaining that you’re
            about to discuss a difficult topic.
          </li>
          <li>
            Agenda: provide a structured discussion agenda for clarity and
            comfort.
          </li>
          <li>
            Offer breaks<strong>:</strong> recognise the weight of the
            conversation and take breaks if needed.
          </li>
          <li>
            Moderation in details: avoid graphic details that might disturb
            them.
          </li>
          <li>
            Know your limits: share as much as you’re comfortable with, based on
            your knowledge of them.
          </li>
          <li>
            Take responsibility: emphasise that you recognise the wrongness of
            your offending and take full responsibility.
          </li>
          <li>
            Ending respectfully: end by thanking them for listening and
            acknowledging their choice to stay in touch or not.
          </li>
        </ul>
        <br></br>
      </div>
    ),
  },
  {
    id: 6,
    title: "Reflection",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <br></br>
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.{" "}
        </p>
        <ReflectionQuestion>
          I now have a better understanding of the criminal justice consequences
          of illegal behaviour.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now have a better understanding of other consequences (e.g.,
          Employment, Child Safety) of illegal online behaviour.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now know some helpful ways to speak with my friends and family about
          my situation.
        </ReflectionQuestion>

        <Link className="text-decoration-none" to="/relapse-prevention">
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

export default DisclosureModuleData;
