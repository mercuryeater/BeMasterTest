import { useParams } from "react-router-dom";
import db from "../../../db.json";
import "./ContentCategory.scss";

export default function ContentCategory() {
  const { categoryName } = useParams();
  const category = db.categories[categoryName];
  console.log(category);

  return (
    <div className="contentCategory">
      <img
        className="contentCategory__title"
        src={category[0].banner}
        alt={`banner for ${categoryName}`}
      />

      <main className="contentCategory__cards">
        {category.map((movie, index) => (
          <div className="contentCategory__cards__card" key={index}>
            <img
              src="https://www.movieposters.com/cdn/shop/files/groundhogday.24x36_480x.progressive.jpg?v=1707501927"
              alt={`Movie poster for ${movie.nombre}`}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
