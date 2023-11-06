import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(id) {
    setIsOpen(id !== isOpen ? id : null);
  }

  return (
    <>
      <div className="main-section-menu">
        <div>
          <h5 className="secondary-color">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Introduction
            </Link>
          </h5>
          <Link to="/get-the-facts-introduction">
            <MenuItem key={1101}>
              <div
                className="MenuItem-title"
                onClick={() => handleToggle(1101)}
              >
                <h5 className="secondary-color">Get the facts</h5>
                <p className="MenuItem-icon">{1101 === isOpen ? "-" : "+"}</p>
              </div>
              {1101 === isOpen && (
                <ul>
                  <li className="menu-link">
                    <Link to="/get-the-facts-law">Law</Link>
                  </li>
                  <li className="menu-link">
                    <Link to="/get-the-facts-no-grey-area">No 'grey area'</Link>
                  </li>
                  <li className="menu-link">
                    <Link to="/get-the-facts-consequences">Consequences</Link>
                  </li>
                  <li className="menu-link">
                    <Link to="/get-the-facts-if-being-investigated">
                      If you are being investigated for internet sexual offences
                    </Link>
                  </li>
                </ul>
              )}
            </MenuItem>
          </Link>
          <Link to="/why-change-introduction">
            <MenuItem key={1102}>
              <div
                className="MenuItem-title"
                onClick={() => handleToggle(1102)}
              >
                <h5 className="secondary-color">Why change</h5>
                <p className="MenuItem-icon">{1102 === isOpen ? "-" : "+"}</p>
              </div>
              {1102 === isOpen && (
                <ul>
                  <li className="menu-link">
                    <Link to="/why-change-strengths">
                      Identifying strengths
                    </Link>
                  </li>
                </ul>
              )}
            </MenuItem>
          </Link>
          <Link to="/self-awareness-introduction">
            <MenuItem key={1103}>
              <div
                className="MenuItem-title"
                onClick={() => handleToggle(1103)}
              >
                <h5 className="secondary-color">Self-awareness</h5>
                <p className="MenuItem-icon">{1103 === isOpen ? "-" : "+"}</p>
              </div>
              {1103 === isOpen && (
                <ul>
                  <Link to="/online-cognition-scale">
                    <li className="menu-link">Online cognition scale</li>
                  </Link>
                  <Link to="/internet-and-values">
                    <li className="menu-link">Internet and values</li>
                  </Link>
                </ul>
              )}
            </MenuItem>
          </Link>
          <Link to="/self-help-introduction">
            <MenuItem key={1104}>
              <div
                className="MenuItem-title"
                onClick={() => handleToggle(1104)}
              >
                <h5 className="secondary-color">Self-help</h5>
                <p className="MenuItem-icon">{1104 === isOpen ? "-" : "+"}</p>
              </div>
              {1104 === isOpen && (
                <ul>
                  <li className="menu-link">
                    <Link to="/self-help-your-wellbeing-and-self-care">
                      Your well-being and self-care
                    </Link>
                  </li>
                  <li className="menu-link">
                    <Link to="/self-help-understanding-the-behaviour">
                      Understanding the behaviour
                    </Link>
                  </li>
                  <li className="menu-link">
                    <Link to="/self-help-moving-forward">Moving Forward</Link>
                  </li>
                </ul>
              )}
            </MenuItem>
          </Link>
          <h5 className="secondary-color">
            <Link to="/useful-resources">Useful resources</Link>
          </h5>
          <br />
        </div>
      </div>
    </>
  );
};

export default Menu;
