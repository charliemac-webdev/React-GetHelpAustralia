import Button from "./Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <a className="default-link" href="https://google.com.au">
        <div className="d-grid gap-2">
          <Button id="leave-button" classes="btn fw-semibold p-2">
            Click here to quickly leave
          </Button>
        </div>
      </a>
      <Navbar />
    </>
  );
};

export default Header;
