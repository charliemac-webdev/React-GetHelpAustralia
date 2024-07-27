import MenuTitles from "@/data/component-data/menuTitles";
import { Link } from "react-router-dom";

const ModuleNav = () => {
  return (
    <div
      className="d-lg-flex flex-lg-row d-md-flex flex-md-row mb-4 mx-1"
      id="module-nav"
    >
      {MenuTitles.map((menu) => (
        <div key={menu.id} className="text-wrap" id="module-nav-link">
          <Link className="default-link secondary-color" to={menu.link}>
            {menu.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ModuleNav;
