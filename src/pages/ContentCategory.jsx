import { useParams } from "react-router-dom";
import Header from "@components/Header/Header.jsx";

export default function ContentCategory() {
  const { categoryName } = useParams();

  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,10,24,1) 53%)",
        height: "100vh",
      }}
    >
      <Header />
      <h1>Category: {categoryName}</h1>
    </div>
  );
}
