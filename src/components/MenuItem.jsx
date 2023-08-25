import PropTypes from "prop-types";

const MenuItem = ({ children }) => {
  return <>{children}</>;
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
};
export default MenuItem;
