import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import logo from "@assets/beMaster2.png";

export default function Header() {
  const links = {
    Home: "/home",
    Categorias: "/categories",
  };

  return (
    <header className="header">
      <div className="content">
        <div className="content__navContainer">
          <Link className="content__navContainer__logo" to="/home">
            <img src={logo} alt="Logo" className="content__logo" />
          </Link>

          <nav className="content__navContainer__links">
            {Object.entries(links).map(([key, value], index) => (
              <NavLink
                key={index}
                to={value}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {key}
              </NavLink>
            ))}
          </nav>
        </div>

        <Link to="/" className="content__logout">
          Log Out
        </Link>
      </div>
    </header>
  );
}
