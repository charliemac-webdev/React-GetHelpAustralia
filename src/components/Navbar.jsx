import logo from "../images/stopitnow.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar col-10 mx-auto">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Stop It Now!" height="137" />
      </a>
      <div className="d-flex fw-semibold">
        <ul className="nav nav-pills justify-content-end">
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
          <li className="nav-item">
            <a className="nav-link secondary-color" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              id="help-button-link"
              target="_blank"
              href="https://www.stopitnow.org.au/helpline"
            >
              <Button ident="help-button" classes="nav-link">
                HELPLINE
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
