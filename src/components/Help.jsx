import Button from "./Button";

const Help = () => {
  return (
    <div className="help-button-container d-grid gap-2 col-9 mx-auto mb-4">
      <Button
        ident="help-button"
        classes="btn outline-button fw-semibold p-3 text-uppercase"
      >
        Anonymous help and support: 1800 01 1800 and live chat
      </Button>
    </div>
  );
};
export default Help;
