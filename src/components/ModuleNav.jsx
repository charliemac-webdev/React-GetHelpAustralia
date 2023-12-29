import { Link } from "react-router-dom";
import MenuTitles from "../data/component-data/menuTitles";

const ModuleNav = () => {
  return (
    <div className="d-flex flex-row" id="module-nav">
      {MenuTitles.map((menu) => (
        <div key={menu.id} className="text-wrap" id="module-nav-link">
          <Link to={menu.link}>{menu.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ModuleNav;
