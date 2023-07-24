import Accordion from "react-bootstrap/Accordion";

const Aside = () => {
  return (
    <section className="section container-fluid" id="aside">
      <div className="main-container main-container-one">
        <h2 className="secondary-color mb-3">
          Concerned about your online behaviour
        </h2>
        <div className="main-row row gx-5">
          <div className="main-col-1 col-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <a className="p-3 link-underline link-body-emphasis link-underline-opacity-0">
                  Introduction
                </a>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Get the facts</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction</li>
                    <li>Law</li>
                    <li>No 'grey area'</li>
                    <li>Consequences</li>
                    <li>
                      If you are being investigated for internet sexual offences
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why Change?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction</li>
                    <li>Identifying strengths</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Self-awareness</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction</li>
                    <li>Online cognition scale</li>
                    <li>Internet and values</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Self-help</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Your well-being and self-care</li>
                    <li>Understanding the behaviour</li>
                    <li>Moving Forward</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <a className="p-3 link-underline link-body-emphasis link-underline-opacity-0">
                  Useful resources
                </a>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="main-col-2 col-8">
            <h2 className="secondary-color">How we can help?</h2>
            <p>
              Our confidential Stop It Now! helpline supports anyone with a
              worry about preventing child sexual abuse. Some people who contact
              us have been arrested and some haven’t. Some have committed a
              crime and some haven’t. Some people contact us because they are
              worried about their sexual thoughts about children even though
              they don’t think they will act on them.
            </p>

            <p>
              The experienced advisors on our <b>confidential helpline</b> can
              support you with any concerns you have and if you need help as you
              work through these webpages. You don’t have to give your real
              name, location or any contact details. If you’re not ready to
              speak to anyone yet, you can also <b>get in touch with us</b>{" "}
              online.
            </p>

            <p>
              Read about the programmes we offer for{" "}
              <b>individuals who have offended online</b> and their{" "}
              <b>partners, family and friends.</b>
            </p>
            <h2 className="secondary-color">Help with research</h2>
            <p>
              If you are over 18 you could help with academic research.
              <br />
              <br />
              If you have been sexually communicating with children online,
              please consider completing this <b>online survey.</b>
            </p>
            <hr />
            <p>
              Pivotal Recovery are looking for people to take part in a free,
              confidential and anonymous pilot study to explore the efficacy of
              their online recovery programme for sex and porn addiction. If
              your sexual behaviours feel compulsive or addictive, you can find
              out more about the pilot study and how to join here.
            </p>
            <hr />
            <p>
              Use our{" "}
              <b>
                self-help pages to support you to stop and change your behaviour
              </b>{" "}
              for good.
            </p>

            <p>
              <b>Understand your own behaviour</b> and what you might need to
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aside;
