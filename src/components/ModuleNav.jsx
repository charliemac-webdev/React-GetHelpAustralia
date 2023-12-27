import React from "react";
import { Link } from "react-router-dom";
import MenuTitles from "../data/component-data/menuTitles";

const ModuleNav = () => {
  return (
    <div className="d-flex flex-row" id="module-nav">
      {MenuTitles.map((menu) => (
        <div>
          <Link
            key={menu.id}
            to={menu.link}
            className="nav-link"
            id="module-nav-link"
          >
            {menu.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ModuleNav;
