import logo from "../images/stopitnow.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar col-lg-10 mx-auto">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          target="_blank"
          href="https://www.stopitnow.org.au"
        >
          <img src={logo} alt="Stop It Now!" height="137" />
        </a>
        <div className="fw-semibold">
          <ul className="nav nav-pills justify-content-lg-end">
            <li className="nav-item">
              <a
                className="nav-link secondary-color"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link secondary-color"
                target="_blank"
                href="https://www.stopitnow.org.au/helpline"
              >
                HELP AND SUPPORT
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link secondary-color" href="#">
                ABOUT
              </a>
            </li> */}
            <li className="nav-item">
              <a
                id="help-button-link"
                target="_blank"
                href="https://www.stopitnow.org.au/helpline"
              >
                <Button id="help-button" classes="nav-link">
                  HELPLINE
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
