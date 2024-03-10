import Home from "@components/Home/Home.jsx";
import Header from "@components/Header/Header.jsx";

export default function HomePage() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,10,24,1) 53%)",
        height: "100vh",
      }}
    >
      <Header />
      <Home />
    </div>
  );
}
