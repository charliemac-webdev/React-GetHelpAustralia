import React from "react";
import { Link } from "react-router-dom";
import MenuTitles from "../data/component-data/menuTitles";

const ModuleNav = () => {
  return (
    <div className="d-flex flex-row">
      <div>
        {MenuTitles.map((menu) => (
          <Link key={menu.id} to={menu.link} className="nav-link">
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModuleNav;
