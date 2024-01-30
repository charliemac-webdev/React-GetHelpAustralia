import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReflectionQuestion from "../../../components/ReflectionQuestion";

const AdultPornographyModuleData = [
  {
    id: 1,
    title: "Adult pornography",
    description: (
      <div className="tab-main-content">
        <br></br>
        <p>
          If you are viewing legal adult pornography then this is your choice
          and we are not here to shame you for using it or to tell you to stop.
        </p>
        <p>
          But this self-help section will encourage you to think about whether
          viewing legal adult pornography is helpful or harmful for you.
        </p>
        <p>
          Some people we work with connect viewing legal adult pornography to
          their illegal online sexual behaviour. Some of the reasons for this
          may become evident as you work through this module, particularly when
          you look at the section on drivers.
        </p>
        <br></br>
        <h4 className="secondary-color">What is pornography?</h4>
        <p>
          Pornography is sexual content designed to sexually excite people. It
          can be pictures, videos, written stories, or other forms. It often
          shows sexual body parts, people having sex, foreplay, or masturbation.
        </p>
        <p>
          Legal pornography can show one or more adults (aged 18 or older)
          having sex or engaging in other sexual behaviours. The adults must
          consent to these sexual behaviours, to being filmed or photographed,
          and to the videos or pictures being distributed.
        </p>
        <p>
          Bondage and fetishes can be shown as long as they are consensual and
          do not lead to abusive behaviours, for example, a person being
          physically harmed, their life threatened, or rape scenarios.
        </p>
        <br></br>
        <h4 className="secondary-color">Is it OK to view adult pornography?</h4>
        <p>
          In Australia, if you are aged 18 or over you can legally view adult
          pornographic material<em>.</em>
        </p>
        <p>
          Before the internet, people might have gone to a shop or a cinema to
          pay for adult pornography. But now it is easily and freely available
          online. This reduces any social embarrassment, inhibition, or shame
          that may have been felt when buying adult pornography face-to-face.
        </p>
        <p>
          As a result, the amount of people viewing adult pornography and the
          amount of pornography they view has grown. Some people view hours of
          adult pornography before they notice how much time has passed.
        </p>
        <br></br>
        <h4 className="secondary-color">Is adult pornography good or bad?</h4>
        <p>
          Lots of men who we work with talk about pornography being good or bad
          and think that viewing mainstream pornography is OK because it is
          legal. But they also talk about feelings of shame after viewing it.
        </p>
        <p>
          Adult pornography can be harmful to some of the people shown in it.
          Some adult pornography actors (porn stars) will have thought about
          their decision to be involved and given consent, performing in an
          environment they feel safe and looked after.
        </p>
        <p>
          But others might have thought there was no other option, been
          unwilling, forced, threatened, or even been through sex trafficking.
          With amateur footage, you might be viewing people who give consent to
          show themselves sexually online, but you could also be watching
          something that wasn’t supposed to be shared, such as{" "}
          <a
            href="https://www.gov.uk/government/publications/revenge-porn"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            revenge porn
          </a>
          . It is impossible to guarantee the people you are watching have given
          consent.
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 2,
    title: "When viewing adult pornography becomes a problem",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">
          When does viewing adult pornography become a problem?
        </h4>
        <p>
          People who think that the way they look at adult pornography is out of
          their control might say it is like an addiction to alcohol or drugs.
          They might have some of the same problems, for example:
        </p>
        <ul className="content-list">
          <li>
            feeling preoccupied with adult pornography itself or thinking about
            searching for it
          </li>
          <li>
            experiencing withdrawal, craving the adult pornography, or finding
            it difficult to stop thinking about it
          </li>
          <li>
            unable to stop or reduce time spend viewing adult pornography,
            eventually spending more time viewing it, searching for it, or
            thinking about it
          </li>
          <li>
            becoming desensitised and needing to view more, or more extreme
            adult pornography over time to experience the same effects
          </li>
          <li>
            continuing even though there are negative consequences, including
            for relationships or mental health, or when you begin breaking the
            law by viewing extreme or abusive imagery.
          </li>
        </ul>
        <br></br>
        <h4 className="secondary-color">
          Exercise 1: Is adult pornography a problem for you?
        </h4>
        <p>
          How can you tell if your use of adult pornography is a problem? Use
          the quiz below to find out.
        </p>
        {/* Exercise 1 Quiz */}
        <p>INSERT QUIZ&nbsp;</p>
        <p>
          The more questions you agree with, the more problematic your
          pornography use appears to be. If you answered ‘yes’ to any of the
          questions, you might find this module helpful.
        </p>
        <br></br>
        <h4 className="secondary-color">
          The impact of adult pornography on your life
        </h4>
        <p>
          Everybody is different. Some people can view adult pornography without
          experiencing any problems or negative effects.
        </p>
        <p>
          But for many people, adult pornography can have a negative impact on
          their real-world life.
        </p>
        <p>For example, it can:</p>
        <ul className="content-list">
          <li>
            affect relationships by creating distance between people. You might
            find it easier to spend time alone online
          </li>
          <li>
            breakdown an intimate, sexual relationship with a partner. Adult
            pornography can lead users towards an easier way of getting regular
            sexual pleasure
          </li>
          <li>
            dull a person’s senses to real-world experiences. Some people might
            put pressure on their partner to copy what they’ve seen online,
            creating tension and resentment
          </li>
          <li>
            lead to pornography-induced erectile dysfunction, which is when it
            is no longer possible to be aroused by the person in front of you
          </li>
          <li>
            affect your attitudes about what sexual behaviour between adults you
            think is acceptable in the real world
          </li>
          <li>lead to anxiety and depression</li>
        </ul>
        <br></br>
        <h4 className="secondary-color">
          Exercise 2: Is adult pornography affecting your real world?
        </h4>
        <p>
          These questions will help you work out whether your adult pornography
          use is affecting your real world.
        </p>
        <ul className="content-list">
          <li>
            In what ways might have/has adult pornography changed the way you
            view yourself?
          </li>
          <li>
            How has it impacted your relationships (both sexual and non-sexual)?
          </li>
          <li>
            How has it affected your work, sleep, and ability to look after
            yourself?
          </li>
          <li>
            How might adult pornography have impacted your view of the world and
            other people?
          </li>
          <li>
            Has your use of adult pornography contributed to you being in
            trouble with the law?
          </li>
          <li>
            Is your use of adult pornography changing the way you deal with life
            problems?
          </li>
          <li>
            What effect does it have on other areas of your life that are
            important to you?
          </li>
        </ul>
        <p>
          Download and edit our template as a{" "}
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.docx"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            Word document
          </a>{" "}
          or{" "}
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.pdf"
            target="_blank"
            rel="noopener"
            className="secondary-color"
          >
            PDF
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Why do I look at adult pornography?",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            Why do I look at adult pornography?
          </h4>
          <p>
            Pornography is made to sexually arouse people. But different people
            might look at it for very different reasons.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 3: Why do you view adult pornography?
          </h4>
          <p>Here are a few possible reasons.</p>
          <ul className="content-list">
            <li>For sexual gratification</li>
            <li>Exposure to new things</li>
            <li>To explore sexuality</li>
            <li>To escape the real world</li>
            <li>As a sexual outlet or to reduce sexual tension</li>
            <li>To stop feeling bored</li>
            <li>To feel better</li>
          </ul>
          <p>
            Download and edit our template as a{" "}
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.docx"
              target="_blank"
              rel="noopener"
              className="secondary-color"
            >
              Word document
            </a>{" "}
            or{" "}
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.pdf"
              target="_blank"
              rel="noopener"
              className="secondary-color"
            >
              PDF
            </a>
            .
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Triggers",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">What is a trigger?</h4>
          <p>
            A trigger is something that affects how you are feeling, which then
            affects how you behave.
          </p>
          <p>
            Some triggers can be positive, for example seeing an attractive
            adult and feeling sexually aroused.
          </p>
          <p>Some triggers can be negative, including:</p>
          <ul className="content-list">
            <li>sadness</li>
            <li>boredom</li>
            <li>loneliness</li>
            <li>frustration</li>
            <li>anger.</li>
          </ul>
          <br></br>
          <h4 className="secondary-color">
            What triggers these negative emotions in the first place?
          </h4>
          <p>This will be different for different people.</p>
          <p>
            Some triggers are emotions themselves, for example, feeling bored,
            or living with a constant feeling of stress or anxiety.
          </p>
          <p>
            Some triggers are caused by something that happens, for example,
            having a bad day at work or an argument with a partner.
          </p>
          <p>
            Some triggers come from situations, for example, sitting in the room
            where you’d usually look at adult pornography.
          </p>
          <p>
            Some triggers come from habits, for example, viewing adult
            pornography at the same time of day.
          </p>
          <p>
            Negative feelings can trigger some people to go online and view
            sexual content to make themselves feel better or help them cope.
            They try to replace the negative feelings with more positive
            feelings of excitement, arousal, and adventure.
          </p>
          <p>
            This might feel like it helps in the short term, but using
            pornography in this way is a bit like a sticking plaster – it is
            only a temporary fix and the issues behind your negative feelings
            might still be there.
          </p>
          <p>
            It is important to remember that we are in control of our own
            behaviour, even if it sometimes doesn’t feel like it. Even if
            something has triggered you to have a strong emotional reaction, you
            still have a choice of how to make yourself feel better. You have a
            choice whether to go online and view pornography, or whether you{" "}
            <Link
              className="secondary-color"
              to="/recognising-and-dealing-with-feelings"
            >
              manage your feelings in a different way
            </Link>
            .
          </p>
          <br></br>
          <h4 className="secondary-color">How to manage your triggers</h4>
          <p>
            If you want to view pornography then there are a range of techniques
            that you could use to help stop yourself. Check out our information
            on{" "}
            <Link to="/fantasy" className="secondary-color">
              fantasy management
            </Link>
            .
          </p>
          <br></br>
          <h4 className="secondary-color">Exercise 4: Keep a trigger diary</h4>
          <p>
            Over the next week, we encourage you to keep a diary, completing the
            diary each time you go online. You can have more than one diary
            entry each day.
          </p>
          <p>
            Sometimes it can be difficult to know what triggered your feelings
            before you went online. It can help to think about what you were
            doing or whether something specific happened before you went online.
            You might need to spend some time reflecting on this.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Day</td>
                  <td>Time</td>
                  <td>How I was feeling before I went online</td>
                  <td>
                    What did I do online? What type of content did I view?
                  </td>
                  <td>How long did I spend online?</td>
                  <td>How did I feel when I was online?</td>
                  <td>How did I feel after I stopped being online?</td>
                  <td>Ideas for what I could have done instead</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Download and edit our template as a{" "}
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.docx"
              target="_blank"
              rel="noopener"
              className="secondary-color"
            >
              Word document
            </a>{" "}
            or{" "}
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2021/11/Stop_It_Now_Get_Help_self_help_adult_pornography_section_exercises_Final.pdf"
              target="_blank"
              rel="noopener"
              className="secondary-color"
            >
              PDF
            </a>
            .
          </p>
          <ul className="content-list">
            <li>
              Are there any patterns between how you were feeling before,
              during, and after you were viewing adult pornography online?
            </li>
            <li>
              Are there any patterns between your feelings and the length of
              time you spent online, or what you did online?
            </li>
            <li>What triggers can I identify?</li>
            <li>
              What are some things I could do instead of watching pornography?
            </li>
            <li>What have you learned from completing this exercise?</li>
          </ul>
          <p>
            <Link to="/problem-solving" className="secondary-color">
              If you want to understand more about why you use pornography to
              solve problems, you may find it helpful to visit our understanding
              problems module.
            </Link>
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Drivers",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Drivers</h4>
          <p>
            Many people have problems with limiting the amount of time they
            spend viewing adult pornography or how often they view it.
          </p>
          <p>
            This might be because of drivers. Drivers are psychological factors
            in your mind that make it harder to control behaviour.
          </p>
          <p>
            When viewing pornography online, you could see hundreds of different
            images and videos within minutes. This has a powerful impact on your
            brain and can make it very difficult for you to control your online
            behaviour. They affect the way you view adult pornography and your
            feelings while you are viewing it.
          </p>
          <p>Here are a few examples of how your brain can be affected.</p>
          <h5 className="secondary-color">Needing new and different things</h5>
          <p>
            Your brain loves new things. Over time your brain can get bored if
            you keep viewing the same type of adult pornography. It doesn’t have
            the same effect because it isn’t new. To get the same level of
            sexual arousal, you might need to keep viewing new things.
          </p>
          <p>
            For people who have viewed a lot of adult pornography, this often
            means they start pushing boundaries and view things that they might
            have found too extreme, odd or distasteful before.
          </p>
          <p>
            Seeing or thinking about new and arousing pornography releases a
            chemical called dopamine into your body, which makes you feel happy
            and rewarded.
          </p>
          <p>
            This is because all species, including humans, evolved to try to
            reproduce so that they don’t go extinct. So your modern brain is
            linking pornography with its aim to reproduce – ejaculating as many
            times as possible to impregnate as many females as possible.
          </p>
          <h5 className="secondary-color">The bikini effect</h5>
          <p>
            Research shows that when men feel sexually aroused they make more
            impulsive decisions, behave recklessly and look for short-term
            rewards rather than thinking about long-term consequences. This is
            sometimes called the bikini effect. It can have a bigger effect on
            people who are unhappy because they have less to lose or more to
            escape. There is less research into the effect on women.
          </p>
          <p>
            This means that when you are online and feeling sexually aroused,
            you might be more likely to take risks, push boundaries and think
            more about the immediate rewards than the long-term consequences of
            your online viewing. You might be less likely to think about the
            negative impact your viewing habits could be having on your life.
          </p>
          <p>
            Sexual arousal also reduces your ability to think about other people
            (you have less empathy) so you might be more able to watch films
            with violence or abuse without feeling uncomfortable or concerned
            about the people in them.
          </p>
          <p>
            Advertisers know this, which is why they sometimes use suggestive or
            sexual pictures when selling things to men.
          </p>
          <h5 className="secondary-color">The slot machine effect</h5>
          <p>
            Slot machines offer random rewards. A gambler will keep gambling
            even if they rarely or never win because the joy is in the
            anticipation of winning.
          </p>
          <p>
            Thinking about pornography, the pleasure might eventually be less
            from what you see and more from what you hope to see. You might be
            rewarded from time to time with a particularly arousing image or
            film, but for the most part, you may be spending hours online in a
            state of expectation, and keep searching because you think that
            there must be something better out there.
          </p>
          <h5 className="secondary-color">Flow Theory</h5>
          <p>
            When viewing and collecting pornography you might find that time
            flows more quickly and you don’t focus on your usual worries. You
            might lose awareness of what else is going on in life and feel like
            you’re in a bubble. After you stop viewing pornography, you might
            not have any clear idea of what you thought or felt while you were
            online.
          </p>
          <p>
            This is sometimes called a state of flow. There is something that
            feels good about doing activities that hold your attention. Dopamine
            is released when your brain is active and focused on a rewarding
            task. This can help understand why the behaviour continues and you
            might be drawn to it in the future to escape from life’s stresses.
          </p>
          <br></br>
          <h4 className="secondary-color">How do drivers affect you?</h4>
          <ul className="content-list">
            <li>
              Do you view more extreme material, for longer, without having
              knowing why you were doing so once you stop being online?
            </li>
            <li>
              Do you feel as if you were acting out of character or feel ashamed
              or numb about what you viewed, but still look for it next time you
              are online?
            </li>
            <li>
              Do you feel that the ‘online you’ is very different from the
              ‘offline you’?
            </li>
          </ul>
          <p>
            Most people don’t know or think about drivers. But the people who
            make pornography do.
          </p>
          <p>
            This is why pornography sometimes contains violence, coercion and
            unusual acts because the makers need to find new things to keep
            their audience.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Exercise 5: Thinking about your own behaviour
          </h4>
          <p>
            Below are some questions to help you think about your pornography
            use.
          </p>
          <ul className="content-list">
            <li>What type of pornography do you view now?</li>
            <li>Have your opinions changed about it?</li>
            <li>
              Would you have viewed that type of pornography a few years ago?
            </li>
            <li>Which drivers do you relate to?</li>
            <li>
              How does this help you to understand how your pornography&nbsp;use
              has changed?
            </li>
            <li>
              What can you do differently now that you are aware of your
              behaviour and triggers?
            </li>
          </ul>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "Managing your adult pornography use",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            Managing your adult pornography use
          </h4>
          <br></br>
          <h4 className="secondary-color">Practical changes</h4>
          <p>
            If you decide it would be helpful for you to reduce your use of
            adult pornography, or stop looking at it completely, then here are
            some changes you can make to help.
          </p>
          <ul className="content-list">
            <li>
              If you live with other people, only go online or use your phone,
              tablet or computer in a shared space, for example the kitchen or
              living room. Knowing that other people can see your screen can
              reduce how likely you are to look at adult pornography.
            </li>
            <li>
              If you usually use your phone, tablet or laptop late at night,
              don’t take it to bed with you or charge it in the bedroom.
            </li>
            <li>
              Set restrictions or activate parental controls on your internet
              connection. This can stop you from being able to connect to
              websites with adult pornography.{" "}
              <a
                href="https://www.saferinternet.org.uk/advice-centre/parents-and-carers/parental-controls-offered-your-home-internet-provider"
                target="_blank"
                rel="noopener"
                className="secondary-color"
              >
                Find out how to set restrictions
              </a>
              .
            </li>
            <li>
              If someone knows you are trying to reduce your adult pornography
              use, ask them to help. Some apps allow a trusted friend or family
              member to see your internet history, which can motivate you to
              avoid adult pornography. Check out{" "}
              <a
                href="http://www.covenanteyes.com"
                target="_blank"
                rel="noopener"
                className="secondary-color"
              >
                Covenant Eyes
              </a>
              .
            </li>
            <li>
              If you don’t have someone to support you,{" "}
              <a
                href="http://www.nofap.com"
                target="_blank"
                rel="noopener"
                className="secondary-color"
              >
                NoFap
              </a>{" "}
              might help – it’s a website and support group designed to help
              users overcome porn addiction<strong>,</strong> porn overuse, and
              compulsive sexual behaviour.
            </li>
          </ul>
          <br></br>
          <h4 className="secondary-color">Relaxation techniques</h4>
          <p>
            Using mindfulness, meditation and guided visualisation can help
            manage emotional triggers to online pornography use. Use a technique
            that works for you, which you can plan and rehearse in advance.{" "}
            <a
              href="https://www.innerhealthstudio.com/visualization-scripts.html"
              target="_blank"
              rel="noopener"
              className="secondary-color"
            >
              Find out more about relaxation techniques
            </a>
            .
          </p>
          <br />
        </div>
      </>
    ),
  },
  {
    id: 7,
    title: "Self-care and tips",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            Self-care and tips to view less adult pornography
          </h4>
          <p>
            Feeling negative effects when you give up pornography is normal.
            When you view adult pornography, dopamine makes you feel good, so
            you might feel the opposite to this when you give up.
          </p>
          <p>
            When you first give up, it might be very tempting to view just a bit
            of pornography. Don’t test yourself. If you give in to these
            temptations, you might find that you view more and more and the
            habit has reformed.
          </p>
          <ul className="content-list">
            <li>
              Try your best to power through. The part of your brain that
              responds strongly to pornography also responds to other things
              that make you feel good, for example talking with friends, playing
              a sport. Those dopamine hits might not be as strong and quick, but
              eventually, they will be more satisfying and less harmful.
            </li>
            <li>
              Try to fill your time with other things. If you feel bored, you
              might be more likely to give in to your urges to view adult
              pornography. Try to fill your time away from the internet, maybe
              with a new hobby.
            </li>
            <li>
              Write a list of the people and things that are important to you.
              Put this list next to your computer as a way to put you off
              viewing adult pornography.
            </li>
            <li>
              Learn new ways to{" "}
              <Link
                to="/recognising-and-dealing-with-feelings"
                className="secondary-color"
              >
                manage negative feelings
              </Link>
              . When you are feeling stressed or low, you are more likely to
              give in to urges.
            </li>
            <li>
              Be honest about what you lose out on when you stop viewing
              pornography. Are there other ways to make up for these losses?
            </li>
            <li>
              Eat well and sleep. Eating processed foods and lack of sleep can
              impact our mood, our resilience, and how we process information,
              which affects how well we can cope with situations.
            </li>
            <li>
              Exercise. It is a good distraction and makes you feel better, and
              also releases dopamine.
            </li>
            <li>
              Be kind to yourself<strong>. </strong>You may not get this right
              the first time. You may slip up. But you can always start again.
              Reward yourself when you are able to manage your use of adult
              pornography.
            </li>
          </ul>
          <br></br>
        </div>
        <br />
      </>
    ),
  },
  {
    id: 8,
    title: "Reflection",
    description: (
      <>
        <ReflectionQuestion>
          This module has helped me explore and understand my use of legal
          (adult) pornography.
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me to explore and understand why I look at
          adult pornography.
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me to explore and understand my use of adult
          pornography is problematic.
        </ReflectionQuestion>
        <ReflectionQuestion>
          This module has helped me to explore and understand techniques to
          reduce or stop using adult pornography.
        </ReflectionQuestion>
        <Link className="default-link" to="/addiction">
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

export default AdultPornographyModuleData;
