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
    <div className="contentDetails">
      <h2>
        {movieDetails.nombre} ({movieDetails.año})
      </h2>
      <p>Director: {movieDetails.director}</p>
      <p>Descripción: {movieDetails.descripcion}</p>
      <img src={movieDetails.poster} alt={`Poster de ${movieDetails.nombre}`} />
      <p>
        <a href={movieDetails.trailer}>Ver Trailer</a>
      </p>
    </div>
  );
}
