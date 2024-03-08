import { useRouteError } from "react-router-dom";
import notFoundImg from "@assets/404-john-travolta.gif";
import "./NotFound.scss";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="error">
      <h1>Error {error.status}</h1>
      <img src={notFoundImg} alt="lost John Travolta" />
      <p>Página no encontrada</p>
      <p>{error.data}</p>
    </main>
  );
}
