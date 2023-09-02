import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div className="card border-orange mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title secondary-color">{props.title}</h5>
          <Button ident="help-button" classes="btn">
            {props.children}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Card;
