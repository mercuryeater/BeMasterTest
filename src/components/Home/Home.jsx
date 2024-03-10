import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import db from "../../../db.json";
import "./Home.scss";

export default function Home() {
  const user = useSelector((state) => state.user);
  const { categories } = user;

  const getBannerImageUrl = (categoryName) => {
    const category = db.categories[categoryName];
    return category && category[0] ? category[0].banner : null;
  };

  return (
    <div className="home">
      {categories.map((categoryName, index) => {
        const imgUrl = getBannerImageUrl(categoryName);
        return (
          <Link
            to={`/category/${categoryName}`}
            className="home__card"
            key={index}
          >
            {imgUrl ? (
              <img src={imgUrl} alt={`Card ${index + 1}`} />
            ) : (
              <h2>{categoryName}</h2>
            )}
          </Link>
        );
      })}
    </div>
  );
}
