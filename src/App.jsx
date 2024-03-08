import { Link } from "react-router-dom";
import "./App.scss";
import img from "./assets/home.png";
import logo from "./assets/beMaster2.png";

function App() {
  return (
    <main className="landing">
      <img className="landing__homeImg" src={img} alt="" />
      <section className="landing__text">
        <img className="landing__text__logo" src={logo} alt="" />
        <h1>Las mejores historias para los cinefilos de verdad</h1>
        <Link to="/login">
          <button type="button">LOG IN</button>
        </Link>
      </section>
    </main>
  );
}

export default App;
