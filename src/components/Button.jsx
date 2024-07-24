const Button = ({ classes, children, ...rest }) => {
  return (
    <>
      <button className={classes} {...rest}>
        {children}
      </button>
    </>
  );
};
export default Button;
