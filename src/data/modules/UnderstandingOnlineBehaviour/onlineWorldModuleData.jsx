import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import pictureSix from "../../../images/diagrams-offlineme.gif";
import pictureSeven from "../../../images/diagrams-onlineme.gif";
import pictureFive from "../../../images/download-1-1.png";
import pictureThree from "../../../images/download-1.png";
import pictureFour from "../../../images/download-2.png";
import pictureTwo from "../../../images/download.png";
import pictureOne from "../../../images/triple-a-engine.png";

const OnlineWorldModuleData = [
  {
    id: 1,
    title: "Online world",
    description: (
      <>
        <br></br>
        <p>
          Sexual offending happens in the offline and online world. But some
          people we work with often tell us they would not have offended without
          the internet, apps or smartphones.
        </p>
        <p>
          A huge majority of people have access to the internet but not everyone
          offends online.
        </p>
        <p>
          This means that the internet doesn’t cause offending; people who have
          offended online made a choice to do so. But it is important to
          consider how the internet might make offending easier for some people.
        </p>
        <br />
        <h4 className="secondary-color">Sex and the internet</h4>
        <p>
          For some people the internet can feel like an good place to engage in
          sexual behaviour. But why is that? Some people think the ‘Triple A
          Engine’ helps answer this question.
        </p>
        <br></br>
        <h5 className="secondary-color">'Triple A Engine' (Cooper, 1998)</h5>
        <img src={pictureOne} alt="tripe-a-engine" height="100%" width="auto" />
        <br></br>
        <br></br>
        <ul className="content-list">
          <li>
            Accessibility: pornography and sexual experiences are easily
            accessible online, anytime, day or night.
          </li>
          <li>
            Anonymity: people might feel that they are anonymous and unknown
            online. This might result in a person detaching their online
            behaviour from their offline life and identity.
          </li>
          <li>
            Affordability: pornography and sexual experiences online may come at
            a low cost or free.
          </li>
          <hr />
          <br></br>
          <h4 className="secondary-color">Exercise 1: Sex and the internet</h4>
          <p>
            What other aspects of the internet might make it feel like an
            attractive place to engage in sexual activity? Use the template to
            think about why the internet became a place for sexual behaviour for
            you.
          </p>
          <br />
          <p>Think about the examples below:</p>
        </ul>
        <img src={pictureTwo} alt="Computer" />
        <p>
          Now that you have identified why you used the internet as a place for
          sexual behaviour, it is important to think about why that might be a
          problem in some circumstances.
        </p>
        <br />
        <p>
          Think about the ideas you had above, but now think about what the
          difficulties with these ideas might be. For example:
        </p>
        <img src={pictureThree} alt="computer-1" />
        <p>
          <a
            href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/exercise1sexandtheinternet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <u>Download and edit pdf template</u>
            </b>
          </a>
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Online behaviours",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Online behaviour</h4>
        <p>
          Some people we work with say they behaved in a way online that they
          wouldn’t have done in the offline world.
        </p>
        <br />
        <h4 className="secondary-color">The panopticon</h4>
        <p>
          The panopticon is a design of building meaning that one person can see
          all those in the building.
        </p>
        <img src={pictureFour} alt="panopticon" />
        <p>
          It is important to think about how we behave when we feel we might be
          being observed, compared to how we behave when we think no one is
          watching.
        </p>
        <p>
          This is the same with online behaviour and how people can feel like
          they are anonymous and not being watched by others when they are
          online. This can result in people feeling detached from their online
          behaviour, as if it is not part of their true self.
        </p>
        <p>
          How does this relate to you? How was your online behaviour different
          from your offline behaviour? Think about how you behave on social
          media, what you might look at online, who you might talk to, and how
          you might talk to them.
        </p>
        <p>
          There will also be ways you behave online that are the same as
          offline, and it is important to think about these too. This shows that
          the online and offline world are not completely separate.
        </p>
        <p>
          For example, did you look for sexual material online but not offline?
          Did you communicate with people online that you did not or would not
          offline? Did you communicate in the same way with others online and
          offline, for example in your use of language and your level of
          politeness?
        </p>
        <hr></hr>
        <br></br>
        <h4 className="secondary-color">
          Exercise 2: My online and offline behaviour
        </h4>
        <img src={pictureFive} alt="Offline and Online Behaviour" />
        <br></br>
        <p>Think about:</p>
        <ul className="content-list">
          <li>Why did you behave differently online than you did offline?</li>
          <li>
            Did your online behaviour have an impact on your offline behaviour?
            How?
          </li>
          <li>
            Would you like your behaviour online to also happen offline? Why?
          </li>
          <li>
            How does considering this help you manage your future online
            behaviour?
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Online relationships",
    description: (
      <>
        <br></br>
        <h4 className="secondary-color">Online relationships</h4>
        <p>
          We all have an idea of how we come across to other people. How we act
          can be affected by the situation we are in and the people we are with.
        </p>
        <p>
          Think about how you might present yourself differently at work
          compared to when you’re with friends and how this might be different
          again when with family.
        </p>
        <p>
          Some people feel that they can be very different online compared to
          how they are ‘in the real world’.
        </p>
        <hr></hr>
        <br></br>
        <h4 className="secondary-color">Offline versus online</h4>
        <p>
          How would you describe yourself&nbsp;offline? Make a note of all the
          words below and any others that describe you.
        </p>
        <p>
          <img src={pictureSix} alt="Offline me" />
        </p>
        <p>
          How would you describe yourself&nbsp;online? Make a note of all the
          words below and any others that describe you.
        </p>
        <p>
          <img src={pictureSeven} alt="online me" />
        </p>
        <p>
          What differences are there between your online and offline selves? Are
          there qualities about your online self that you like and wish you
          could transfer into the real world? Make a note of them and they can
          be a starting point for goals you set in planning for a good life.
        </p>
        <hr></hr>
        <br></br>
        <h4 className="secondary-color">Why are we different online?</h4>
        <p>
          It is often easier to relate to others online. They might share our
          interests, accept us more easily and make us feel important or
          powerful. Unless we choose to let others online see us as we really
          are, we can pretend to be whoever we want to be. Online relationships
          in some ways make fewer demands.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Exercise 3",
    description: (
      <>
        <div>
          <br></br>
          <h4 className="secondary-color">
            So what is the problem with online relationships?
          </h4>
          <p>
            When we engage with people online and form friendships, it is
            usually around something specific, for example the sexual images of
            children. It means that a lot of time is then spent focusing on that
            particular topic, or things related to it, for example other
            software or security. While the friendships that we form online are
            very real, they have aspects to them that are very different to
            those offline.
          </p>
          <p>
            For some people their online relationships act as a substitute for
            real world social interaction. The ease, emotional safety and
            superficial nature of some people’s online relationships, both
            sexual and non-sexual, are often not as fulfilling as the more
            rounded experience offered by people’s offline relationships. Their
            online relationships are often shorter and less ‘real’.
          </p>
          <p>
            This can be especially true of people’s online sexual relationships.
            Here the focus can easily become just about sexual thing. For many
            people this is manageable, but for others the desire for short-term
            sexual pleasure means that they allow themselves to develop patterns
            of online sexual behaviour that are damaging to both themselves and
            others. Many of these activities are legal but others are not.&nbsp;
            They might include:
          </p>
          <ul className="content-list">
            <li>
              chatting to adults about sex with children online such as sharing
              fantasies
            </li>
            <li>chatting to children about sex online</li>
            <li>
              using smartphones, apps or webcams to encourage children to engage
              in sexual behaviour
            </li>
            <li>
              exposing children to sexual behaviour through smartphones, apps or
              webcams
            </li>
            <li>
              grooming children with the intention of meeting them offline and
              sexually abusing them
            </li>
            <li>voyeurism (hidden cameras)</li>
          </ul>
          <hr />
          <br></br>
          <p>
            Think about your online relationships and answer the following
            questions:
          </p>
          <h4 className="secondary-color">
            Exercise 3: Online and offline relationships
          </h4>
          <p>
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/online-relationships-exercise-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Download and edit pdf template</strong>
            </a>
            .
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th></th>
                <th>Online relationships</th>
                <th>Offline relationships</th>
              </tr>
              <tr>
                <td>
                  Write down how many significant people you have in your online
                  and offline world.
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>What good things do I get out of these?</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>What gaps are they filling in my life?</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>What do these relationships mean to me?</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>What do I enjoy about chatting to these people?</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>What do you notice about the online and offline relationships?</p>
          <p>
            Are there some things that you would only discuss or do online? Why
            is this?
          </p>
          <p>
            How does this make you feel? Do you see your online relationships
            differently now?
          </p>
          <br></br>
          <h4 className="secondary-color">
            Some of the dangers of online relationships
          </h4>
          <ul className="content-list">
            <li>
              You don’t get challenged – talking to like-minded people means
              that you are unlikely to be challenged in what you say.
            </li>
            <li>
              Talking to other people can help you to justify what you’re doing,
              for example “they’re doing it, so why shouldn’t I?”<em>.</em>
            </li>
            <li>
              It might give you the opportunity to do things that in the offline
              world would make you feel very uncomfortable.
            </li>
          </ul>
          <br></br>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Exercises 4 and 5",
    description: (
      <>
        <div>
          <br></br>
          <h4 className="secondary-color">
            Exercise 4: What do I look for in real-life relationships?
          </h4>
          <p>
            Using the table below, write down the things you value about
            real-life relationships and then what you could do to achieve these.
          </p>
          <br></br>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Value</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <em>Intimacy</em>
                </td>
                <td>
                  <em>Express how I feel more</em>
                </td>
              </tr>
              <tr>
                <td>
                  <em>Time together</em>
                </td>
                <td>
                  <em>Join a weekly salsa class together</em>
                </td>
              </tr>
              <tr>
                <td></td>
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
            <a
              href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/online-relationships-exercise-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Download and edit pdf template</strong>
            </a>
            .
          </p>
          <hr />
          <br></br>
          <p>
            Some people don’t have as many offline relationships as they would
            like. If this applies to you then this will be covered in more
            detail in the{" "}
            <strong>
              <a href="https://www.stopitnow.org.uk/concerned-about-your-own-thoughts-or-behaviour/concerned-about-use-of-the-internet/self-help/moving-forward/building-a-good-life/">
                planning for a good life module
              </a>
            </strong>
            .
          </p>
          <p>
            If you feel lonely then the following exercise can be helpful to
            start thinking about how you have been coping with those feelings
            and how you can cope more positively in the future.
          </p>
          <hr />
          <br></br>
          <h4 className="secondary-color">
            Exercise 5: How do I cope with isolation or loneliness?
          </h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Situation or event</th>
                <th>
                  Negative<p></p>
                  <p>Strategy or behaviour</p>
                  <p>Including thoughts and feelings</p>
                </th>
                <th>
                  Positive<p></p>
                  <p>Strategy or behaviour</p>
                  <p>Including thoughts and feelings</p>
                </th>
              </tr>
              <tr>
                <td>
                  <em>Living alone. Feeling isolated.</em>
                </td>
                <td>
                  <em>
                    Going online into chat rooms, engaging in sexual chat. Felt
                    excited at first but afterwards guilty and ashamed.
                  </em>
                </td>
                <td>
                  <em>
                    Take Spanish lessons. Feel scared at first session but
                    afterwards happy.
                  </em>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>
              <a
                href="https://www.stopitnow.org.uk/wp-content/uploads/2020/01/online-relationships-exercise-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download and edit pdf template
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
    id: 6,
    title: "Reflection",
    description: (
      <>
        <div>
          <br></br>
          <h4 className="secondary-color">Reflection</h4>
          <p>Think about these questions:</p>
          <ul className="content-list">
            <li>
              Which part of the module has had the greatest impact on your
              understanding? Why?
            </li>
            <li>
              Has anything from this module prompted or encouraged you to take
              action around your behaviour? If so, what?
            </li>
            <li>
              Has this module raised any further questions for you or made you
              want to explore any ideas further? What steps do you plan to take
              to seek out this information?
            </li>
          </ul>

          <br></br>
        </div>
        <br />
        <Link to="/self-help-fantasy">
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

export default OnlineWorldModuleData;
