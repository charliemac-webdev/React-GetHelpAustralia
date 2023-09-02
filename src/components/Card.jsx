import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div
        className="card h-100 border-orange mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title secondary-color">{props.title}</h5>
          <p className="card-text">{props.subtitle}</p>
          <Button ident="help-button" classes="btn">
            {props.children}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Card;
