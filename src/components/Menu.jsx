import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(id) {
    setIsOpen(id !== isOpen ? id : null);
  }

  return (
    <div className="main-section-menu">
      <h5 className="secondary-color">
        <Link to="/">Introduction</Link>
      </h5>
      <MenuItem key={1101}>
        <div className="MenuItem-title" onClick={() => handleToggle(1101)}>
          <h5 className="secondary-color">Get the facts</h5>
          <p className="MenuItem-icon">{1101 === isOpen ? "-" : "+"}</p>
        </div>
        {1101 === isOpen && (
          <ul>
            <li>
              <Link to="/GetTheFactsIntro">Introduction</Link>
            </li>
            <li>
              <Link to="/GetTheFactsLaw">Law</Link>
            </li>
            <li>
              <Link to="/GetTheFactsGrey">No 'grey area'</Link>
            </li>
            <li>
              <Link to="/GetTheFactsConsequences">Consequences</Link>
            </li>
            <li>
              <Link to="/GetTheFactsInvestigation">
                If you are being investigated for internet sexual offences
              </Link>
            </li>
          </ul>
        )}
      </MenuItem>
      <MenuItem key={1102}>
        <div className="MenuItem-title" onClick={() => handleToggle(1102)}>
          <h5 className="secondary-color">Why change</h5>
          <p className="MenuItem-icon">{1102 === isOpen ? "-" : "+"}</p>
        </div>
        {1102 === isOpen && (
          <ul>
            <li>
              <Link to="/WhyChangeIntro">Introduction</Link>
            </li>
            <li>
              <Link to="/WhyChangeStrengths">Identifying strengths</Link>
            </li>
          </ul>
        )}
      </MenuItem>
      <MenuItem key={1103}>
        <div className="MenuItem-title" onClick={() => handleToggle(1103)}>
          <h5 className="secondary-color">Self-awareness</h5>
          <p className="MenuItem-icon">{1103 === isOpen ? "-" : "+"}</p>
        </div>
        {1103 === isOpen && (
          <ul>
            <li>Introduction</li>
            <li>Online cognition scale</li>
            <li>Internet and values</li>
          </ul>
        )}
      </MenuItem>
      <MenuItem key={1104}>
        <div className="MenuItem-title" onClick={() => handleToggle(1104)}>
          <h5 className="secondary-color">Self-help</h5>
          <p className="MenuItem-icon">{1104 === isOpen ? "-" : "+"}</p>
        </div>
        {1104 === isOpen && (
          <ul>
            <li>Your well-being and self-care</li>
            <li>Understanding the behaviour</li>
            <li>Moving Forward</li>
          </ul>
        )}
      </MenuItem>
      <h5 className="secondary-color">
        <Link to="/UsefulResources">Useful resources</Link>
      </h5>
    </div>
  );
};

export default Menu;
