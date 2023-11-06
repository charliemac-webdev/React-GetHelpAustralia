const Button = ({ classes, ident, children, ...rest }) => {
  return (
    <>
      <button className={classes} id={ident} {...rest}>
        {children}
      </button>
    </>
  );
};
export default Button;
