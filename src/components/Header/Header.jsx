import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import logo from "@assets/beMaster2.png";

export default function Header() {
  const links = {
    Home: "/home",
    Categorias: "/categories",
    // Recientes: "/watched",
  };

  return (
    <header className="header">
      <div className="header__navContainer">
        <Link className="header__navContainer__logo" to="/home">
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>

        <nav className="header__navContainer__links">
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

      <button type="button" className="header__logout">
        Log Out
      </button>
    </header>
  );
}
