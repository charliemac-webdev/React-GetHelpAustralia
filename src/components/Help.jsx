import Button from "./Button";

const Help = () => {
  return (
    <a
      className="link-underline link-underline-opacity-0"
      target="_blank"
      href="https://www.stopitnow.org.au/helpline"
    >
      <div className="help-button-container d-grid gap-2 col-10 mx-auto mb-4">
        <Button
          ident="help-button"
          classes="btn outline-button fw-semibold p-3 text-uppercase"
        >
          Anonymous help and support: 1800 01 1800 and live chat
        </Button>
      </div>
    </a>
  );
};
export default Help;
