import { Link } from "react-router-dom";
import MenuTitles from "../data/component-data/menuTitles";

const Menu = () => {
  return (
    <>
      <div className="main-section-menu">
        <div>
          {MenuTitles.map((menu) => (
            <h5 key={menu.id} className="secondary-color">
              <Link to={menu.link}>{menu.title}</Link>
            </h5>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
