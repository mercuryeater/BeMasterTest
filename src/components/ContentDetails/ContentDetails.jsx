import { useParams } from "react-router-dom";
import db from "../../../db.json";
import "./ContentDetails.scss";

export default function ContentDetails() {
  const { categoryName, movieID } = useParams();

  const category = db.categories[categoryName];
  console.log(category);
  const movieDetails = category.find((movie) => movie.id === parseInt(movieID));
  console.log(movieDetails);

  return (
    <main className="contentDetails">
      <img src={movieDetails.poster} alt={`Poster de ${movieDetails.nombre}`} />
      <div className="contentDetails__text">
        <h2 className="contentDetails__title">
          {movieDetails.nombre} ({movieDetails.año})
        </h2>
        <h4 className="contentDetails__direction">{movieDetails.director}</h4>
        <p className="contentDetails__description">
          {movieDetails.descripcion}
        </p>
        <p>
          <a target="_blank" href={movieDetails.trailer}>
            Ver Trailer
          </a>
        </p>
      </div>
    </main>
  );
}
