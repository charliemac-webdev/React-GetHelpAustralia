import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";
import document from "@/documents/Problem Solving - Exercise 1_Problem Diary.pdf";
import imageOne from "@/images/Improving my self esteem.png";

const ProblemSolvingModuleData = [
  {
    id: 1,
    title: "Problem solving",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Problem solving</h4>
          <p>
            Problem solving – the process of working through the details of a
            problem to reach a solution, is a skill which promotes good decision
            making and encourages confidence and emotional wellbeing.
          </p>
          <p>
            Problem solving skills are necessary to resolve conflicts that arise
            in our everyday lives whether big or small. Having the ability to
            deal with problems promotes self-esteem and self-confidence.
          </p>
          <hr />
          <br></br>
          <h4 className="secondary-color">Starting Point</h4>
          <p>Identify your current level of confidence</p>
          <p>
            ( 1 = no&nbsp;confidence; 2 = some confidence; 3 = very confident )
          </p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>
                    <em>
                      The advantages of the problem solving approach and how to
                      apply it
                    </em>
                  </strong>
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <em>Ways to avoid acting on impulse</em>
                  </strong>
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>
            If you have scored yourself as 1 or 2, this module will be
            particularly useful for you. If you have scored yourself as very
            confident, there still may be some resources below that you will
            find useful. Complete Exercise 1 before moving on to the next
            module.
          </p>
          <hr />
          <br></br>
          <p>
            Here are three ways in which individuals tend to deal with problems:
          </p>

          <h5 className="secondary-color">The Avoidant Approach</h5>

          <p>
            This is similar to the ‘Head in the Sand ‘way of experiencing anger
            and involves a failure to acknowledge the problem. It is
            characterised by procrastination (putting things off), passivity,
            inactivity (doing nothing, hoping the problem will go away) and
            making excuses for not acting (I can’t do anything about it).
            Individuals who adopt this approach may blame other people or
            situations for the problem and the problem tends to remain
            unresolved.
          </p>

          <h5 className="secondary-color">The Emotional Approach</h5>

          <p>
            Individuals who adopt this approach tend to act impulsively or
            carelessly and may become angry or upset. They are unlikely to
            consider different solutions and the consequences and make hasty
            decisions which may compound the problem.
          </p>

          <h5 className="secondary-color">The Problem Solving Approach</h5>

          <p>
            This involves a more systematic approach to problems, which includes
            defining the problem, selecting a possible solution, implementing it
            and evaluating whether the solution is the right one.
          </p>
          <hr />
          <br></br>

          <h4 className="secondary-color">
            Exercise 1: What approach do I use?
          </h4>

          <p>
            <strong className="secondary-color">Problem Diary</strong>
          </p>
          <p>
            Complete the problem diary over the next 7 days.&nbsp;Reflect on
            your initial responses to the problem and how you dealt with it.
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Describe the problem- what happened?</th>
                <th>My thoughts about the problem?</th>
                <th>My feelings about the problem?</th>
                <th>What did I do?</th>
                <th>
                  Which approach is this?
                  <br />
                  Avoidant, Emotional, or Problem Solving?
                </th>
                <th>
                  What was the outcome?
                  <br />
                  How did I feel afterwards?
                </th>
              </tr>
              <tr>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            <a
              className="secondary-color"
              href={document}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download printable template &gt;
            </a>
          </p>
          <p>Now ask yourself:</p>
          <ul className="content-list">
            <li>
              Which approach did you use most – avoidant, emotional or problem
              solving?
            </li>
            <li>Which was most effective?</li>
          </ul>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 2,
    title: "Steps to solve a problem",
    description: {
      type: "content",
      content: (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Steps to solve a problem</h4>
          <p>
            Below are some steps to help you solve a problem. It is helpful to
            take the approach of problem-solving when going through these steps.
            If you are struggling to get yourself into a problem-solving frame
            of mind, consider looking at our&nbsp;
            <Link className="secondary-color" to="/self-talk">
              self talk section
            </Link>
            &nbsp; to help you explore your positive and negative thinking.
          </p>
          <p>
            Take time to go through all the steps before you make a decision.
          </p>
          <p>
            <strong className="secondary-color">
              Step 1 – Recognising a problem
            </strong>
          </p>
          <p>
            Sometimes we are not always aware of when we have a problem. Our
            thoughts and emotions can be a helpful way of letting us know when
            we have a problem. Have a think about some different areas of your
            life (e.g., your career, relationships, finances, health etc.,) and
            for each area reflect on what thoughts you have, how you’re feeling
            and your behaviour (i.e., have you noticed a difference in your
            sleeping or eating patterns). Answering these questions helps to
            find clues that we might have a problem and can identify areas in
            our life that we might want to be different.
          </p>
          <p>
            You might find looking at our page&nbsp;
            <Link
              className="secondary-color"
              to="/recognising-and-dealing-with-feelings"
            >
              Recognising and dealing with feelings
            </Link>
            &nbsp;helpful for this step.{" "}
          </p>
          <p>
            <strong className="secondary-color">
              Step 2 – Define the problem (what exactly is it)
            </strong>
          </p>
          <p>
            Be specific, for example if you are not happy at work, think about
            what exactly is causing the problem, is it the hours, the commute,
            the type of work. It can help to think about where you want to be in
            relation to your problem, i.e., how things will be different when
            you have changed something or solved your problem.
          </p>
          <p>
            <strong className="secondary-color">
              Step 3 – Seek information from reliable sources
            </strong>
          </p>
          <p>
            It’s important to seek information to help solve a problem, but we
            need this information to come from facts and not assumptions. Don’t
            guess at the outcome or rely on the opinion of others. Focus on what
            you know is factual and what you need to find out to solve your
            problem.
          </p>
          <p>
            <strong className="secondary-color">
              Step 4 – Generate a number of solutions
            </strong>
          </p>
          <p>
            Think of this like brainstorming. The more solutions you come up
            with the more options you have! Even if they seem unrealistic it’s
            worth considering all the options. When we write down anything and
            everything, we find that our ideas bounce off one another, so it
            helps us to think of more ideas.
          </p>
          <p>Here is an example of brainstorming.</p>
          <p>
            <img
              className="d-block mx-auto"
              src={imageOne}
              alt="good lives"
              width="80%"
              height="auto"
            />
          </p>
          <p>
            <strong className="secondary-color">
              Step 5 – Think of the pros and cons of each solution (costs and
              gains)
            </strong>
          </p>
          <p>
            In the&nbsp;
            <Link
              className="secondary-color"
              to="/problem-of-immediate-gratification"
            >
              Problem of Immediate Gratification
            </Link>
            &nbsp;This can be used when evaluating any decision. If the costs
            outweigh the gains then it can be an obvious sign that it is not a
            good decision. This is not just about the number of costs as some
            consequences will be more significant and impactful if they happen
            than others. You also need to ask yourself if you are choosing a
            short term ‘fix’ (for example alcohol, drugs, sex), again re-visit
            the &nbsp;
            <Link
              className="secondary-color"
              to="/problem-of-immediate-gratification"
            >
              Problem of Immediate Gratification
            </Link>
            &nbsp;module if you need to understand why you might do this.
          </p>
          <p>
            <strong className="secondary-color">
              Step 6 – Choose the best solution
            </strong>
          </p>
          <p>
            Hopefully this is clear having completed the costs and gains above,
            if not then speak to a trusted friend/family member to get a
            different view. If you can make a good case to them about the course
            of action you want to take, then you are probably making a
            well-considered decision. It is unlikely they will support you using
            a short term ‘fix’ to feel better when it doesn’t address the
            problem!
          </p>
          <p>
            <strong className="secondary-color">
              Step 7 – Plan how you will apply the solution
            </strong>
          </p>
          <p>
            Benjamin Franklin said that “By failing to prepare, you are
            preparing to fail.”
          </p>
          <p>
            A carefully thought-out plan is going to maximise your chances of
            success. It is helpful to have a clear picture of what you want to
            come out of solving this problem and how you want your life to be.
            When creating your plan, consider why you have chosen the solution
            you have, what you need to do, how you will do it, who might help or
            hinder you, when each thing on the plan needs to be done.
          </p>
          <p>
            <strong className="secondary-color">
              Step 8 – Carry out the solution
            </strong>
          </p>
          <p>Put your plan into action!</p>
          <p>
            <strong className="secondary-color">
              Step 9 – Evaluate how well it worked
            </strong>
          </p>
          <p>
            If we don’t evaluate what we did and how well it worked we can end
            up repeating the same mistakes or thinking we have solved a problem
            when we haven’t. It might be that you haven’t identified the right
            problem in the first place; for example, if you didn’t like your
            work colleagues you might change where you work but the type of work
            is still the same. So, while you have different colleagues you
            actually realise it is the type of work you do that needs to change.
          </p>

          <p>
            <strong className="secondary-color">
              Now, try this approach with one of your current problems and see
              how you get on – see if the approach helps you come up with new
              and different ways of dealing with your problem.
            </strong>
          </p>
          <hr />
          <br></br>
          <h4 className="secondary-color">Ways to avoid acting on impulse</h4>
          <p>
            Good problem solving involves the ability to stop and think and
            consider consequences. &nbsp;Here is a list of approaches that can
            assist in this and reduce the chance of you acting impulsively.
          </p>
          <ul className="content-list">
            <li>
              Don’t allow other people to pressure you into making a decision
            </li>
            <li>
              Don’t panic when faced with a difficult decision- few good
              decisions are made in haste
            </li>
            <li>
              Sleep on it&nbsp;<strong>BUT</strong>&nbsp;don’t put off important
              issues for so long that you leave it to the last minute and then
              don’t have time to consider them
            </li>
            <li>
              Check the facts- seek other people’s views but don’t rely on
              opinions
            </li>
            <li>Write things down, make lists, notes</li>
            <li>
              Never sign anything without reading it and read everything at
              least twice
            </li>
            <li>
              Don’t be afraid to say if you are unsure, to clarify your
              understanding
            </li>
            <li>Don’t make decisions after taking drink or drugs</li>
            <li>Count to ten before responding</li>
            <li>
              Ask yourself how you will feel about the situation/decision next
              week or next year
            </li>
          </ul>
          <br></br>
        </div>
      ),
    },
  },
  {
    id: 3,
    title: "Reflection",
    description: {
      type: "reflection",
      render: ({ responses, onQuestionChange }) => (
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>
            Having completed this module, identify your current level of
            confidence in the following areas (1 = no&nbsp;confidence; 2 = some
            confidence; 3 = very confident).
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>
                    <em>
                      The advantages of the problem solving approach and how to
                      apply it
                    </em>
                  </strong>
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <em>Ways to avoid acting on impulse</em>
                  </strong>
                </td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>Now, consider the following questions:</p>
          <ul className="content-list">
            <li>
              How do you intend to apply problem solving to your current life?
            </li>
            <li>
              How can problem solving help me to manage my emotions and
              behaviour?
            </li>
            <li>
              What is the link between avoidant and emotional responses to
              problems and the potential for offending behaviour?
            </li>
          </ul>
          <br></br>
          <p>
            Reflecting on your progress after completing this module, rate your
            thoughts on the following statements.
          </p>
          <ReflectionQuestion
            id="understanding_problem_solving"
            value={responses.understanding_problem_solving}
            onChange={onQuestionChange}
          >
            I now have a better understanding of the benefits of problem solving
            and how it can be applied to a range of different types of problems.
          </ReflectionQuestion>
          <ReflectionQuestion
            id="acting_on_impulse"
            value={responses.acting_on_impulse}
            onChange={onQuestionChange}
          >
            I can now identify ways to avoid acting on impulse.
          </ReflectionQuestion>
          <Link
            className="text-decoration-none"
            to="/consequences-media-impact-and-disclosure"
          >
            <div className="d-flex justify-content-end">
              <Button id="next-button" classes="btn" type="submit">
                Next Module
              </Button>
            </div>
          </Link>
        </div>
      ),
    },
  },
];

export default ProblemSolvingModuleData;
