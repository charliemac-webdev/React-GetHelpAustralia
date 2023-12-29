import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import pictureOne from "../../../images/diagrams-yes-or-no.gif";

const ImagesAreChildrenModuleData = [
  {
    id: 1,
    title: "Images are children",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">The reality of sexual images</h4>
          <p>
            It’s likely that you will have used self-justifications to persuade
            yourself that it is ok to allow yourself to view sexual images of
            children.
          </p>
          <p>
            Self-justification describes how, when a person encounters a
            situation in which their behaviour is inconsistent with their
            beliefs, that person tends to justify the behaviour to allow
            themselves to continue what they are doing.
          </p>
          <p>
            At first you might be aware that you are using self-justifications
            to let yourself look at illegal images. But your awareness of these
            justifications might fade over time the more they are used.
          </p>
          <hr />
          <br></br>
          <h4 className="secondary-color">Starting point</h4>
          <p>
            Using the table below, write down your current level of knowledge
            and understanding about your awareness of the child abuse taking
            place in these images (1 = very little understanding; 2 = some
            understanding; 3 = secure understanding).
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>I understand how illegal images victimise children.</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  I understand justifications I have used to allow myself to
                  continue offending online.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  I understand the effects of being photographed on the child in
                  the image.
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>
            Regardless of where you have scored yourself, it is important to
            work through the material in this module. We find that if people
            accept the reality of the harm caused to children, then they are
            less likely to continue with their illegal online behaviour.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Exercise 1",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            Exercise 1: understanding and responding to justifications
          </h4>
          <p>
            For people to allow themselves to view sexual images of children,
            they will generally be using a number of self-justifications to
            persuade themselves that it is ok to do what they are doing.
          </p>
          <p>
            This process is called ‘self-talk’. Self-talk is the internal
            argument someone uses to give themselves permission to do something
            they know they shouldn’t be doing.
          </p>
          <p>Here’s an example:</p>
          <p className="text-center">
            <img
              src={pictureOne}
              alt="diagram yes or no"
              width="80%"
              height="auto"
            />
          </p>
          <br></br>
          <p>
            People will be persuaded by the self-talk process if their ‘yes’
            justifications in favour of doing the behaviour are stronger than
            their ‘no’ arguments against the behaviour.
          </p>
          <p>
            By being aware of the self-talk process you go through, and the
            negative effects of offending for yourself and others, you will
            increase your ability and motivation to avoid further offending.
          </p>
          <p>
            This film includes some of the justifications that people use to
            allow themselves to continue offending online.
          </p>
          <p className="text-center">
            <iframe
              title="Stop it Now 'No Justification'"
              width="640"
              height="360"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              src="https://www.youtube.com/embed/Bq-rTc7x_a4?feature=oembed"
            ></iframe>
          </p>
          <p>
            In the box below, the left hand side column contains some self-talk
            justifications you might have used to justify your use of sexual
            images of children. In the right hand side column list self-talk
            statements which you could use in response to the matching
            justification to dissuade yourself from engaging in the behaviour.
          </p>
          <p>
            Please add at the bottom of the table any additional self-talk
            justifications that you use, along with a matching response. You
            should repeat all the phrases you write in the responses column in
            your head, so that this sort of thinking becomes automatic if you
            start to use the justifications.
          </p>
          <p>There is an example provided.</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Justifications</th>
                <th>Responses</th>
              </tr>
              <tr>
                <td>
                  <em>“I am only looking at pictures.”</em>
                </td>
                <td>
                  <em>
                    “The children in the images are real children who are being
                    sexually abused.”
                  </em>
                </td>
              </tr>
              <tr>
                <td>
                  <em>“The images were already online.”</em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>“I did not directly abuse the child in the image.”</em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>
                    “The child in the image is smiling, so they must be enjoying
                    it.”
                  </em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>
                    “I didn’t produce the pictures, and they were already
                    there.”
                  </em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>“I’ve had no direct contact with the child.”</em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>
                    “The children are clothed, so these images cannot be
                    illegal.”
                  </em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>
                    “This isn’t abuse because no adults are in the images.”
                  </em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <em>“The child took this photograph of themselves.”</em>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>
              <a
                href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/images-are-children-exercise-1editable.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download printable version
              </a>
            </strong>
            .
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Consent",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Consent</h4>
          <p>
            ‘Consent’ means to give permission for something to happen. It is
            important for us to consider the issue of consent when we are
            talking about the children in the images because children are not
            able to consent to sexual activity.
          </p>
          <p>
            The following video gives one man’s experience of coming to terms
            with the harm that this behaviour can cause to the children in the
            images.
          </p>
          <p className="text-center">
            <iframe
              title="Part 8 Interview with man arrested for downloading indecent images of children"
              width="640"
              height="360"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              src="https://www.youtube.com/embed/9shQPIZ0qPk?feature=oembed"
            ></iframe>
          </p>
          <br></br>
          <h4 className="secondary-color">
            Why children are not able to consent to sexual activity
          </h4>
          <p>
            Children are not able to give consent because they can not fully
            understand what they are consenting to, or the emotional impact and
            consequences of sex.
          </p>
          <p>
            Adults are generally able to give informed consent about sexual
            activity and photographs of them, unless they are under the
            influence of alcohol or drugs or have some kind of vulnerability.
          </p>
          <p>
            Some people disagree about the age that children are mature enough
            to be able to give this permission. Australia the age of consent for
            sexual activity is 16 years old. But any sexual picture of a child
            under 18 years old is illegal.
          </p>
          <p>
            Children are not able to give consent to engage in sexual activity,
            and consent is further taken away from children when sexual images
            of them are taken and posted on the internet. Once an image is
            posted online, all control is lost over that image. The victim will
            experience further abuse with the knowledge that their picture is
            out there, being shared, and viewed, beyond their control.
          </p>
          <br></br>
          <h4 className="secondary-color">
            Sexual images of under 18s are illegal
          </h4>
          <p>
            The idea of justifications can also be extended to the type, or
            category, of sexual image you are looking at online. It is important
            to remember that any sexual image of a someone under 18 years old is
            illegal.
          </p>
          <p>These are all illegal when used for sexual purposes:</p>
          <ul className="content-list">
            <li>naturist images</li>
            <li>‘modelling’ images</li>
            <li>images of children with no adult present in the image</li>
            <li>cartoon/manga images</li>
            <li>self-taken sexual images</li>
          </ul>
          <p>
            Any sexual image of a child, used for a sexual purpose, is illegal.
          </p>
          <p>
            Abuse includes the victimisation when the photograph was taken.
            Abuse also includes the continuing victimisation the child will
            experience knowing that images of them are online that they can’t
            control, and that used for sexual reasons.
          </p>
          <p>
            The reality of viewing naturist, modelling or cartoon images is that
            this behaviour may act as a ‘slippery slope’. These sorts of images
            might act to reinforce sexual interest in children and lead the
            person viewing the images to become curious about what other sorts
            of material might be available. When children are depicted in images
            either on their own or with other children, where no adult is
            present in the image, it is important that you remind yourself that
            an adult will have been behind that camera. An adult will have
            coerced the child(ren) into posing for the camera and an adult will
            have taken and shared that photograph to be used for a sexual
            purpose.
          </p>
          <p>
            Regarding self-taken sexual images of children, it is important to
            remember that even though the child may have consented to taking the
            photograph in the first place, they almost certainly will not have
            consented to the world-wide sharing of that image. Children do not
            have the foresight to understand the consequences that sending an
            image of themselves may bring.&nbsp;&nbsp; They do not understand
            that once an image is sent that it cannot be retrieved. Once the
            reality of this becomes known it can be very distressing and have a
            significant emotional impact on them.
          </p>
          <br></br>
          <h4 className="secondary-color">Child sexual exploitation</h4>
          <p>
            Consent is further removed from children if there is a power
            difference between them and the person who is inciting sexual
            activity. It is not uncommon for children to be sexually exploited
            as a part of the process of producing illegal images – for example,
            by receiving gifts, drugs, affection or accommodation – in exchange
            for engaging in sexual activity.
          </p>
          <p>
            Sometimes pictures are taken of children without them knowing – for
            example, at the beach – and sometimes pictures are taken with the
            child’s knowledge. Sometimes a child will be coerced into taking and
            posting an image of themselves, without fully realising the
            consequences of doing this.
          </p>
          <p>
            As part of this module in helping you recognise and acknowledge that
            the children in the images are real children, it is helpful –
            although difficult – to get yourself to think about how that child
            got to be in that situation of being in front of that
            camera.&nbsp;This is what we will be asking you to consider in the
            following exercise.
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Exercise 2",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Empathy</h4>
        <p>
          ‘Empathy’ means trying to understand what another person is thinking
          and feeling, or “putting yourself into their shoes”.
        </p>
        <p>
          It means having insight at an emotional level as to what it would feel
          like to be that person.
        </p>
        <br></br>
        <h4 className="secondary-color">Why is empathy hard?</h4>
        <p>
          We generally find it harder to empathise or identify with other people
          who are “not like us”. For many people looking at illegal images on
          the internet, the ability to empathise is difficult because you cannot
          identify with any one child. A child in an image can be seen as being
          “far removed” from the person looking at images of this child online.
          This may be because of the physical distance created by the computer
          screen, or because the child is unlike the individual looking at the
          image.&nbsp; The child may be underprivileged, isolated or without a
          voice, they may be an orphan, or in care, or being controlled by an
          abusive family. This means it is harder for the person looking at the
          image to feel empathy for the victim in the image. This exercise is
          designed to help you “get to know” the human being behind the
          photograph with his/her own thoughts, feelings, problems, and life.
        </p>
        <br></br>
        <h4 className="secondary-color">Health and safety warning</h4>
        <p>This exercise is challenging and emotionally demanding.</p>
        <p>
          It is important that you take a break during this exercise if you feel
          you need to.&nbsp; Consider self-care, such as having someone you can
          talk to if you are feeling emotional afterwards or making sure that
          you have something nice planned to do. Remember negative mood states
          often put you at risk of further offending.
        </p>
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/images-are-children-exercise-2editable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download printable version of Exercise 2, with space to fill in
            answers &gt;
          </a>
        </p>
        <br></br>
        <p>
          <h4 className="secondary-color">Exercise 2</h4>
        </p>
        <p>
          <h5 className="secondary-color">
            Part A: How have you got to where you are?
          </h5>
        </p>
        <p>
          As part of this exercise you should think of a child in a photograph
          that you have seen. Answer the following questions as realistically as
          you can:
        </p>
        <ol>
          <li>Why are you looking at this image?</li>
          <li>How did you come across this photo?</li>
          <li>What do you gain from looking at this image?</li>
          <li>
            What brought you to the point of looking at these types of images?
          </li>
        </ol>
        <p>&nbsp;</p>
        <p>
          <h5 className="secondary-color">
            Part B: Who is directing the action and why?
          </h5>
        </p>
        <p>
          Using the same image you have recalled for the previous part of this
          exercise, extend the image to include the room where it is happening,
          the person taking the photograph and the instructions being given.
          Answer the following questions:
        </p>
        <ol>
          <li>Who is taking the photograph and why they are taking it?</li>
          <li>What cues are they ignoring in the child’s behaviour?</li>
          <li>
            What are they telling themselves in order to justify taking the
            photograph?
          </li>
          <li>
            What do they plan to do with the photograph after it has been taken?
          </li>
        </ol>
        <p>&nbsp;</p>
        <p>
          <h5 className="secondary-color">Part C: The child in the image</h5>
        </p>
        <p>
          One common justification people use to allow themselves to continue
          accessing Sexual Images of Children is that the children in the images
          are “not real children” – that what is being looked at online is only
          a picture on a screen. This next exercise asks you to try and get to
          know the subject of an image you have seen and help you understand
          that this child in this image is a real child – who has thoughts,
          feelings, hopes and dreams – who is being sexually abused. Still
          recalling the same image, create a character sketch about them by
          responding to the following questions. Although the image in your head
          could be of a boy, girl, or both, the prompts given will reflect a
          female.
        </p>
        <ul className="content-list">
          <li>Who is the girl in this photo?</li>
          <li>Where was she born? Where does she call home?</li>
          <li>What makes her laugh out loud?</li>
          <li>What is her most treasured possession?</li>
          <li>What does she do in her free time?</li>
          <li>Who does she admire? Who is her hero? Why?</li>
          <li>
            What is her biggest fear? Who has she told this to? Who would she
            never tell this to? Why?
          </li>
          <li>What does she hope to be when she grows up?</li>
          <li>Who does she go to when she is scared?</li>
          <li>
            Who are the girl’s family? Who are her parents? Does she have
            siblings?
          </li>
          <li>Who are her friends?</li>
          <li>How did the girl get to be in front of the camera?</li>
          <li>What does she think is happening?</li>
          <li>
            If she has been told to keep what has happened a secret, how would
            that make her feel?
          </li>
          <li>What will she think about before she goes to sleep at night?</li>
        </ul>
        <p>
          Hopefully this exercise has helped you “get to know” the human being
          behind the photograph with his/her own thoughts, feelings, problems,
          and life.
        </p>
        <br></br>
        <p>
          <h5 className="secondary-color">Part D: effects of victimisation</h5>
        </p>
        <p>
          Return once again to the original picture during the time at which the
          photographs are being taken. Consider the child’s perspective of what
          is happening while this photographic shoot is taking place, and the
          effects that having this photograph taken might be on the child, by
          responding to the following.
        </p>
        <ol>
          <li>What might he/she think and feel while being abused?</li>
          <li>
            For what other reason might he/she be smiling in the photograph?
            Focus on the reality that may lie behind that smile.
          </li>
          <li>
            Try to imagine how he/she might behave, think and feel after being
            abused.
          </li>
          <li>
            What impact might the continuing presence of photographs on the
            Internet have on the child?
          </li>
          <li>
            How might the child behave, think and feel if they try and talk
            about the abuse to another adult?
            <ol>
              <li>How might this affect their relationship with the adult?</li>
              <li>How did this disclosure come about?</li>
            </ol>
          </li>
          <li>
            Try and describe what the long-term consequences of the abuse may be
            for the child. Pay attention to the particular role that being
            photographed may have played.
          </li>
        </ol>
        <p>&nbsp;</p>
        <p>
          Having completed this exercise, read the next section to find out what
          is actually known about the effects of being photographed.
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 5,
    title: "The effects on the child",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">
          The effects on the child of being involved in the production of sexual
          images
        </h4>
        <p>
          Psychologists have tried to look at what it means to the child to be
          photographed and for these photographs to be used in a sexual way
          (e.g. fantasy and/or masturbation etc.).
        </p>
        <p>
          <h5 className="secondary-color">During the abuse</h5>
        </p>
        <p>
          While it is convenient to think about photography as being separate
          from the actual abuse, for the majority of children this is not the
          case. Very often being photographed is PART OF the abuse; victims see
          the lasting photographical evidence as a continuation of the abuse
          they experienced.
        </p>
        <p>
          Knowing that images of them are circulating on the web, and that
          strangers use these photographs for inappropriate sexual purposes,
          causes ongoing victimisation for the children involved.
        </p>
        <p>
          Before continuing, you might find it helpful to view this short video
          clip of an individual explaining his realisation of the harm to
          children, as a result of his own online behaviour.
        </p>
        <p className="text-center">
          <iframe
            title="YouTube video player"
            width="560"
            height="315"
            allowfullscreen
            src="https://www.youtube-nocookie.com/embed/9shQPIZ0qPk"
          ></iframe>
        </p>
        <p>
          Abuse can produce physical symptoms, such as urinary infections and
          soreness around the genitalia or anus, headaches and vomiting.
          Depression, tiredness, difficulties in concentrating and nightmares
          are also common in such children. It can also lead to other problems,
          such as the child behaving or talking in a sexual way, acting out or
          behaving aggressively, as well as impacting on their relationships
          with other children and adult relationships when they are older.
        </p>
        <p>
          <h5 className="secondary-color">
            During disclosure of what has happened
          </h5>
        </p>
        <p>
          As with all forms of sexual abuse, children are reluctant to talk
          about what has happened. This may be very convenient for the adults
          involved, but increases the chance that the child will have problems
          in the future, such as depression or inability to form trusting or
          loving relationships with other adults. When the abuse is
          photographed, this seems to increase the child’s fear of talking about
          what has happened. Disclosures, when eventually made, are often
          limited, with the child only telling as much as they feel the person
          questioning them already knows. Feelings of shame, humiliation and
          helplessness are often accompanied by feelings of anxiety, with the
          child worried that the photograph may be viewed as evidence of
          co-operation on their part. The child may also feel that the fact that
          they were smiling may be seen as evidence that he or she was enjoying
          the experience when they were being coerced or forced to smile.
        </p>
        <p>
          The long-term consequences of having been photographed can include:
        </p>
        <ul className="content-list">
          <li>
            Intense bad feelings, such as a negative picture of themselves,
            long-term feelings of shame, hopelessness, an inability to feel
            anything or relate to anyone.
          </li>
          <li>
            A distressing awareness that even though the abuse has stopped,
            others may still be able to access their photographs and that there
            is nothing that they can do about it.
          </li>
          <li>
            Worry that the photographs may encourage the abuse of other
            children.
          </li>
        </ul>
        <br></br>
      </div>
    ),
  },
  {
    id: 6,
    title: "Exercise 3",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">Effects on you</h4>
        <p>
          <br></br>
          <h5 className="secondary-color">
            Part A: How would you feel about being there? Where do you draw the
            line?
          </h5>
        </p>
        <p>
          Now consider how you would feel about how close you could get to the
          child abuse taking place.&nbsp; At what point does it become
          unacceptable for you? Draw a line between where you would and would
          not be able to voluntarily go forward with the action.
        </p>
        <p>Explain why you have placed your line where you did.</p>
        <ul className="content-list">
          <li>
            Finding images or downloading links and not reporting them to the
            police
          </li>
          <li>
            Watching/looking and trading the videos and images on your computer
          </li>
          <li>Listening to the abuse through a wall from a different room</li>
          <li>Seeing the abuse through a window</li>
          <li>Standing in the room and watching the abuse take place</li>
          <li>
            Being the person taking the video/photographs or directing the
            action
          </li>
          <li>Actively participating in the abuse</li>
        </ul>
        <p>
          What might this tell you about downloading sexual images of children?
        </p>
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/images-are-children-exercise-3-2editable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download printable version of Exercise 3 &gt;
          </a>
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Reflection",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          As with the introduction to this module, using the table below, write
          down your level of knowledge and understanding around your awareness
          of the child abuse taking place in these images (1 = very little
          knowledge; 2 = some understanding; 3 = secure understanding).
        </p>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>I understand how illegal images victimise children.</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                I understand justifications I have used to allow myself to
                continue offending online.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                I understand the effects of being photographed on the child in
                the image.
              </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <p>Think about these questions:</p>
        <ul className="content-list">
          <li>
            Have any of your responses changed from 1 to 2, or 2 to 3 from since
            the start of this module?
          </li>
          <li>In what ways might your understanding have changed?</li>
          <li>
            Which part of the module has had the greatest impact on your
            understanding? Why?
          </li>
          <li>
            Has anything from this module prompted or encouraged you to change
            your behaviour? If so, what? How do you plan to act on it?
          </li>
          <li>
            Has this module raised any further questions for you or made you
            want to explore any ideas further? What steps do you plan to take to
            seek out this information?
          </li>
        </ul>
        <br></br>
        <br />
        <Link to="/self-help-problematic-collecting">
          <div className="d-flex justify-content-end">
            <Button ident="next-button" classes="btn">
              Next Module
            </Button>
          </div>
        </Link>
      </div>
    ),
  },
];

export default ImagesAreChildrenModuleData;
