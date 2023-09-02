const Button = (props) => {
  return (
    <>
      <button className={props.classes} id={props.ident}>
        {props.children}
      </button>
    </>
  );
};
export default Button;
