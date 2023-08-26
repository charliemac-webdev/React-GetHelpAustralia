import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <>
      <div className="main-section-heading">{children}</div>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Heading;
