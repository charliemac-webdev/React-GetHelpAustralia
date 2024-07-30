import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";
import document from "@/documents/Immediate gratification_Costs and gains.pdf";

const ProblemOfImmediateModuleData = [
  {
    id: 1,
    title: "Problem of immediate gratification",
    description: {
      type: "content",
      content: (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">Immediate gratification</h4>
            <p>
              Is your online sexual behaviour risky or illegal? You might have
              wondered why you choose behaviours with such short-term gain when
              they have such long-term negative consequences.
            </p>
            <p>Here are some possible explanations:</p>
            <ul className="content-list">
              <li>
                Long-term consequences can be less certain, for example you
                might get arrested
              </li>
              <li>
                Long-term consequences can seem less intense compared to instant
                sexual relief
              </li>
              <li>
                You can think that you care less about the long-term impact at
                the time and especially if feeling upset or low
              </li>
              <li>
                You might go through ‘moral disengagement’. This can happen in
                different ways but often involves:
                <br />
                – passing responsibility onto others, for example “I wouldn’t
                look if the images weren’t there”
                <br />
                – minimising the harm caused, for example “it’s only chatting”
                <br />
                – dehumanising the victim, for example “it’s only an image”
                <br />
                – collective action, for example “other people are doing it”
                <br />
                <li>
                  Moral disengagement allows people to enjoy a behaviour that is
                  unacceptable when you know that children are being sexually
                  harmed.
                </li>
              </li>
            </ul>
            <p>
              This may start to help you understand why you chose to behave
              illegally online, and prioritise your short-term needs despite the
              consequences, but it does not excuse the behaviour.
            </p>
            <p>
              It is important that you start to think about how you can reduce
              the power of instant gratification if this has been a particular
              problem for you.
            </p>
            <hr />
            <br></br>
            <h4 className="secondary-color">What can you do?</h4>
            <p>
              One way to work against the power of instant gratification is to
              think about:
            </p>
            <ul className="content-list">
              <li>
                how you will feel in an hour, a week or a month if you do the
                illegal behaviour, for example if you go online, look at illegal
                images and then feel guilty or ashamed
              </li>
              <li>
                how you will feel in an hour, a week or a month if you don’t do
                the illegal behaviour, for example if you read a book or go for
                a walk and then feel proud, happy or relieved.
              </li>
            </ul>
            <p>
              Another way to work against the power of instant gratification is
              to use the template below to write a list of the costs and gains
              of the behaviour, which can be split into long-term and
              short-term.
            </p>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th colspan="2">Costs</th>
                  <th colspan="2">Gains</th>
                </tr>
                <tr>
                  <th>Short-term</th>
                  <th>Long-term</th>
                  <th>Short-term</th>
                  <th>Long-term</th>
                </tr>
                <tr>
                  <td>
                    <em>Shame</em>
                  </td>
                  <td>
                    <em>Lose relationship</em>
                  </td>
                  <td>
                    <em>Sexual relief</em>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <em>Guilt</em>
                  </td>
                  <td>
                    <em>Lose job</em>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <em>Fear</em>
                  </td>
                  <td>
                    <em>Depression</em>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p>
              <a href={document} target="_blank" rel="noopener noreferrer">
                <strong>Download printable template</strong>
              </a>
              .
            </p>
            <p>
              Can you identify any more short-term gains or any long-term gains?
            </p>
            <p>
              Very few people can identify long term gains from their behaviour
              – this shows how powerful the urge for sexual relief can be in the
              moment but also why they want to stop their negative behaviour.
            </p>
            <br></br>
          </div>
        </>
      ),
    },
  },
  {
    id: 2,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <>
          <div className="tab-main-content">
            <br></br>
            <h4 className="secondary-color">Reflection</h4>
            <ul className="content-list">
              <li>Is instant gratification a problem for you?</li>
              <li>
                What are going to be the best ways for you to manage these
                urges?
              </li>
            </ul>
            <br></br>
          </div>
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.{" "}
          </p>
          <ReflectionQuestion
            id="understanding_immediate_gratification"
            value={responses.understanding_immediate_gratification}
            onChange={onQuestionChange}
          >
            I now have a better understanding of why immediate gratification is
            so powerful.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="work_against_immediate_gratification"
            value={responses.work_against_immediate_gratification}
            onChange={onQuestionChange}
          >
            I now know some helpful ways to work against the power of immediate
            gratification.
          </ReflectionQuestion>
        </>
      ),
    },
  },
];

export default ProblemOfImmediateModuleData;
