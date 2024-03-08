import "./Login.scss";
import logo from "@assets/beMaster2.png";
export default function Login() {
  function userLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData);
    console.log("Login attempt: " + JSON.stringify(loginData));
  }

  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="logoBeMaster" />
      <div className="login__container">
        <form className="login__form" onSubmit={userLogin}>
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            id="password"
          />
          <button type="submit">INICIA SESIÓN</button>
        </form>
      </div>
    </div>
  );
}
