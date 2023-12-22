import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <h2 className="secondary-color">How we can help</h2>
      <p>
        <p></p>
        <p></p>
        We support people who are worried about their own online behaviour and
        who want to change. We want you to know that there is help and support
        available for you.
        <p></p>
        To access our self-help online resources, click on the headings on the
        side of this page, and work through them at your own pace. These
        sections offer valuable information about understanding your behaviour,
        well-being and self-care, and moving forward. There are exercises that
        will help you address different issues that you may be experiencing.
        Like the Stop It Now! Australia helpline, the site is free and
        anonymous.
        <p></p>
        We encourage you to look at all sections, even if you feel confident in
        them, as you may still find them helpful.
      </p>
      <p>
        If you have any concerns, questions, or would just like to talk about
        what you are going through, our non-judgemental helpline advisors are
        here to support you. You can stay anonymous and don’t have to give your
        real name or any contact details. If you’re not ready to speak to anyone
        yet, you can also use our live chat or send a secure email.
      </p>
      <p></p>
      <p></p>
      <p></p>
      <hr />
      <h2 className="secondary-color">Disclaimer</h2>
      <p>
        Before you progress further through this website, please read our
        disclaimer.
      </p>
      <p>
        The information provided throughout this website is intended for
        information, self-exploration, and self-help only. It is designed to
        increase awareness in people who may feel that they have a problem with
        sexual thoughts about children, or have thought about acting on these
        thoughts but have not already done so, or those who have offended and
        are seeking to avoid repeating this behaviour.
      </p>
      <p>
        The information contained in this website is not, and should not be
        taken as, a substitute for professional advice and/or treatment.
        Although the content of the self-help exercises is based on existing
        research, this research is ongoing and the authors would not wish to
        make any claims about its effectiveness. All the information contained
        on this website is intended to increase awareness of a difficulty, or
        potential problem, with regard to a sexual interest in children and is
        not designed to form a diagnosis. Anyone who feels that they may have a
        problem in this area should seek professional advice from a qualified
        person.
      </p>
      <p>
        The Get Help! Australia team accepts no liability for claims by, or
        damages of any kind whatsoever, to users of this website. This also
        applies to decisions or actions taken by any individuals on the basis of
        the information contained on this website. The information and
        materials, unless stated otherwise, are copyrighted by Get Help!
        Australia and are intended solely for the user’s own use. The contents,
        design and format of this website are under the ownership of Get Help!
        Australia and must not be reproduced or distributed without prior
        permission.
      </p>
      <p>
        While using the website you will remain anonymous and we will not make
        any attempts to identify you. However, even though you will remain
        anonymous, we may be legally obligated to report all information to
        relevant agencies if we believe that child abuse has occurred or is
        likely to occur. In order to remain anonymous, it is important that you
        do not provide any identifiable information to us.
      </p>
      <p>
        You can read our privacy policy{" "}
        <Link to="/privacy">
          <strong>here</strong>
        </Link>
        .
      </p>
      <p>
        Your use of this website constitutes your agreement to the provisions of
        the disclaimer.
      </p>
    </>
  );
};
export default Introduction;
