import PropTypes from "prop-types";

const MainContent = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

MainContent.propTypes = {
  children: PropTypes.string.isRequired,
};
export default MainContent;
