import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdExpandMore } from "react-icons/md";

const UnderstandingYourOnlineBehaviourData = () => {
  return (
    <div>
      <p>
        It is positive that you are motivated to understand your online
        behaviour. This work is not always easy, but it is important. As you
        work through these modules, remember it can be helpful to take breaks,
        and remind yourself of your motivations to continue this positive work.
        The Get Help! Australia modules can help you reflect on your learning
        and explore how you apply this learning to prevent illegal online
        behaviours.
      </p>
      <p>
        Some people who have engaged in online sexual behaviour involving
        children believe that there is a ‘grey area’ between what is legal and
        illegal. There is not - it is important to recognise that this behaviour
        is illegal and harmful.
      </p>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: "#e6edf5",
            }}
          >
            <h6 className="secondary-color">Viewing Sexual Images</h6>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Viewing Sexual Images</h4>
              <p>
                Child sexual abuse material (CSAM) is any content that
                sexualises and takes unfair advantage of a child, as well as
                child sexual abuse material that shows their sexual assault.
                Viewing child sexual abuse material (CSAM) is illegal. If the
                sexual abuse of a child is recorded, that recording is illegal
                online content. Content that encourages or instructs people to
                sexually or phsyically abuse a child or exploit or groom them is
                also child sexual abuse material (CSAM). If you are unsure about
                the age of someone in an image then you should not view it. Not
                knowing the age is not an excuse.
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
            <h6 className="secondary-color">Sexual Drawings</h6>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Sexual Drawings</h4>
              <p>
                Sexual drawings of children or computer-generated sexual images
                of children are also illegal in Australia. Any sexual drawings
                of children (including Manga) that shows sexual abuse or
                sexualised children is also illegal to view or possess in
                Australia.
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
            <h6 className="secondary-color">Sexual Communication</h6>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <h4 className="secondary-color">Sexual Communication</h4>
              <p>
                If you are talking sexually to people online, you should always
                ask their age. If anyone says they are under 18 years of age you
                should stop the conversation immediately. It doesn’t matter if
                you think they are older or that it is part of a fantasy. This
                is illegal and the Police will always prosecute if you continue
                to talk sexually to someone who states they are under 18 years
                of age. If you are in a ‘position of trust’ (such as a teacher,
                youth worker, police officer, social worker, doctor, sport or
                religious coach/instructor) it is illegal to sexually
                communicate with that child.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <br />
      <br />
      <h4 className="secondary-color">Understanding Behaviour</h4>
      <p>
        This section will help you understand how you behave online, why you do
        it, and what might be a problem. It will help you see if you’re doing
        things that could hurt you or others. When you finish the modules, it
        will help you see how your online actions affect your life and
        relationships. This can lead to using the internet in a healthier and
        more responsible way, so you don’t harm anyone and prevent you from
        offending.
      </p>
      <br></br>
    </div>
  );
};

export default UnderstandingYourOnlineBehaviourData;
