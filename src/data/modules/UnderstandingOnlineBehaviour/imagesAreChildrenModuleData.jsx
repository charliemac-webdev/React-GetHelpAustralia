import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import ReflectionQuestion from "../../../components/ReflectionQuestion";
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
    title: "Exercise 1: Understanding and challenging justifications",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">
            Exercise 1: Understanding and challenging justifications
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
          <br></br>
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
          <br></br>
          <br></br>
          <p>
            In the box below, the left hand side column contains some self-talk
            justifications you might have used to justify your use of sexual
            images of children. In the right hand side column list self-talk
            statements which you could use to challenge the matching
            justification to dissuade yourself from engaging in the behaviour.
          </p>
          <p>
            Please add at the bottom of the table any additional self-talk
            justifications that you use, along with a matching challenging
            response. You should repeat all the phrases you write in the
            challenge column in your head, so that this sort of thinking becomes
            automatic if you start to use the justifications.
          </p>
          <p>There is an example provided.</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Justifications</th>
                <th>Challenges</th>
              </tr>
              <tr>
                <td>
                  <em>“I am only looking at pictures.”</em>
                </td>
                <td>
                  <em>
                    The children in the images are real children who are being
                    sexually abused.
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
                <td>
                  <em>
                    The children in the images are real children who are being
                    sexually abused.
                  </em>
                </td>
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
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr></tr>
              <tr>
                <td></td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>

          <br></br>
          <p>
            It can be difficult to explore this exercise independently and so we
            encourage you to contact the{" "}
            <u>
              <a
                href="https://www.stopitnow.org.au/helpline"
                target="_blank"
                rel="noopener"
              >
                helpline
              </a>
            </u>
            &nbsp;advisors who are here to support you and help you further
            explore your learnings. You can stay anonymous and don’t have to
            give your real name or any contact details. If you’re not ready to
            speak to anyone yet, you can also use the Stop It Now! Australia
            live chat.
          </p>
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
            In Australia the age of consent for sexual activity is 16 or 17
            years old (depending on individual state/territory laws). But any
            sexual picture of a child under 18 years old is illegal.
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
          <p>Any sexual image of a child is illegal.</p>
          <p>
            Abuse includes victimisation when the photograph was taken. Abuse
            also includes the continuing victimisation the child will experience
            knowing that images of them are online, which they have no control
            over.
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
          <h5 className="secondary-color">After the abuse</h5>
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
    id: 7,
    title: "Reflection",
    description: (
      <div>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          As with the introduction to this module, using the table below, think
          about your level of knowledge and understanding around your awareness
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
        <br />
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.{" "}
        </p>
        <ReflectionQuestion>
          I now have a better understanding of the false justifications someone
          may use to avoid responsibility for their actions.{" "}
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now know some helpful ways to work against the power of immediate
          gratification.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now have a better understanding of the effects of being photographed
          is on the children in the image.
        </ReflectionQuestion>
        <Link className="default-link" to="/problematic-collecting">
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
