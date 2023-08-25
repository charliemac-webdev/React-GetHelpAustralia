import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="heading-container">{children}</div>
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Heading;
