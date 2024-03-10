import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import db from "../../../db.json";
import "./ContentCategory.scss";

export default function ContentCategory() {
  const { categoryName } = useParams();
  const category = db.categories[categoryName];
  console.log(category);

  const movies = category.filter((item, index) => {
    if (index === 0) {
      return false;
    }
    return true;
  });

  return (
    <div className="contentCategory">
      <img
        className="contentCategory__title"
        src={category[0].banner}
        alt={`banner for ${categoryName}`}
      />

      <main className="contentCategory__cards">
        {movies.map((movie, index) => (
          <Link
            to={`/categories/${categoryName}/${movie.id}`}
            className="contentCategory__cards__card"
            key={index}
          >
            <img src={movie.poster} alt={`Movie poster for ${movie.nombre}`} />
          </Link>
        ))}
      </main>
    </div>
  );
}
