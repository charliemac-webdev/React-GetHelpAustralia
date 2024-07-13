import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

import Button from "@/components/Button";
import ReflectionQuestion from "@/components/ReflectionQuestion";

import imageOne from "@/images/good-lives.png";
import document from "@/documents/Good Life Plan.pdf";

const BuildingAGoodLifeModuleData = [
  {
    id: 1,
    title: "Good Lives Model",
    description: (
      <div className="tab-main-content">
        <br></br>
        <h4 className="secondary-color">Good Lives Model</h4>
        <p>
          The Good Lives Model tells us that everyone needs to feel satisfied in
          a few different areas of their life to feel good. Sometimes, if we
          don’t find good, healthy ways to feel satisfied, we might use
          unhelpful or harmful ways instead. These might help us feel better in
          the moment but, over time, these strategies can hurt other people and
          ourselves. The model breaks down the states of mind, personal
          characteristics, activities or experiences that are sought by people
          and, if achieved, they are likely to increase well-being.
        </p>
        <p>
          <img
            className="d-block mx-auto"
            src={imageOne}
            alt="good lives"
            width="90%"
            height="auto"
          />
        </p>
        <p>Find out more about each section below:</p>
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
              <h6 className="secondary-color">Creativity</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Creativity</h4>
              <p>
                It is important that we have activities in our lives that we
                feel good at. In order to feel good about ourselves, we need to
                have a sense of achievement. This can also help with our
                self-esteem. This doesn’t mean actually being ‘the best’ in
                comparison to others, but feeling that we are doing the best we
                can in whatever we do.
              </p>
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
              <h6 className="secondary-color">Excellence in work</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Excellence in work</h4>
              <p>
                This can also involve feeling like we have mastered activities
                and skills-training that are important to us in the workplace.
                It can include creativity, like being able to create or make new
                things, come up with new ideas, or be artistic or practical in
                some way.
              </p>
            </div>
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
              <h6 className="secondary-color">Excellence in play</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Excellence in play</h4>
              <p>
                This is about how people spend their time and the range of
                activities in which they are involved. It is important for
                people to see that all activities are worthwhile and for people
                to have activities which offer elements of fun, excitement,
                challenge and achievement. This might involve hobbies, work, and
                exercise. This is also about achieving a balance of activities,
                for example, work/life balance.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel4-content"
            id="panel4-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Spirituality</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Spirituality</h4>
              <p>
                Whoever we are, it’s important for us to feel like we understand
                our purpose in life. This could stem from religion but it
                doesn’t have to. This could be something like ‘being a good
                friend’, ‘being a good brother/sister’ or contributing to your
                community in some way.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel5-content"
            id="panel5-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Inner peace</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Inner peace</h4>
              <p>
                This is about feeling peaceful and comfortable. It means that we
                should feel free from difficult feelings, and that we should
                know how to deal with these feelings if we have them. This also
                means feeling safe; physically and emotionally.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel6-content"
            id="panel6-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Life</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Life</h4>
              <p>
                This is about how we live our lives in terms of our physical
                health (exercise, diet, feeling comfortable with our appearance)
                and emotional health (looking after ourselves inside).
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel7-content"
            id="panel7-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Relatedness</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Relatedness</h4>
              <p>
                This is about having intimate, romantic and familial
                relationships.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel8-content"
            id="panel8-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Excellence in agency</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Excellence in agency</h4>
              <p>
                This is about feeling like we can manage and control our lives.
                The ability to make decisions and feel as though we have a say
                in our lives is very important. This is also about being able to
                manage the way we behave and the way we feel, for example,
                knowing what to do if we have had a bad day. This is also about
                being able to make decisions and solve everyday problems in
                life.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel9-content"
            id="panel9-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Knowledge</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Knowledge</h4>
              <p>
                This is about having knowledge and understanding so we feel
                informed about our world, so that we feel we understand what is
                going on around us. Knowledge can come from life experience,
                what we learn at school, from books or from the media. It does
                not mean ‘being clever’, but feeling as though we know what we
                need to in order to feel alright in the world.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel10-content"
            id="panel10-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Community</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Community</h4>
              <p>
                This is about having a sense of belonging and responsibility to
                the social group we live in. This also includes a sense of
                fitting in. It is important that we have a group of people where
                we feel we fit. Belonging might stem from friends, family,
                colleagues, a religious group or another group of people.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel11-content"
            id="panel11-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <p>
              <h6 className="secondary-color">Pleasure</h6>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Pleasure</h4>
              <p>
                Feeling good in the here and now. This is the ability to anchor
                ourselves in the moment and have gratitude for what we have,
                rather than worrying about the past or the future.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <br />
        <p>
          We have developed the following{" "}
          <a
            className="secondary-color"
            href={document}
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Good Life Plan</u>
          </a>{" "}
          to help you work out what needs are important to you, how you meet
          them and set goals for living a healthy life.
        </p>
        <br></br>
      </div>
    ),
  },
  {
    id: 2,
    title: "Beware of obstacles",
    description: (
      <>
        <div className="tab-main-content">
          <br></br>
          <h4 className="secondary-color">Beware of obstacles</h4>
          <p>
            Sometimes it can be really hard to meet your needs and there can be
            things that get in the way.
          </p>
          <p>
            You might then try to meet your needs through unhelpful ways,
            particularly if these are things that you have done before, because
            we often go back to old habits, particularly in times of stress.
          </p>
          <p>Here’s an example</p>
          <p>
            Tony has previously been convicted of internet offences. Tony lives
            alone and is quite isolated. However, he places great emphasis on
            social contact/activity which he used to meet through online chat.
            Tony has decided to meet this need by volunteering to undertake work
            in a community garden where he would meet a lot of new people.
          </p>
          <p>
            Continuing with the example of Tony – he may face barriers to
            meeting his need for connection as his restrictions, due to previous
            convictions, mean he can’t volunteer in the garden because a lot of
            young people spend time there. Tony has the potential to relapse
            into inappropriate use of the Internet in order to meet other people
            again. However, Tony was aware this might be a problem and had
            planned ahead so he had a backup plan. He thought that if he was
            unable to do voluntary work in the garden he would be able to work
            for the local animal shelter. Tony was able to start walking dogs
            for the charity and met other volunteers so still got a chance to
            meet his need for socialising, plus he started doing more exercise
            so felt healthier.
          </p>
          <br></br>
          <h4 className="secondary-color">How do I plan for obstacles?</h4>
          <p>
            Some obstacles are easier to overcome than others. To overcome them
            you might need to get help or support from professionals or
            specialist organisations (such as counselling to deal with grief or
            other negative life experiences).
          </p>
          <p>
            Some obstacles can take a long time and will be hard work to
            overcome, for example, building self-confidence. But obstacles can
            be beaten and it is important to keep positive when tackling
            obstacles.
          </p>
          <p>
            The skill of brainstorming can help us overcome obstacles as it
            helps us to think outside the box (or from a new perspective!). You
            can then pick the best option for you, you may have to try a few
            before you find one that works but that’s why it’s great to have
            thought of so many ideas. See our{" "}
            <Link className="secondary-color" to="/problem-solving">
              <u>problem-solving section</u>
            </Link>{" "}
            on how to brainstorm.
          </p>
          <p>
            If you have any concerns, questions, or would just like to talk
            about what you are going through, our non-judgemental{" "}
            <a
              className="secondary-color"
              href="https://www.stopitnow.org.au/helpline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>helpline</u>
            </a>{" "}
            advisors are here to support you. You can stay anonymous and don’t
            have to give your real name or any contact details.
          </p>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Reflection",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Reflection</h4>
        <p>
          Reflecting on your progress after completing this module, rate your
          thoughts on the following statements.
        </p>
        <br />
        <ReflectionQuestion>
          I now have a better understanding of how someone could meet their
          needs in a harmful way.
        </ReflectionQuestion>
        <ReflectionQuestion>
          I now know some helpful strategies to meet my needs in a new and
          healthy way.
        </ReflectionQuestion>
        <Link className="text-decoration-none" to="/">
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

export default BuildingAGoodLifeModuleData;
