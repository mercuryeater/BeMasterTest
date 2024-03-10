import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setEmail, setCategories } from "../../rtk/userSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "@assets/beMaster2.png";
import db from "../../../db.json";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z][\w-]*(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
  };
  const [error, setError] = useState("");

  function userLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData);

    const { email, password } = loginData;

    if (!validateEmail(email)) {
      setError("El email ingresado no es válido.");
      return;
    }

    const user = db.users.find(
      (user) => user.email === email && user.password === password
    );

    console.log("Login attempt: " + JSON.stringify(loginData));
    if (user) {
      dispatch(setEmail(email));
      dispatch(setCategories(user.categories));
      navigate("/home");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  }

  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="logoBeMaster" />
      <div className="login__container">
        <form className="login__form" onSubmit={userLogin}>
          {error && <p className="login__error">{error}</p>}
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            id="password"
            required
          />
          <button type="submit" onTouchStart="">
            INICIA SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
}
