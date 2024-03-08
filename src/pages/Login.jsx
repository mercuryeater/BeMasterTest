export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">
          <h1>Login</h1>
        </div>
        <div className="login__form">
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
