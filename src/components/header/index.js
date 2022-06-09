import { NavLink } from "react-router-dom";
import Nav from "./nav";
import "./style.css";

const Header = () => {
  let activeClassName = "active";

  return (
    <div className="header">
      <div className="nav-bar">
        <h4 className="title">Hacker News</h4>
        <div className="menu-bar">
          {Nav.map((item, index) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
