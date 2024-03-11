import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setCategories } from "../../rtk/userSlice";
import "./Header.scss";
import logo from "@assets/beMaster2.png";

export default function Header() {
  const dispatch = useDispatch();

  const links = {
    Home: "/home",
    Categorias: "/categories",
  };

  function logOut() {
    dispatch(setEmail(""));
    dispatch(setCategories(""));
  }

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

        <Link to="/" className="content__logout" onClick={logOut}>
          Log Out
        </Link>
      </div>
    </header>
  );
}
