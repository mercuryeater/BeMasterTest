import "./App.scss";
import img from "./assets/home.png";

function App() {
  return (
    <main className="landing">
      <img className="landing__homeImg" src={img} alt="" />
      {/* Un btn absoluto de Log in */}
      <h3>Las mejores historias para los cinefilos de verdad</h3>
      <button>SUSCRIBETE AHORA</button>
    </main>
  );
}

export default App;
